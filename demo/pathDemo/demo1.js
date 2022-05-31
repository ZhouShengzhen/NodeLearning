var path = require('path')
//规范化路径
var strPath = path.normalize("a/b//c////d\\\e")

console.log(strPath)