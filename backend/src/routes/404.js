module.exports.incorrectRoute = (req, res, next) => {
    res.status(404).json({
        message: 'Path does not exist'
    });
};
