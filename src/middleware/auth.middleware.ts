import { Context } from 'koa'
import { errorEnum } from '/@/constants/errorEnum'
import userService from '/@/service/user.service'
import md5password from '/@/utils/password-handle'

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
