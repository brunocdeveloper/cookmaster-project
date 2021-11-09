const { registerUser } = require('../models/userModels');

const createUser = async (req, res) => {
  const { name, password, email } = req.body;

  const user = await registerUser({ name, email, password });
  return res.status(201).json(user);
};

module.exports = { createUser };