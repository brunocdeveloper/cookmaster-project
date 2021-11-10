const Router = require('express').Router();
const { loginAuthorization } = require('../controllers/userControllers');

const { loginEmailValidation,
  loginPasswordValidation } = require('../middlewares/loginMiddlewares');

Router.post('/',
  loginPasswordValidation,
  loginEmailValidation,
  loginAuthorization);

module.exports = Router;