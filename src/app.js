const express = require('express')
const logger = require('./middleware/logger/logger')
const successResponse = require('./middleware/responses/successResponse')
const failResponse = require('./middleware/responses/failResponse')
const notFoundResponse = require('./middleware/responses/notFoundResponse')
const unhandledErrorResponse = require('./middleware/responses/unhandledErrorResponse')
const authentication = require('./middleware/auth/authentication')
const apiRouter = require('./routes/router')
const app = express()
require('./middleware/postgres/postgres')

app.use(require('express-status-monitor')())
app.use(logger)
app.use(express.json())
app.use(successResponse)
app.use(failResponse)
app.use(authentication)
app.use('/', apiRouter)
app.use(notFoundResponse)
app.use(unhandledErrorResponse)

module.exports = app;
