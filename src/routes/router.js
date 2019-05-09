const router = require('express').Router()
const passport = require('passport/lib')
const usersRouter = require('./user/userRoutes')
const authRouter = require('./auth/authRoutes')

router.use('/auth', authRouter)
router.use('/user',passport.authenticate('jwt', {session: false}, undefined), usersRouter)

module.exports = router
