const path = require('path');
const fs = require('fs');
const morgan = require('morgan');
const { FILE_NAME, FILE_PATH } = require('../config');

module.exports.logging = () => {

    const accessLogStream = fs.createWriteStream(
        path.join(FILE_PATH, FILE_NAME),
        { flags: 'a' }
    );

    return morgan('combined', { stream: accessLogStream });
};
