const mongoose = require('mongoose');
const { DB_URI, DB_OPTIONS } = require('../config');

module.exports.connect = () => {
    return new Promise((resolve, reject) => {
        mongoose
            .connect(DB_URI, DB_OPTIONS)
            .then(() => resolve({ uri: DB_URI }))
            .catch(error => reject(error));
    });
};

module.exports.close = () => {
    return mongoose.connection.close();
};
