const router = require('express').Router();
const userController = require('../controllers/userController');
const { checkUserBody, checkUserBodyOptional } = require('../validations/userValidations');
const validateRequestBody = require('../middlewares/validate');

router.param('id', userController.checkUser);

router
    .route('/')
    .get(userController.getAllUsers)
    .post(validateRequestBody(checkUserBody, 'body'), userController.createUser);

router
    .route('/:id')
    .get(userController.getOneUser)
    .put(validateRequestBody(checkUserBody, 'body'), userController.updateUserWithPut, userController.writeFileAfterUpdate)
    .patch(validateRequestBody(checkUserBodyOptional, 'body'), userController.updateUserWithPatch, userController.writeFileAfterUpdate)
    .delete(userController.deleteUser);

module.exports = router;