const passportJWT = require("passport-jwt/lib");
const ExtractJWT = passportJWT.ExtractJwt;
const JWTStrategy   = passportJWT.Strategy;
const jwtCallback = require('./jwtCallback')
const config = require('../../../config')
const options = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.jwtSecret
}
const jwtStrategy = new JWTStrategy(options, jwtCallback)


module.exports = jwtStrategy