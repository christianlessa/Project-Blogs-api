const express = require('express');

const router = express.Router();
const userController = require('../controller/user');
const { authorizationUser } = require('../middleware/authorization');
const { displayNameValid, emailValid, passwordValid } = require('../middleware/userValidation');

router.get('/', authorizationUser, userController.getAll);
router.post('/', displayNameValid, emailValid, passwordValid, userController.create);

module.exports = router;