import express from 'express'
import postGetAll from './postGetAll'
const userRouter = express.Router()

userRouter.post('/getAll', postGetAll);

export default userRouter;
