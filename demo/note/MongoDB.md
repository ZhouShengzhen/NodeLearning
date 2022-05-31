### MongoDB(note1)

#### NoSQL简介

* NoSQL是不同于传统的关系型数据库的数据库管理系统
* NoSQL的分类
  * 列存储（HBase）
  * 文档存储（MongoDB）
  * Key-Value存储（Redis）
  * 图存储（FlockDB）
  * 对象存储（db4o）
  * XML存储（BaseX）
* 为什么要使用NoSQL
  * 简单（没有原子性、一致性、隔离性等复杂规范）
  * 便于横向拓展
  * 适合超大规模数据的存储
  * 很灵活的存储复杂结构的数据（Schema Free）

#### MongoDB简介

* 来源于英文单词“Humongous”，中文含义“庞大“
* 面向文档存储的开源数据库
* 有C++编写，支持多种语言连接
* MongoDB的优势
  * 性能好（内存计算）
  * 大规模数据存储（可拓展性）
  * 安全可靠（本地复制、自动故障转移）
  * 方便存储复杂数据结构（Schema Free）