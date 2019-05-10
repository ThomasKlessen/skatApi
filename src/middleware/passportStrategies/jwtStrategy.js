const passportJWT = require("passport-jwt/lib");
const ExtractJWT = passportJWT.ExtractJwt;
const JWTStrategy   = passportJWT.Strategy;
const config = require('../../config')

const registerJwtStrategy = function (passport) {
    const options = {
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey: config.jwtSecret
    }
    passport.use(new JWTStrategy(options, (jwt, done) => {
        return done(null, jwt)
    }))
}

module.exports = registerJwtStrategy