import routerFactory from 'express'
import passport from 'passport'
import usersRouter from './user/userRoutes'
import authRouter from './auth/authRoutes'

const apiRouter = routerFactory.Router()

apiRouter.use('/auth', authRouter)
apiRouter.use('/user',passport.authenticate('jwt', {session: false}, undefined), usersRouter)

export default apiRouter
