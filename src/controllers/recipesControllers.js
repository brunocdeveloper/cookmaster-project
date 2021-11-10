const { registerRecipes, getAllRecipes, getRecipesById } = require('../models/recipesModel');

const createRecipes = async (req, res) => {
  const { name, ingredients, preparation } = req.body;
  const { _id } = req.user;
  const userId = _id;
  const recipe = await registerRecipes({ name, ingredients, preparation, userId });
  return res.status(201).json(recipe);
};

const listRecipes = async (req, res) => {
  const recipes = await getAllRecipes();
  return res.status(200).json(recipes);
};

const listRecipesById = async (req, res) => {
  const { id } = req.params;
  const recipe = await getRecipesById(id);
  if (!recipe) return res.status(404).json({ message: 'recipe not found' });
  return res.status(200).json(recipe);
};

module.exports = { createRecipes, listRecipes, listRecipesById };
