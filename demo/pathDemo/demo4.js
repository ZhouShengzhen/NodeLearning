var {isAbsolute} = require('path')
//判断是否为绝对路径
console.log(isAbsolute('./a/b/c'))
console.log(isAbsolute('/a/b/c'))