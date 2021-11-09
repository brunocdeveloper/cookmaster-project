const connection = require('../models/connection');

const findUser = async (email) => {
  const db = await connection();

  const user = await db.collection('users').findOne({ email });
  return user;
};

module.exports = { findUser };