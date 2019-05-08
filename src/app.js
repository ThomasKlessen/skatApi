const express = require('express')
const logger = require('morgan')
const commonHandler = require('./middleware/commonHandler')
const authentication = require('./middleware/authentication')
const apiRouter = require('./routes')
const app = express()
require('./wrapper/postgres')

app.use(require('express-status-monitor')());
app.use(logger('dev'));
app.use(express.json());
app.use(commonHandler.defaultHandler)
app.use(authentication)
app.use('/', apiRouter);
app.use(commonHandler.handle404);
app.use(commonHandler.defaultError);

module.exports = app;
