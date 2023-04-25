import { Context } from 'koa'
import { errorEnum } from '/@/constants/errorEnum'
import userService from '/@/service/user.service'
import md5password from '/@/utils/password-handle'
import jwt from 'jsonwebtoken'
import { PUBLIC_KEY } from '/@/app/config'

export const verifyLogin = async (ctx: Context, next) => {
  const { name, password } = ctx.request['body']

  console.log('name, password@ ', name, password)

  if (!name || !password) {
    const error = new Error(errorEnum.NAME_OR_PASSWORD_IS_REQUIRED)
    return ctx.app.emit('error', error, ctx)
  }

  // user does not exists
  const result = await userService.getUserByName(name)
  const user = result[0]

  if (!user?.id) {
    const error = new Error(errorEnum.USER_DOES_NOT_EXISTS)
    return ctx.app.emit('error', error, ctx)
  }
  if (md5password(password) !== user.password) {
    const error = new Error(errorEnum.PASSWORD_IS_INCORRENT)
    return ctx.app.emit('error', error, ctx)
  }

  ctx.user = user

  next()
}

export const verifyAuth = async (ctx, next) => {
  const token = ctx.headers.authorization
  console.log('authorization~~ ', token)

  if (!token) {
    const error = new Error(errorEnum.UNAUTHORIZATION)
    return ctx.app.emit('error', error, ctx)
  }

  try {
    // 解密
    const result = jwt.verify(token, PUBLIC_KEY, {
      algorithms: ['RS256'],
      allowInsecureKeySizes: true // https://github.com/auth0/node-jsonwebtoken/wiki/Migration-Notes:-v8-to-v9
    })
    ctx.user = result
    await next()
  } catch (err) {
    const error = new Error(errorEnum.UNAUTHORIZATION)
    ctx.app.emit('error', error, ctx)
  }
}
