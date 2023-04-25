import * as dotenv from 'dotenv'
import fs from 'fs'
import path from 'path'

export const PRIVATE_KEY = fs.readFileSync(path.resolve(__dirname, './keys/private.key'))
export const PUBLIC_KEY = fs.readFileSync(path.resolve(__dirname, './keys/public.key'))

dotenv.config()

export const {
  APP_HOST,
  APP_PORT,
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_DATABASE,
  MYSQL_USER,
  MYSQL_PASSWORD
} = process.env
