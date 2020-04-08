import mongoose from 'mongoose';
const User = mongoose.model('User');
const bcrypt = require('bcrypt-nodejs');

module.exports.register = function (req, res) {
    console.log('registering User');

    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const contactNo = req.body.contactNo;

    User.findOne({ username }, function (err, user) {
        if (user) {
            res.status(409).json({ msg: "user already exist" });
        } else {
            User.create({
                username: username,
                email: email,
                contactNo: contactNo,
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
        }
    })

};