const { validationResult } = require('express-validator');

const { ValidationError } = require('../errors');
const { notify } = require('../utils/notification');
const { authentication } = require('../services/auth');
const User = require('../models/user');

const signup = async (req, res, next) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            const error = new ValidationError(notify.generalIncorrectData(), 422, errors.array());
            return next(error);
        }

        const { username, email, password } = req.body;

        const user = new User({
            username,
            email,
            password
        });

        const result = await user.save();

        if (!result) {
            const error = new ValidationError(notify.entityNotCreated('Account'), 404);
            return next(error);
        }

        return res.status(201).json({
            message: notify.entityCreated('Account'),
            result
        });

    } catch (error) {
        error.statusCode = error.statusCode ? error.statusCode : 500;
        return next(error);
    }
};

const login = async (req, res, next) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            const error = new ValidationError(notify.generalIncorrectData(), 422, errors.array());
            return next(error);
        }

        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!(user && await user.matchesPassword(password))) {
            throw new ValidationError(notify.generalNotAuthenticated(), 401);
        }

        const params = {
            email: user.email,
            userId: user._id.toString()
        };

        const token = authentication(params).generateToken();

        return res.status(200).json({
            token,
            userId: user._id.toString()
        });

    } catch (error) {
        error.statusCode = error.statusCode ? error.statusCode : 500;
        return next(error);
    }
};

const me = async (req, res, next) => {
    try {
        const collection = await User.findById(req.userId);

        if (!collection)
            throw new ValidationError(notify.collectionNotFetched('User'), 404);
            
        return res.status(200).json(collection);

    } catch (error) {
        error.statusCode = error.statusCode ? error.statusCode : 500;
        return next(error);
    }
};

module.exports = {
    signup,
    login,
    me
};
