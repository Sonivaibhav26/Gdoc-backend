import express from 'express';
var router = express.Router();

//Loading routes controller/handlers
var registerCtrl = require('../controllers/registerController.js');
var loginCtrl = require('../controllers/loginController.js');
var userCtrl = require('../controllers/registerCtrl.js/index.js.js');

//loginCtrl.authenticate needs to be added in rotes to authenticate

router
    .route('/register')
    .post(registerCtrl.register);

router
    .route('/login')
    .post(loginCtrl.login);


module.exports = router;