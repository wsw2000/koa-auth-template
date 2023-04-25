import Router from 'koa-router'
import { verifyLogin } from '/@/middleware/auth.middleware'
import { login } from '/@/controller/auth.contorller'
const authRouter = new Router()

authRouter.post('/login', verifyLogin, login)

export default authRouter
