const Router = require('express').Router();

const recipesControllers = require('../controllers/recipesControllers');
const { recipesEntriesVerify } = require('../middlewares/recipesMiddlewares');
const { validateJWT } = require('../middlewares/validateJWT');

Router.post('/',
  validateJWT,
  recipesEntriesVerify,
  recipesControllers.createRecipes);

Router.get('/', recipesControllers.listRecipes);

module.exports = Router;
