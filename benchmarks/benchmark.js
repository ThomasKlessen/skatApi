'use strict'

const handleResults = data => {
    console.log(data)
}
const autoCannon = require('autocannon')

const instance = autoCannon({
    url: 'http://localhost:3000/auth/login',
    method: 'POST',
    title: 'login',
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify({
        user: {
            username: "admin",
            password: "admin"
        }
    }),
    connections: 10, //default
    pipelining: 1, // default
    duration: 10 // default
})

// this is used to kill the instance on CTRL-C
process.once('SIGINT', () => {
    instance.stop()
})

instance.on('done', handleResults)


autoCannon.track(instance, {renderProgressBar: false})