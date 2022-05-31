const koa = require('koa2')

const app = new koa()

//创建中间件使用的是use函数
app.use(async (ctx, next) => {
    console.log('1')
    await next()
    console.log('1-1')
    ctx.body = 'Hello World'
})
//中间件是按照顺序执行的，上面的执行完，就直接输出了
//使用next，才可以执行下一个中间件，嵌套使用
app.use(async (ctx, next) => {
    console.log('2')
    await next()
    console.log('2-1')
})
//异步操作的时候注意顺序
app.use(ctx => {
    console.log('3')
})

app.listen(3000)