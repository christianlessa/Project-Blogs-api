const express = require('express');

const router = express.Router();
const categoriesController = require('../controller/categories');
const { authorizationUser } = require('../middleware/authorization');
const { nameValid } = require('../middleware/userValidation');

router.get('/', authorizationUser, categoriesController.getAll);
router.post('/', authorizationUser, nameValid, categoriesController.create);

module.exports = router;