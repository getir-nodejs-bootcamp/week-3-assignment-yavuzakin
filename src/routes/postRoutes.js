const router = require('express').Router();
const postController = require('../controllers/postController');

router.param('id', postController.checkPost);

router
    .route('/')
    .get(postController.getAllPosts)
    .post(postController.checkBody, postController.createPost);

router
    .route('/:id')
    .get(postController.getOnePost)
    .put(postController.checkBody, postController.updatePostWithPut, postController.writeFileAfterUpdate)
    .patch(postController.updatePostWithPatch, postController.writeFileAfterUpdate)
    .delete(postController.deletePost);

module.exports = router;