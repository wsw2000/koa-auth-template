import userService from '/@/service/user.service'

import { IRouterContext } from 'koa-router'

interface UserRequestBody {
  name: string
  password: any
}

class UserController {
  async create(ctx: IRouterContext) {
    // 获取用户请求传递的参数
    const user: UserRequestBody = ctx.request['body']

    // 查询数据
    try {
      const result = await userService.create(user)
      if (result.serverStatus === 2) {
        ctx.body = {
          status: 200,
          message: '创建用户成功'
        }
      }
    } catch (error) {
      console.log('error~ ', error)
    }
  }
}

const { create } = new UserController()

export { create }
