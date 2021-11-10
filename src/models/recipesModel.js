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

module.exports = { registerRecipes };
