const { 
  registerRecipes,
  getAllRecipes,
  getRecipesById,
  editRecipeById } = require('../models/recipesModel');

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

const putRecipesById = async (req, res) => {
  const { body } = req;
  const { id } = req.params;
  const { _id } = req.user;
  const userId = _id;
  const editedRecipe = await editRecipeById(id, body, userId);
  return res.status(200).json(editedRecipe);
};

module.exports = { createRecipes, listRecipes, listRecipesById, putRecipesById };
