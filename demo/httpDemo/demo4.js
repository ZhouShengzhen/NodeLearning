var http = require('http')
var fs = require('fs')
var querystring = require('querystring')
//使用POST请求，来接受参数
var app = http.createServer(function(req, resp){
    
    var path = req.url

    console.log(path)

    if(path === '/indexpost.html'){
        var data = fs.readFileSync('./indexpost.html')
        resp.write(data.toString())
    }

    if(path === '/reg'){
        var body = ''
        //监听data数据
        req.on('data', function(chunk){
            body += chunk
        })

        req.on('end', function(){
            body = querystring.parse(body)
            console.log(body.username)
        })
    }

    //一定要有end，不然创建不完整，不会反馈
    resp.end()
})
//listen，端口号/回调函数（服务器是否启动成功）
app.listen(3000, function(){
    console.log('服务器启动成功！')
})