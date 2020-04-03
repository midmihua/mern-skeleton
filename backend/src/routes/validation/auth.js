const { body } = require('express-validator');

const { notify } = require('../../utils/notification');

module.exports.validatePut = (User) => {
    return [
        body('email')
            .isEmail()
            .withMessage(notify.enterValidField('email'))
            .custom((value, { req }) => {
                return User.findOne({ email: value })
                    .then(document => {
                        if (document)
                            return Promise.reject(notify.fieldExists('email'));
                    });
            })
            .normalizeEmail(),
        body('password')
            .trim()
            .isLength({ min: 6 })
            .withMessage(notify.fieldSymbolsEqualOrMore('password', 6))
    ];
};

module.exports.validatePost = () => {
    return [
        body('email')
            .isEmail()
            .withMessage(notify.enterValidField('email'))
            .normalizeEmail(),
        body('password')
            .trim()
            .isLength({ min: 6 })
            .withMessage(notify.fieldSymbolsEqualOrMore('password', 6))
    ];
};