var http = require('http')
//创建服务器对象，参数是回调函数
var app = http.createServer(function(req, resp){
    //HTML方式渲染输出
    resp.write('<b>hello world</b>')
    //一定要有end，不然创建不完整，不会反馈
    resp.end()
})
//listen，端口号/回调函数（服务器是否启动成功）
app.listen(3000, function(){
    console.log('服务器启动成功！')
})