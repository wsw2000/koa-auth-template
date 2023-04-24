import Koa from 'koa'
import { registerRoutes } from '/@/router/index'
import bodyParser from 'koa-bodyparser'
import './database'
import errorHandler from './error-handle'
const app = new Koa()

app.use(bodyParser())

registerRoutes(app)

app.on('error', errorHandler)

export default app
