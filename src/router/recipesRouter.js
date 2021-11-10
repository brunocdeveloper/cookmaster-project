const Router = require('express').Router();

const { createRecipes } = require('../controllers/recipesControllers');
const { recipesEntriesVerify } = require('../middlewares/recipesMiddlewares');
const { validateJWT } = require('../middlewares/validateJWT');

Router.post('/', validateJWT, recipesEntriesVerify, createRecipes);

module.exports = Router;
