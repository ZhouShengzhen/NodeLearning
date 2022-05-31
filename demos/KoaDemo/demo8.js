/**
 * 使用koa自带的异常中间件
 * 安装方法 cnpm i koa-json-error --save
 * 不能运行，但可以学习其中的编写方法
 */

const koa = require('koa')
const router = require('./routes/user')
const bodyparser = require('koa-bodyparser')
const jsonerror = require('koa-json-error')
const app = new koa()

app.use(jsonerror())
app.use(bodyparser())
app.use(router.routes())

app.listen(3000)