import Router from 'koa-router'
import { verifyLogin, verifyAuth } from '/@/middleware/auth.middleware'
import { login, loginSuccess } from '/@/controller/auth.contorller'
const authRouter = new Router()

authRouter.post('/login', verifyLogin, login)

authRouter.get('/auth', verifyAuth, loginSuccess)

export default authRouter
