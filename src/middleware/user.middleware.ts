import { IRouterContext } from 'koa-router'
import { errorEnum } from '/@/constants/errorEnum'
import userService from '/@/service/user.service'
import md5password from '/@/utils/password-handle'
const verifyUser = async (ctx: IRouterContext, next) => {
  const { name, password } = ctx.request['body']
  console.log('name, password~~ ', name, password)

  if (!name || !password) {
    const error = new Error(errorEnum.NAME_OR_PASSWORD_IS_REQUIRED)
    return ctx.app.emit('error', error, ctx)
  }

  // 3.判断这次注册的用户名是没有被注册过
  const result = await userService.getUserByName(name)

  if (result.length) {
    const error = new Error(errorEnum.USER_ALREADY_EXISTS)
    return ctx.app.emit('error', error, ctx)
  }

  await next()
}

const handlePassword = async (ctx: IRouterContext, next) => {
  const { password } = ctx.request['body']
  ctx.request['body'].password = md5password(password)

  await next()
}
export { verifyUser, handlePassword }
