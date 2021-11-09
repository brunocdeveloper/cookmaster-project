const connection = require('./connection');

const registerUser = async ({ name, email, password }) => {
  const role = 'user';
  const db = await connection();
  const user = await db.collection('users').insertOne({ name, email, role, password });
  return {
    user: {
      name,
      email,
      role,
      _id: user.insertedId,
    },
  };
};

module.exports = { registerUser };