import { errorEnum } from '/@/constants/errorEnum'

const errorHandler = (error, ctx) => {
  let status, message

  switch (error.message) {
    case errorEnum.NAME_OR_PASSWORD_IS_REQUIRED:
      status = 400 // Bad Request
      message = '用户名或者密码不能为空~'
      break
    case errorEnum.USER_ALREADY_EXISTS:
      status = 409 // conflict
      message = '用户名已经存在~'
      break
    case errorEnum.USER_DOES_NOT_EXISTS:
      status = 400 // 参数错误
      message = '用户名不存在~'
      break
    case errorEnum.PASSWORD_IS_INCORRENT:
      status = 400 // 参数错误
      message = '密码是错误的~'
      break
    case errorEnum.UNAUTHORIZATION:
      status = 401 // 参数错误
      message = '无效的token~'
      break
    case errorEnum.UNPERMISSION:
      status = 401 // 参数错误
      message = '您不具备操作的权限~'
      break
    default:
      status = 404
      message = 'NOT FOUND'
  }

  ctx.status = status
  ctx.body = message
}

export default errorHandler
