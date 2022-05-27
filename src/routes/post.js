const express = require('express');

const router = express.Router();
const postController = require('../controller/post');
const { titleValid, contentValid, categoryIdValid } = require('../middleware/postValidation');
const { authorizationUser } = require('../middleware/authorization');

router.get('/', authorizationUser, postController.getAll);
router.get('/:id', authorizationUser, postController.getById);
router.put('/:id',
 authorizationUser, titleValid, contentValid, postController.update);
router.post('/',
 authorizationUser, titleValid, contentValid, categoryIdValid, postController.create);

module.exports = router;
