import express from 'express';
var router = express.Router();

//Loading routes controller/handlers
var registerCtrl = require('../controllers/registerCtrl.js');
var loginCtrl = require('../controllers/loginCtrl.js');

//loginCtrl.authenticate needs to be added in rotes to authenticate

router
    .route('/register')
    .post(registerCtrl.register);

router
    .route('/login')
    .post(loginCtrl.login);


module.exports = router;