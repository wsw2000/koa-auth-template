import { Context } from 'koa'

class UserController {
  async login(ctx: Context) {}
}

const { login } = new UserController()

export { login }
