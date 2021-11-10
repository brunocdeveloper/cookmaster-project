const { findUser } = require('../services/userServices');

const postNameVerify = async (req, res, next) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: 'Invalid entries. Try again.' });
  }

  next();
};

function validateEmail(email) {
  const validation = /\S+@\S+\.\S+/;
  return validation.test(email);
}

const postEmailVerify = async (req, res, next) => {
  const { email } = req.body;
  const validationEmail = validateEmail(email);
  const user = await findUser(email);
  if (!email || !validationEmail) {
    return res.status(400).json({ message: 'Invalid entries. Try again.' });
  }

  if (user) {
    return res.status(409).json({ message: 'Email already registered' });
  }

  next();
};

const postPasswordVerify = async (req, res, next) => {
  const { password } = req.body;

  if (!password) return res.status(400).json({ message: 'Invalid entries. Try again.' });

  next();
};

module.exports = { postNameVerify, postEmailVerify, postPasswordVerify };
