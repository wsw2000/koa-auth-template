import fs from 'fs'
import path from 'path'
import Koa from 'koa'

export const registerRoutes = (app: Koa) => {
  // 读取路由文件
  const files = fs.readdirSync(path.resolve(__dirname))

  // 遍历路由文件，注册路由
  files.forEach((file) => {
    if (file === 'index.ts' || !file.endsWith('.ts')) {
      return
    }

    const route = require(path.join(__dirname, file)).default

    app.use(route.routes())
    app.use(route.allowedMethods())
  })
}
