const Router = require('express').Router();

const { createUser } = require('../controllers/userControllers');

const userMiddlewares = require('../middlewares/userMiddlewares');

Router.post('/',
  userMiddlewares.postNameVerify,
  userMiddlewares.postPasswordVerify,
  userMiddlewares.postEmailVerify,
  createUser);

module.exports = Router;