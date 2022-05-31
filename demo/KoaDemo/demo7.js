/**
 * 创建异常中间件
 * 不能运行，但可以学习其中的编写方法
 */

const koa = require('koa')
const router = require('./routes/user')
const bodyparser = require('koa-bodyparser')
const app = new koa()

app.use(async (ctx, next) => {
    try {
        await next()
    } catch (err) {
        console.log(err)
        console,log(err.status, err.statusCode)
        ctx.status = err.status || err.statusCode || 500
        ctx.body = {
            message: err.message
        }
    }
})

app.use(bodyparser())
app.use(router.routes())

app.listen(3000)