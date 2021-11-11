const Router = require('express').Router();
const multer = require('multer');

const recipesControllers = require('../controllers/recipesControllers');
const { recipesEntriesVerify } = require('../middlewares/recipesMiddlewares');
const { validateJWT } = require('../middlewares/validateJWT');

const storage = multer.diskStorage({
  destination: (req, _file, callback) => {
    callback(null, 'src/uploads');
  },
  filename: (req, _file, callback) => {
    const { id } = req.params;
    callback(null, `${id}.jpeg`);
  },
});

const uploads = multer({ storage });

Router.post(
  '/',
  validateJWT,
  recipesEntriesVerify,
  recipesControllers.createRecipes,
);

Router.get('/', recipesControllers.listRecipes);

Router.get('/:id', recipesControllers.listRecipesById);

Router.put('/:id', validateJWT, recipesControllers.putRecipesById);

Router.delete('/:id', validateJWT, recipesControllers.excludeRecipesById);

Router.put(
  '/:id/image',
  validateJWT,
  uploads.single('image'),
  recipesControllers.editImage,
);

module.exports = Router;
