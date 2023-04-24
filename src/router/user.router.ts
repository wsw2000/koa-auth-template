import Router from 'koa-router'
import { create } from '/@/controller/user.contorller'
import { verifyUser, handlePassword } from '/@/middleware/user.middleware'
const userRouter = new Router({ prefix: '/users' })

userRouter.post('/register', verifyUser, handlePassword, create)

export default userRouter
