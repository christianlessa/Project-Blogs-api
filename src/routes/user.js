const express = require('express');

const router = express.Router();
const userController = require('../controller/user');
const { displayNameValid, emailValid, passwordValid } = require('../middleware/userValidation');

router.post('/', displayNameValid, emailValid, passwordValid, userController.create);

module.exports = router;