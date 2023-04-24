import app from './app'
import { APP_PORT } from './app/config'

app.listen(APP_PORT, () => {
  console.log(`服务器在端口${APP_PORT}启动成功`)
})
