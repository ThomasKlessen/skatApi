import express from 'express'
import logger from './middleware/logger/logger'
import successHandler  from './middleware/responses/successResponse'
import failResponse  from './middleware/responses/failResponse'
import notFoundResponse  from './middleware/responses/responseNotFound'
import errorResponse  from './middleware/responses/errorResponse'
import authentication  from './middleware/authentication'
import apiRouter from './routes/apiRouter'
const app = express()
import './middleware/postgres/postgres'

app.use(require('express-status-monitor')())
app.use(logger)
app.use(express.json())
app.use(successHandler)
app.use(failResponse)
app.use(authentication)
app.use('/', apiRouter)
app.use(notFoundResponse)
app.use(errorResponse)


app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
// module.exports = app;
