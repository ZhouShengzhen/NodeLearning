//byteLength
let length = Buffer.byteLength("hello")
console.log(length)

//isBuffer
let a = {}
let buf = Buffer.from("hello")

console.log(Buffer.isBuffer(a))
console.log(Buffer.isBuffer(buf))

//concat 连接Buffer 数组形式
let buf1 = Buffer.from("This")
let buf2 = Buffer.from("is")
let buf3 = Buffer.from("a")
let buf4 = Buffer.from("buffer")
let buf5 = Buffer.from("demo2")

let BufObj = Buffer.concat([buf1, buf2, buf3, buf4, buf5])
console.log(BufObj.toString("UTF-8"))
