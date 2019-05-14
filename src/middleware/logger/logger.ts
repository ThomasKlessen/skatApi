import morgan from 'morgan'
import fs from 'fs'
import path from 'path'
import rfs from 'rotating-file-stream'

const logDirectory = path.join(__dirname,'../../../', 'log')

// ensure log directory exists
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory)

// create a rotating write stream
const accessLogStream = rfs('access.log', {
    initialRotation: true,
    interval: '1h', // rotate hourly
    path: logDirectory
})


const logger = morgan('dev', { stream: accessLogStream })

export default logger