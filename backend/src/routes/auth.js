const express = require('express');
const router = express.Router();

const { validatePut, validatePost } = require('./validation/auth');
const { AUTH } = require('./routes');
const { signup, login, me } = require('../controllers/auth');

const initRoutes = (userModel, authMiddleware) => {

    router.route(AUTH.ROUTES.SIGNUP).post(validatePut(userModel), signup);

    router.route(AUTH.ROUTES.LOGIN).post(validatePost(), login);
    
    router.route(AUTH.ROUTES.ME).get(authMiddleware, me);

    return router;
};

module.exports.authRoutes = initRoutes;
