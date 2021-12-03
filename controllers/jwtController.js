const jwt = require('jsonwebtoken');

// Get jwt
exports.getJWT = (req, res) => {
    const accessToken = jwt.sign(
        {
            data: 'foobar'
        },
        process.env.JWT_SECRET_KEY,
        {
            expiresIn: '3d'
        }
    );
    res.status(200).json({
        status: 'success',
        data: {
            accessToken
        }
    });
}