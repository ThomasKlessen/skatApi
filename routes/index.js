const router = require('express').Router()
const usersRouter = require('./usersRoutes')
const authRouter = require('./authRoutes')

router.use('/auth', authRouter)
router.use('/users', usersRouter)

module.exports = router
