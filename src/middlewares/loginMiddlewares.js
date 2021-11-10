const { findUser } = require('../services/userServices');

function validateEmail(email) {
  const validation = /\S+@\S+\.\S+/;
  return validation.test(email);
}

const loginEmailValidation = async (req, res, next) => {
  const { email } = req.body;
  const isValid = validateEmail(email);
  const user = await findUser(email);

  if (!isValid) return res.status(401).json({ message: 'All fields must be filled' });
  if (!user) return res.status(401).json({ message: 'Incorrect username or password' });
  next();
};

const loginPasswordValidation = async (req, res, next) => {
  const { password } = req.body;

  if (!password) return res.status(401).json({ message: 'All fields must be filled' });

  next();
};

module.exports = { loginEmailValidation, loginPasswordValidation };