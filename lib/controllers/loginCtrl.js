import mongoose from 'mongoose';
const User = mongoose.model('User');
const bcrypt = require('bcrypt-nodejs');
const jwt = require('jsonwebtoken');

module.exports.login = function (req, res) {
  console.log('logging in user');
  const username = req.body.username;
  const password = req.body.password;

  User.findOne({
    username: username
  }).exec(function (err, user) {
    if (err) {
      console.log(err);
      res.status(400).json(err);
    } else {
      if (user) {
        if (bcrypt.compareSync(password, user.password)) {
          console.log('User found', user);
          var token = jwt.sign({ username: user.username }, 's3cr3t', { expiresIn: 3600 });
          res.status(200).json({ success: true, token: token , username : user.username });
        } else {
          res.status(401).json('Unauthorized');
        }
      } else {
        res.status(404).json('User not Found');
      }
      
    }
  });
};

module.exports.authenticate = function (req, res, next) {
  var headerExists = req.headers.authorization;
  if (headerExists) {
    var token = req.headers.authorization.split(' ')[1];
    jwt.verify(token, 's3cr3t', function (error, decoded) {
      if (error) {
        console.log(error);
        res.status(401).json('Unauthorized');
      } else {
        req.user = decoded.username;
        next();
      }
    });
  } else {
    res.status(403).json('No token provided');
  }
};