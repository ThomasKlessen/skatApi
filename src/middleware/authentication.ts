import passport from 'passport'
import jwtStrategy from './passportStrategies/jwtStrategy'

const authentication = function (req:any, res:any, next:any) {
    passport.use('jwt', jwtStrategy)
    passport.initialize()(req, res, next)
}

export default authentication
