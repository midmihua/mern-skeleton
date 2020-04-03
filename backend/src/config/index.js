const { APP_PORT, JSON_LIMIT } = require('./app');

const { HOST, PORT, DB, DB_USER, DB_PASSWORD, DB_URI, DB_OPTIONS } = require('./db');

const { FILE_NAME, FILE_PATH } = require('./logging');

const { BCRYPT_MAX_BYTES, BCRYPT_WORK_FACTORY, JWT_SECRET, EXPIRES_IN } = require('./auth');

module.exports = {
    APP_PORT,
    JSON_LIMIT,
    HOST,
    PORT,
    DB,
    DB_USER,
    DB_PASSWORD,
    DB_URI,
    DB_OPTIONS,
    FILE_NAME,
    FILE_PATH,
    BCRYPT_MAX_BYTES,
    BCRYPT_WORK_FACTORY,
    JWT_SECRET,
    EXPIRES_IN
};
