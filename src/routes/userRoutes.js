const router = require('express').Router();
const userController = require('../controllers/userController');

router.param('id', userController.checkUser);

router
    .route('/')
    .get(userController.getAllUsers)
    .post(userController.checkBody, userController.createUser);

router
    .route('/:id')
    .get(userController.getOneUser)
    .put(userController.checkBody, userController.updateUserWithPut, userController.writeFileAfterUpdate)
    .patch(userController.updateUserWithPatch, userController.writeFileAfterUpdate)
    .delete(userController.deleteUser);

module.exports = router;