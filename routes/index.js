const router = require('express').Router()
const usersRouter = require('./usersRoutes')
const authRouter = require('./authRoutes')
const passport = require('passport')

router.use('/auth', authRouter)
router.use('/user',passport.authenticate('jwt', {session: false}), usersRouter)

module.exports = router
