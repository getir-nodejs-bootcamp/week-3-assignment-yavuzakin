const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.token;
    
    if(authHeader) {
        const token = authHeader.split(' ')[1];
        jwt.verify(token, process.env.JWT_SECRET_KEY, (err, data) => {
            if(err) {
                return res.status(403).json({
                    status: 'error',
                    message: 'Token is not valid'
                });
            } else {
                next();
                return;
            }
        });
    } else {
        return res.status(401).json({
            status: 'fail',
            message: 'No jwt!!!'
        });
    }
}

module.exports = verifyToken;