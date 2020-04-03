const BCRYPT_WORK_FACTORY = 12;
const BCRYPT_MAX_BYTES = 72;
const JWT_SECRET = process.env.JWT_SECRET;
const EXPIRES_IN = process.env.EXPIRES_IN || '1h';

module.exports = {
    BCRYPT_WORK_FACTORY,
    BCRYPT_MAX_BYTES,
    JWT_SECRET,
    EXPIRES_IN
}