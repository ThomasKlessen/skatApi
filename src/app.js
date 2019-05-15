const express = require('express')
const logger = require('./middleware/logger/logger')
const successHandler = require('./middleware/successResponse')
const errorResponse = require('./middleware/errorResponse')
const notFoundResponse = require('./middleware/response404')
const errorHandler = require('./middleware/errorHandler')
const authentication = require('./middleware/authentication')
const apiRouter = require('./routes/router')
const app = express()
require('./middleware/postgres/postgres')

app.use(require('express-status-monitor')())
app.use(logger)
app.use(express.json())
app.use(successHandler)
app.use(errorResponse)
app.use(authentication)
app.use('/', apiRouter)
app.use(notFoundResponse)
app.use(errorHandler)

module.exports = app;