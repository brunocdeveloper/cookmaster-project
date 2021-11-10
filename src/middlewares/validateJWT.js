const jwt = require('jsonwebtoken');
const { findUser } = require('../services/userServices');

const SECRET = 'minhachavesecreta';

const validateJWT = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ message: 'jwt malformed' });
  
  try {
    const decoded = jwt.verify(token, SECRET);
    if (!decoded) return res.status(401).json({ message: 'jwt malformed' });
    const user = await findUser(decoded.email);
    if (!user) return res.status(401).json({ message: 'jwt malformed' });
    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'jwt malformed' });
  }
};

module.exports = { validateJWT };