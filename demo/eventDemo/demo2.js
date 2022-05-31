const EventEmitter = require('events')

class CustomEvent extends EventEmitter {}

const ce = new CustomEvent()
//on函数
ce.on('error', (err, date) => {
    console.log(err)
    console.log(date)
})
//传入事件与信息
ce.emit('error', new Error('this is a error!'), Date.now())