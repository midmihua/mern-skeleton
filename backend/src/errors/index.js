module.exports.ValidationError = class extends Error {
    constructor(message, code, array = [], ...params) {
        super(...params);
        this.message = message;
        this.statusCode = code;
        this.validationErrors = array;
    }
};
