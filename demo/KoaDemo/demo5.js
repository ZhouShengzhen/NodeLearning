/**
 * ctx拿参数
 */

const koa = require('koa')
const Router = require('koa-router')
const bodyparser = require('koa-bodyparser')
const app = new koa()
const router = new Router({
    //添加所有的路由前缀
    prefix: ''
})

router.get('/', async (ctx) => {
    ctx.body = '这是首页！'
})
router.get('/del', async (ctx) => {
    //两种方法 GET方法
    //let {id} = ctx.request.query
    let {id} = ctx.query
    console.log(id)
    ctx.body = '这是用户列表页'
})
router.post('/add', async (ctx) => {
    //POST方法
    //出错了，默认没有body，默认的不是我们想要的
    //let {username, pwd} = ctx.request.body
    //安装插件 cnpm i koa-bodyparser --save
    let {username, pwd} = ctx.request.body
    console.log(username, pwd)
    ctx.body = '添加用户'
})

router.get('/find/:id', async (ctx) => {
    //GET方法拿到路由参数
    let id = ctx.params.id
    console.log(id)
    ctx.body = '查找用户！'
})

app.use(bodyparser())
app.use(router.routes())

app.listen(3000)