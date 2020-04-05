import mongoose from 'mongoose';
const User = mongoose.model('User');
const bcrypt = require('bcrypt-nodejs');

module.exports.register = function (req, res) {
    console.log('registering User');

    const username = req.body.username;
    const name = req.body.name;
    const password = req.body.password;
    const email = req.body.email;
    const contactNo = req.body.contactNo;

    User.create({
        username: username,
        name: name,
        email:email,
        contactNo:contactNo,
        password: bcrypt.hashSync(password, bcrypt.genSaltSync(10))
    }, function (err, user) {
        if (err) {
            console.log(err);
            res.status(400).json(err);
        } else {
            console.log('admin created', user);
            res.status(201).json(user);
        }
    });
};