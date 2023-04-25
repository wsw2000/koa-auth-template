## Introduction

koa-auth-template

## 根目录 env 配置

```bash
APP_HOST=http://localhost
APP_PORT=8001

MYSQL_HOST=localhost
MYSQL_PORT=3306
MYSQL_DATABASE=play
MYSQL_USER=root
MYSQL_PASSWORD=wsw2000.

```

## 使用 openssl 生成私钥和公钥

- 获取项目代码

```bash
 openssl genrsa -out private.key 1024
 openssl  rsa -in private.key -pubout -out public.key
```
