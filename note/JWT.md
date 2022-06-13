### JWT(note1)

#### 什么是 JWT

- JSON Web Token 是一个开发标准（RFC 7519）
- 定义了一个紧凑且独立的方式，可以将各方的之间的信息作为 JSON 队形进行安全传输
- 该信息可以验证和信任，因为是经过数字签名的

#### JWT 的构成

- 头部（Header）
  - typ：token 的类型，这里固定为 JWT
  - alg：使用的 hash 算法，例如 HMAC SHA256 或者 RSA
- 有效载荷（Payload）
  - 存储需要传递的信息，例如：用户 ID、用户名等
  - 还包含元数据，如过期时间，发布人等
  - 与 Header 不同，Payload 可以加密
- 签名（Signature）
  Signature = HMACSHA256(base64URLEncode(header)+'.'+base64URLEncode(Payload),secret)
