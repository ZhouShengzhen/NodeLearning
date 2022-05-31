const koa = require('koa')

const app = new koa()

app.use(ctx => {
    if(ctx.url === '/') {
        ctx.body = '这是首页'
    } else if(ctx.url === '/user') {
        if(ctx.method === 'GET') {
            ctx.body = '这是用户列表页'
        } else if(ctx.method === 'POST') {
            ctx.body = '添加用户'
        }
    } else {
        ctx.status = 404
    }
})

app.listen(3000)