const EventEmitter = require('events')

class CustomEvent extends EventEmitter {}

const ce = new CustomEvent()
//使用once函数，只执行一次
ce.once('test', () => {
    console.log('test events')
})

setInterval(() => {
    ce.emit('test')
}, 1000)