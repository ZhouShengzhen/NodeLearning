/**
 * 使用koa自带的参数校验
 * 安装方法 cnpm i koa-parameter --save
 * 不能运行，但可以学习其中的编写方法
 */

const koa = require('koa')
const router = require('./routes/user')
const bodyparser = require('koa-bodyparser')
const jsonerror = require('koa-json-error')
const parameter = require('koa-parameter')
const app = new koa()

/**
 * controllers/user文件
 */

// const add = async(ctx) => {
//     ctx.verifyParams({
//         username: {
//             type: 'string',
//             required: true
//         },
//         pwd: {
//             type: 'string',
//             required: true
//         }
//     })
// }

app.use(jsonerror())
app.use(bodyparser())
app,use(parameter(app))
app.use(router.routes())

app.listen(3000)