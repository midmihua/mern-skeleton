const HOST = process.env.MONGO_HOST || 'localhost';
const PORT = process.env.MONGO_PORT || 27017;
const DB = process.env.MONGO_DB;
const DB_USER = process.env.MONGO_USERNAME;
const DB_PASSWORD = process.env.MONGO_PASSWORD;
const DB_URI = `mongodb://${DB_USER}:${encodeURIComponent(DB_PASSWORD)}@${HOST}:${PORT}/${DB}`;

const DB_OPTIONS = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
};

module.exports = {
    HOST,
    PORT,
    DB,
    DB_USER,
    DB_PASSWORD,
    DB_URI,
    DB_OPTIONS
};
