const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.token;
    
    if(authHeader) {
        const token = authHeader.split(' ')[1];
        jwt.verify(token, process.env.JWT_SECRET_KEY, (err, data) => {
            if(err) {
                return res.status(403).json('Token is not valid!');
            } else {
                next();
                return;
            }
        });
    } else {
        return res.status(401).json('You are not authenticated!');
    }
}

module.exports = verifyToken;