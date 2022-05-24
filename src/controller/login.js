const serviceLogin = require('../services/user');

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const jwt = await serviceLogin.create(email, password);
    return jwt;
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = { loginUser };