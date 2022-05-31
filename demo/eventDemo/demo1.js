const EventEmitter  = require('events')
//创建类继承
class CustomEvent extends EventEmitter {}
//实例化
const ce = new CustomEvent()

ce.on('test', () => {
    console.log('this is a test!')
})
//设置定时器，一秒一触发
setInterval(() => {
    ce.emit('test')
}, 1000)
