const Router = require('express').Router();

const { createUser } = require('../controllers/userControllers');
const userMiddlewares = require('../middlewares/userMiddlewares');

Router.post('/',
  userMiddlewares.nameVerify,
  userMiddlewares.passwordVerify,
  userMiddlewares.emailVerify,
  createUser);

module.exports = Router;