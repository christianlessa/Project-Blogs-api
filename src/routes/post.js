const express = require('express');

const router = express.Router();
const postController = require('../controller/post');
const { titleValid, contentValid, categoryIdValid } = require('../middleware/postValidation');
const { authorizationUser } = require('../middleware/authorization');

router.get('/', authorizationUser, postController.getAll);
router.post('/',
 authorizationUser, titleValid, contentValid, categoryIdValid, postController.create);

module.exports = router;
