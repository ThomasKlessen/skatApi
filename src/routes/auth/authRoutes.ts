import express from 'express'
import postLogin from './postLogin'
import postRegister from './postRegister'
const authRouter = express.Router()

authRouter.post('/login', postLogin);

authRouter.post('/register', postRegister);

export default authRouter;