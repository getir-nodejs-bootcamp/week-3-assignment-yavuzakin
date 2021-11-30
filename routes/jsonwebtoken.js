const router = require('express').Router();
const jwt = require('jsonwebtoken');

router.get('/', (req, res) => {
    // JWT
    const accessToken = jwt.sign(
        {
            data: 'foobar'
        },
        process.env.JWT_SECRET_KEY,
        {
            expiresIn: '3d'
        }
    );
    res.status(200).json(accessToken);
});

module.exports = router;