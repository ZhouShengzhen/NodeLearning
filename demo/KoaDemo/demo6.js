/**
 * ctx拿参数
 * 并添加错误
 */

const koa = require('koa')
const Router = require('koa-router')
const bodyparser = require('koa-bodyparser')
const app = new koa()
const router = new Router({
    prefix: '/user'
})

//假数据
let userList = [{username:'tom', pwd:'123'}]

//查询所有用户
router.get('/', async (ctx) => {
    ctx.body = {
        data : userList
    }
})
//添加用户
router.post('/add', async (ctx) => {
    let {username, pwd} = ctx.request.body
    console.log(username, pwd)
    userList.push({
        username,
        pwd
    })
    ctx.body = {
        code: 200,
        msg: '添加成功'
    }
})
//删除用户
router.delete('/del', async(ctx) => {
    //选择属性
    let {id} = ctx.request.body
    userList.splice(Number(id), 1)
    ctx.body = {
        code: 200,
        msg: '删除成功！'
    }
})
//修改操作
router.put('/update', async(ctx) => {
    //选择对象
    let user = ctx.request.body
    userList.splice(Number(user.id), 1, {
        username: user.username,
        pwd: user.pwd
    })
    ctx.body = {
        code: 200,
        msg: '修改成功'
    }
})
//查找单一用户
router.get('/find/:id', async (ctx) => {
    let id = ctx.params.id

    if(Number(id) > (userList.length - 1)){
        ctx.throw(412, '先决条件失败')
    }

    ctx.body = {
        code: 200,
        user: userList[Number(id)],
        msg: '查找成功'
    }
})
app.use(bodyparser())
app.use(router.routes())

app.listen(3000)