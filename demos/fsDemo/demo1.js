var fs = require('fs')
//先实现同步读取，在实现异步读取
//异步读取
fs.readFile('./abc.txt',(err, data)=>{
    if(err){
        //终止程序
        return console.error(err)
    }
    console.log('异步读取', data.toString())
})

//同步读取
var data = fs.readFileSync('./abc.txt')
console.log('同步读取', data.toString())