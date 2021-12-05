const router = require('express').Router();
const postController = require('../controllers/postController');
const { checkPostBody, checkPostBodyOptional } = require('../validations/postValidations');
const validateRequestBody = require('../middlewares/validate');

router.param('id', postController.checkPost);

router
    .route('/')
    .get(postController.getAllPosts)
    .post(validateRequestBody(checkPostBody, 'body'), postController.createPost);

router
    .route('/:id')
    .get(postController.getOnePost)
    .put(validateRequestBody(checkPostBody, 'body'), postController.updatePostWithPut, postController.writeFileAfterUpdate)
    .patch(validateRequestBody(checkPostBodyOptional, 'body'),postController.updatePostWithPatch, postController.writeFileAfterUpdate)
    .delete(postController.deletePost);

module.exports = router;