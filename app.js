const express = require('express')
const logger = require('morgan')
const commonHandler = require('./src/middleware/commonHandler')
const authentication = require('./src/middleware/authentication')
const apiRouter = require('./src/routes')
const app = express()
require('./src/wrapper/postgres')

app.use(require('express-status-monitor')());
app.use(logger('dev'));
app.use(express.json());
app.use(commonHandler.defaultHandler)
app.use(authentication)
app.use('/', apiRouter);
app.use(commonHandler.handle404);
app.use(commonHandler.defaultError);

module.exports = app;
