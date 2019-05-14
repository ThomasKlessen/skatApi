import passportJWT from 'passport-jwt'
const ExtractJWT = passportJWT.ExtractJwt;
const JWTStrategy   = passportJWT.Strategy;
import jwtCallback from './jwtCallback'
import config from '../../config'
const options = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.jwtSecret
}
const jwtStrategy = new JWTStrategy(options, jwtCallback)

export  default jwtStrategy