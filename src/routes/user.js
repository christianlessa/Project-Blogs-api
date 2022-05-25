const express = require('express');

const router = express.Router();
const userController = require('../controller/user');
const { authorizationUser } = require('../middleware/authorization');
const { displayNameValid, emailValid, passwordValid } = require('../middleware/userValidation');

router.get('/', authorizationUser, userController.getAll);
router.get('/:id', authorizationUser, userController.getById);
router.post('/', displayNameValid, emailValid, passwordValid, userController.create);

module.exports = router;