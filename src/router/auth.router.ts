import Router from 'koa-router'
import { verifyLogin, login } from '/@/middleware/auth.middleware'
const authRouter = new Router({ prefix: '/' })

authRouter.post('/login', verifyLogin, login)

export default authRouter
