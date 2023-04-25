import { Context } from 'koa'
import jwt from 'jsonwebtoken'
import { PRIVATE_KEY } from '/@/app/config'

class UserController {
  async login(ctx: Context) {
    const { id, name } = ctx.user
    const token = jwt.sign({ id, name }, PRIVATE_KEY, {
      expiresIn: 60 * 60 * 24,
      algorithm: 'RS256',
      allowInsecureKeySizes: true // https://github.com/auth0/node-jsonwebtoken/wiki/Migration-Notes:-v8-to-v9
    })
    console.log('token ~~ ', token)

    ctx.body = {
      code: 0,
      status: 200,
      data: {
        id,
        name,
        token
      },
      message: 'login success~~'
    }
  }
  async loginSuccess(ctx: Context) {
    ctx.body = {
      code: 0,
      data: 'login success~~'
    }
  }
}

export const { login, loginSuccess } = new UserController()
