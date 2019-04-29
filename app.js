const express = require('express')
const logger = require('morgan')
const {postgresInit} = require('./middleware/postgres')
const commonHandler = require('./middleware/commonHandler')
const authentication = require('./middleware/authentication')
const apiRouter = require('./routes')
const app = express()

app.use(logger('dev'));
app.use(express.json());
app.use(commonHandler.defaultHandler)
app.use(postgresInit)
app.use(authentication)
app.use('/', apiRouter);
app.use(commonHandler.handle404);
app.use(commonHandler.defaultError);

module.exports = app;
