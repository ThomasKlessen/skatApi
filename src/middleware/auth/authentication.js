const passport = require('passport/lib')
const jwtStrategy = require('./passportStrategies/jwtStrategy')

const authentication = function (req, res, next) {
    const options = {}
    passport.use('jwt', jwtStrategy)
    passport.initialize(options)(req, res, next)
}

module.exports = authentication
