### RESTful(note1)

#### REST是什么

REST是万维网软件架构风格 

* Representational State Transger
* Representational: 数据表现形式（JSON比较常用）
* State: 当前状态或者数据（用参数表示属性的变换）
* Transfer: 数据传输

#### REST的限制

* 基于客户端-服务端架构（Client/Server）
  * 关注点分离
  * 服务端专注于数据存储，提升了简单性
  * 前端专注于用户界面，提升了可移植性
* 无状态（Stateless）
  * 所有用户会话信息都保存在客户端
  * 每次请求必须包含所有信息
  * 不能依赖上下文信息
  * 服务端不用保存会话信息
  * 简单性、可靠性、可见性
* 缓存（Cache）
  * 所有服务端响应都要被标为可缓存或不可缓存
  * 减少前后端交互，提升性能
* 统一接口（Uniform Interface）（最重要的限制）
  * 接口设计尽可能统一通用
  * 接口实现解耦，使前后端独立开发
* 分层系统（Layered System）
  * 每层只知道相邻的一层
  * 客户端不知道是和代理还是真实服务器通信
  * 其他层：安全层、负载均衡、缓存层
* 按需代码（Code-On-Demand）
  * 客户端可以下载运行服务端传来的代码
  * 通过减少一些功能，简化客户端

#### 统一接口

* 资源的标识
  * 资源是任何可以命名的事务
  * 每个资源可以通过URL被唯一标识
* 通过表述来操作资源（JSON）
  * 表述就是Represnetation
  * 客户端不能直接操作服务端资源
  * 客户端应该通过表述来操作资源
* 自描述信息
  * 每个消息必须提供足够的信息让接受者理解
  * 媒体类型（application/json），知道什么格式传输
  * HTTP方法：GET、POST
  * 是否缓存：Cache-Control
* 超媒体作为应用状态引擎
  * 超媒体：带文字的链接
  * 应用状态：一个网页
  * 引擎：驱动、跳转
  * 点击链接跳转到另一个网页

#### RESTful API简介

* RESTful API具体什么样子
  * 基本的URL，如`http://api.github.com/users`
  * 标准HTTP方法，如`GET、POST、PUT、DELETE`
  * 传输的数据类题类型，如`JSON、XML`
* 举例说明
  * `GET /users` 获取user列表
  * `GET /users/12` 查看某个具体的user
  * `PUT /users/12` 更新user 12
  * `DELETE /users/12` 删除user 12

#### RESTful API设计最佳实践

* 请求设计规范
  * URI使用名词，尽量使用复数，如 /users
  * URI使用嵌套表示关联关系，如 /users/12/repos/5
  * 使用正确的HTTP方法，如 GET/POST/PUT
  * 不符合CRUD的情况：POST/action/子资源
    * POST+动词的形式
    * action：接口查询字符串
    * 设置成子资源
* 响应设计规范
  * 查询
  * 分页
  * 字段过滤
  * 状态码（使用正确的状态吗）
  * 错误处理
* 安全规范
  * HTTPS（加密）
  * 鉴权（限制权限）
  * 限流
* 开发者友好
  * 文档
  * 超媒体