const Router = require('express').Router();

const recipesControllers = require('../controllers/recipesControllers');
const { recipesEntriesVerify } = require('../middlewares/recipesMiddlewares');
const { validateJWT } = require('../middlewares/validateJWT');

Router.post('/',
  validateJWT,
  recipesEntriesVerify,
  recipesControllers.createRecipes);

Router.get('/', recipesControllers.listRecipes);

Router.get('/:id', recipesControllers.listRecipesById);

Router.put('/:id', validateJWT, recipesControllers.putRecipesById);

Router.delete('/:id', validateJWT, recipesControllers.excludeRecipesById);

module.exports = Router;
