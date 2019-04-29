const passport = require('passport')
const passportJWT = require("passport-jwt");
const ExtractJWT = passportJWT.ExtractJwt;
const JWTStrategy   = passportJWT.Strategy;
const config = require('../config')

const registerStrategies = function (passport) {
    const options = {
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey: config.jwtSecret
    }
    passport.use(new JWTStrategy(options, (jwt, done) => {
        return done(null, jwt)
    }))

}

const authentication = function (req, res, next) {
    registerStrategies(passport)
    passport.initialize()(req, res, next)
}

module.exports = authentication
