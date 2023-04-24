import mysql from 'mysql2'
import { MYSQL_HOST, MYSQL_PORT, MYSQL_DATABASE, MYSQL_USER, MYSQL_PASSWORD } from '../app/config'

const connections = mysql.createPool({
  host: MYSQL_HOST,
  port: Number(MYSQL_PORT),
  database: MYSQL_DATABASE,
  user: MYSQL_USER,
  password: MYSQL_PASSWORD
})

connections.getConnection((err, conn) => {
  console.log('err~~ ', err)

  conn.connect((err) => {
    if (err) {
      console.log('连接失败:', err)
    } else {
      console.log('数据库连接成功~')
    }
  })
})

export default connections.promise()
