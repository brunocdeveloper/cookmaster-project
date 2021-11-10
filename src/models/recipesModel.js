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

module.exports = { registerRecipes, getAllRecipes, getRecipesById };
