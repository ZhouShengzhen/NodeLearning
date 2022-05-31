const koa = require('koa2')

const app = new koa()

//context 上下文
app.use(ctx => {
    ctx.body = 'Hello World!!!!'
})

app.listen(3000)