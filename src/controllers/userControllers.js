const jwt = require('jsonwebtoken');
const { registerUser } = require('../models/userModels');
const { findUser } = require('../services/userServices');

const SECRET = 'minhachavesecreta';
const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const createUser = async (req, res) => {
  const { name, password, email } = req.body;

  const user = await registerUser({ name, email, password });
  return res.status(201).json(user);
};

const loginAuthorization = async (req, res) => {
  const { email, password } = req.body;
  const user = await findUser(email);
  const token = jwt.sign(user, SECRET, jwtConfig);
  
  if (!email || !password) {
    return res.status(401).json({ message: 'All fields must be filled' });
  }

  if (user.password === password && user.email === email) {
    return res.status(200).json({ token });
  }
};

module.exports = { createUser, loginAuthorization };