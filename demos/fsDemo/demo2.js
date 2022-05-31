var fs = require('fs')

//同步写入。覆盖之前的内容
fs.writeFileSync('./abc.txt', '这是使用writeFileSync写入的内容')

console.log('start')
//异步写入
fs.writeFile('./abc.txt', '这是使用writeFile写入发的内容',(err)=>{
    if(err){
        return console.error(err)
    }
    console.log('写入完毕')
})
console.log('end')