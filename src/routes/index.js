const router = require('express').Router()
const passport = require('passport/lib')
const usersRouter = require('./usersRoutes')
const authRouter = require('./authRoutes')

router.use('/auth', authRouter)
router.use('/user',passport.authenticate('jwt', {session: false}), usersRouter)

module.exports = router
