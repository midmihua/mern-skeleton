const jwt = require('jsonwebtoken');

const { JWT_SECRET, EXPIRES_IN } = require('../config');

module.exports.authentication = (props) => {

    const { email, userId, token } = props;

    generateToken = () => {
        return jwt.sign(
            {
                email,
                userId
            },
            JWT_SECRET,
            {
                expiresIn: EXPIRES_IN
            }
        );
    }

    verifyToken = () => {
        return jwt.verify(token, JWT_SECRET);
    }

    return {
        generateToken,
        verifyToken
    }
};
