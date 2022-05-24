const userServices = require('../services/user');

const create = async (req, res) => {
  const { email, password } = req.body;

  try {
    const token = await userServices.create(email, password);
    return res.status(200).json({ token });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = {
  create,
};
