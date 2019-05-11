const morgan = require('morgan')
const fs = require('fs')
const path = require('path')
const rfs = require('rotating-file-stream')

const logDirectory = path.join(__dirname,'../../../', 'log')

// ensure log directory exists
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory)

// create a rotating write stream
var accessLogStream = rfs('access.log', {
    initialRotation: true,
    interval: '1h', // rotate hourly
    path: logDirectory
})


const logger = morgan('dev', { stream: accessLogStream })

module.exports = logger