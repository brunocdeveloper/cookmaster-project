const { ObjectId } = require('mongodb');
const connection = require('./connection');

const registerRecipes = async ({ name, ingredients, preparation, userId }) => {
  const db = await connection();
  const user = await db.collection('recipes').insertOne({ name, ingredients, preparation, userId });
  return {
    recipe: {
      name,
      ingredients,
      preparation,
      userId,
      _id: user.insertedId,
    },
  };
};

const getAllRecipes = async () => {
  const db = await connection();
  const data = await db.collection('recipes').find().toArray();
  return data;
};

const getRecipesById = async (id) => {
  if (!ObjectId.isValid(id)) {
    return null;
  }
  const db = await connection();
  const data = await db.collection('recipes').findOne({ _id: ObjectId(id) });
  return data;
};

const editRecipeById = async (id, body, userId) => {
  const { name, ingredients, preparation } = body;
  if (!ObjectId.isValid(id)) {
    return null;
  }
  const db = await connection();
  await db.collection('recipes').updateOne({ _id: ObjectId(id) },
  { $set: { name, ingredients, preparation } });
  return {
    _id: id,
    name,
    ingredients,
    preparation,
    userId,
  };
};

module.exports = { registerRecipes, getAllRecipes, getRecipesById, editRecipeById };
