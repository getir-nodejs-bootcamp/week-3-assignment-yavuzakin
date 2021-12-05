const router = require('express').Router();
const jwtController = require('../controllers/jwtController');

router
    .route('/')
    .get(jwtController.getJWT);

module.exports = router;