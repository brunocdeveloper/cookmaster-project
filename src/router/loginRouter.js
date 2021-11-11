const Router = require('express').Router();
const { loginAuthorization } = require('../controllers/userControllers');

const loginMiddlewares = require('../middlewares/loginMiddlewares');

Router.post('/',
  loginMiddlewares.loginPasswordValidation,
  loginMiddlewares.loginEmailValidation,
  loginAuthorization);

module.exports = Router;