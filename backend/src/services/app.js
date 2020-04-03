const express = require('express');
const actuator = require('express-actuator');
const bodyParser = require('body-parser');
const compression = require('compression');
const helmet = require('helmet');
const swaggerUi = require('swagger-ui-express');

const { JSON_LIMIT } = require('../config');
const swaggerDoc = require('../utils/swagger/swagger.json');

module.exports.createApp = (options) => {

    const {
        routes,
        logging,
        errorHandling
    } = options;

    const app = express();

    // application/json data
    app.use(bodyParser.json({
        limit: JSON_LIMIT
    }));

    // CORS (cross origin resource sharing)
    // This middleware must be set up before route configuration
    app.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, Origin, X-Requested-With, Accept');
        next();
    });

    // Healthcheck information
    app.use(actuator({
        basePath: '/api/actuator', // ['/info', '/metrics', '/health']
        infoGitMode: 'full'  // ['simple' or 'full']
    }));

    // Helmet helps you secure your Express apps by setting various HTTP headers.
    app.use(helmet());

    // Middleware to compress the traffic (to have a better performance)
    app.use(compression());

    // Requests logging in case of local env
    app.use(logging());

    // Swagger - RESTApi documentation
    app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

    // Routes
    routes.map(route => app.use(route));

    // Error-handling middleware
    app.use(errorHandling);

    return app;
};
