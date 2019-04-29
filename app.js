const express = require('express')
const logger = require('morgan')

const {dbMiddleWare} = require('./plugins/db')
const defaultHandler = require('./plugins/defaultHandler')
const loginMiddleWare = require('./plugins/loginMiddleWare')
const apiRouter = require('./routes')


const app = express()

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(defaultHandler)
app.use(dbMiddleWare)
app.use(loginMiddleWare)
app.use('/', apiRouter);


module.exports = app;
