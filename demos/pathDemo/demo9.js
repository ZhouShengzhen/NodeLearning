var {format} = require('path')
//通过路径对象生成路径
var pathObj = {
    root: '/',
    dir: '/hello/world',
    base: 'demo.txt',
    ext: '.txt',
    name: 'demo'
}

console.log(format(pathObj))