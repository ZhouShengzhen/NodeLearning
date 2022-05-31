//ES6
//将路径进行组合
var {join} = require('path')

console.log(join('a','b','/c','//d'))
console.log(join('a','b','../c','//d'))