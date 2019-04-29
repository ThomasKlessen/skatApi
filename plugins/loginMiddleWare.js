const passport = require('passport')
const passportJWT = require("passport-jwt");
const ExtractJWT = passportJWT.ExtractJwt;
const JWTStrategy   = passportJWT.Strategy;
const config = require('../config')

const register = function (passport) {
    const options = {
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey: config.jwtSecret
    }
    passport.use(new JWTStrategy(options, (jwt, done) => {
        return done(null, jwt)
    }))

}

const loginMiddleWare = function (req, res, next) {
    register(passport)
    passport.initialize()(req, res, next)
}

module.exports = loginMiddleWare