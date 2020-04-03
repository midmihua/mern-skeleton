module.exports.errorHandling = (error, req, res, next) => {
    const status = error.statusCode || 500;
    const message = {
        message: error.message,
        errors: Array.isArray(error.validationErrors) &&
            error.validationErrors.length > 0 ?
            error.validationErrors : undefined
    };
    
    res.status(status).json(message);
};
