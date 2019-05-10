const passport = require('passport/lib')
const jwtStrategy = require('./passportStrategies/jwtStrategy')

const authentication = function (req, res, next) {
    const options = {}
    jwtStrategy(passport)
    passport.initialize(options)(req, res, next)
}

module.exports = authentication
