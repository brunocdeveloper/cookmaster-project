const { registerRecipes } = require('../models/recipesModel');

const createRecipes = async (req, res) => {
  const { name, ingredients, preparation } = req.body;
  const { _id } = req.user;
  const userId = _id;
  const recipe = await registerRecipes({ name, ingredients, preparation, userId });
  return res.status(201).json(recipe);
};

module.exports = { createRecipes };
