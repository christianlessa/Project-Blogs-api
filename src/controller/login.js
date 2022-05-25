const loginServices = require('../services/login');

const create = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  try {
    const token = await loginServices.create(displayName, email, password, image);
    return res.status(200).json({ token });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = {
  create,
};
