const { registerRecipes, getAllRecipes } = require('../models/recipesModel');

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

module.exports = { createRecipes, listRecipes };
