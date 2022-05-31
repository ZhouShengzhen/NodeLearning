## Nodejs(Note 1)

### 最简单node实现

```JavaScript

//创建系统模块
var http = require('http');
//通过系统模块创建服务器应用
var app = http.createServer((req, res) =>{
    res.write('hello world!');

    res.end()
})
//监听客户端的端口请求
app.listen(3000,()=>{
    console.log('服务器已启动')
})

```

### cnpm 安装包时的一些细节

* -S 生产环境：编译成浏览器直接执行的文件，会把依赖一起构建，一起编译。
* -D 开发环境：将来在编译的过程中，不会一起编译，不会一起发布。

### nodemon说明

* 没有代码热部署操作 需要 插件 cnpm i -nodemon -g
* 同时需要在package.json中要使用nodemon启动服务

### node模块化

* 模块分为自带模块、自定义模块
* 自定义模块一般都是很多地方都会用到的函数，相当于函数封装，便于使用
* 当我们使用的requre一个模块的多次时候，会使用缓存，对第一次对象进行缓存，之后直接使用缓存中的对象
* 对于重要数据应该使用代码块的方式进行封装，不要写在外面


```JavaScript

//demo1.js

function strParse(str) {
    console.log(str)
}
//strParse 对象抛出 strParse() 函数 不太一样
module.exports = strParse

```

```JavaScript

//创建自定义模块
var strParse = require('./demo1')

strParse('hello world')

```

### node中的三大模块

* 全局模块 cnpm i xxx -g
  * 随时随地都可以访问，不需要引用
  * 全局对象、全局变量。
  * ES6语法，let和const声明的变量，不能在使用前直接赋值。
  * 不能定义最外层的变量，模块作用域限制。consolo -- 全局对象。

* 核心模块 node安装时就已经有的
  * 不需要单独下载，可以直接使用require()调用
  * path模块、fs模块、http模块
* 自定义模块
  * 自己封装模块，可以直接使用require()引入

#### path模块

> 解释说明一些比较常见的API

* 路径相关
  * normalize：用于规范化给定的path
  * join：将所有给定的path片段连接在一起
  * resolve：解析为绝对路径
  * isAbsolute：检查当前path是否为绝对路径
* 文件相关
  * basename：返回路径中最后一部分的文件名
  * extname：返回路径最后文件的拓展名
  * dirname：返回path路径中的目录名
* 路径解析
  * parse：返回一个对象，其属性表示path的有效元素
  * format：把对象转为一个路径字符串

[官方文档](http://nodejs.cn/api-v14/path.html)

#### fs(文件系统)模块

* 所有文件系统操作都具有同步、回调和基于 promise 的形式
  * 同步操作，使用try...catch...来捕捉异常
  * 异步操作，使用回掉方式获得反馈
  * promise形式

#### buffer模块（全局模块）

* buffer用来处理二进制数据流
* buffer实力类似数组，但是大小是固定的
* buffer是使用C++代码在V8堆外分配的物理内存
* Buffer是个全局对象


#### evevts（事件触发器）

> Nodejs 两个核心特性：事件驱动、非阻塞IO模型
> * 阻塞IO：IO操作完成后，才进入下一条指令，等待IO操作
> * 非阻塞IO：IO操作不阻塞主程序运行
> * 事件驱动：异步调用API，回调函数
> web开发常见问题：高并发、IO密集
> * Nodejs实现一个单线程、高并发的运行时环境

[官方文档](http://nodejs.cn/api-v14/path.html)

#### http模块

* Nodejs可以不需要服务器容器，Nodejs本身就能够创造http服务器，来接受客户端的请求和响应
* 很主要的模块，在实战中慢慢学习

### 控制器简介

> 控制器就是拿到路由分配的任务。并执行，也就是一个Koa中间件

#### 为什么要使用控制器

* 获取HTTP请求参数
  * Query String（查询字符串），如`?kw=html`
  * Router Params（路由参数），如`/users/:id`
  * Body（请求体），如`{name:"Bob}`
  * Header（请求头），如`Accept、Cookie`
* 发送HTTP响应
  * 发送Status，如404
  * 发送Body（响应体），如`{name:"Bob}`
  * 发送Header（响应头），如`Allow、Content-Type`
* 编写控制器最佳实践
  * 每个资源的控制器放在不同的文件里
  * 尽量使用类+类方法的形式编写控制器
  * 严谨的错误处理

#### 错误处理

* 什么是错误处理
  * 编程语言或计算机硬件里的一种机制
  * 处理软件或信息系统中出现的异常状况
* 异常状况有哪些
  * 运行时错误，返回500
  * 逻辑错误，404 找不到；412 先决条件失败；422 无法处理的实体
* 为什么要用错误处理
  * 防止程序挂掉
  * 告诉用户错误信息
  * 便于开发者调试