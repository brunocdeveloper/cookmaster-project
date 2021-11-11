const { updateImage, getRecipesById } = require('../models/recipesModel');

const updateImageVerify = async (id, user) => {
  const { _id } = user;
  const recipe = await getRecipesById(id);
  const { userId } = recipe;
  if (Number(userId) === (_id)) {
    console.log('não ta dando certo');
  }
  const url = `localhost:3000/src/uploads/${id}.jpeg`;
  const editedImage = await updateImage(id, url);
  return editedImage;
};

module.exports = { updateImageVerify };