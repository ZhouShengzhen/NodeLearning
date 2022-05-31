/**
 * koa-router的使用
 * 
 */

const koa = require('koa')
const Router = require('koa-router')
const app = new koa()
const router = new Router({
    //添加所有的路由前缀
    prefix: ''
})

router.get('/', async (ctx) => {
    ctx.body = '这是首页！'
})
router.get('/user', async (ctx) => {
    ctx.body = '这是用户列表页'
})
router.post('/user/add', async (ctx) => {
    ctx.body = '添加用户'
})

app.use(router.routes())

app.listen(3000)