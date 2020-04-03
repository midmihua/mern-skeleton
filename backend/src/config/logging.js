const FILE_NAME = (process.env.NODE_ENV == 'local') ? process.env.APP_LOCAL_LOG : process.env.APP_LOG;
const FILE_PATH = `${__dirname}/..`;

module.exports = {
    FILE_NAME,
    FILE_PATH
};
