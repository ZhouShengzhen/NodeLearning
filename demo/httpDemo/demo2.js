var http = require('http')
var fs = require('fs')

//创建服务器对象，参数是回调函数
var app = http.createServer(function(req, resp){
    //使用fs读取静态资源文件
    var data = fs.readFileSync('./index.html')

    resp.write(data.toString())

    //一定要有end，不然创建不完整，不会反馈
    resp.end()
})
//listen，端口号/回调函数（服务器是否启动成功）
app.listen(3000, function(){
    console.log('服务器启动成功！')
})