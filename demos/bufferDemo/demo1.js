//默认填充为0
let buf1 = Buffer.alloc(10)
console.log(buf1)
//修改了默认填充
let buf2 = Buffer.alloc(5,1)
console.log(buf2)
//使用不安全的方式创建buffer
let buf3 = Buffer.allocUnsafe(6)
console.log(buf3)
//使用from并传入数组创建
let buf4 = Buffer.from([1, 2, 3])
console.log(buf4)
//使用from并传入字符串创建 默认UTF-8编码
let buf5 = Buffer.from('123')
console.log(buf5)
//使用from并传入字符串创建 使用base64编码
let buf6 = Buffer.from('123', 'base64')
console.log(buf6)