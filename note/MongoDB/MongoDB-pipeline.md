### MongoDB(note2)

> 这两天都在被一个多表查询折磨，一开始一直想着使用异步处理，结果一直失败
> 这里还学习到了一些 JavaScript 异步处理的知识。
> 最后还是直接使用 mongnDB 自带的聚合管道，又快又简洁的解决了问题

#### MongoDB 聚合管道（Aggregation Pipeline）

- 使用聚合管道可以对集合中的文档进行**变换和组合**

  > 相当于直接改变数据可，对于关系型数据库中的就是视图功能。

- MongoDB Aggregation 管道操作符与表达式

  - 管道操作符与描述  
     | 管道操作符 | 描述 |
    | ------------ | ------------------------------------------- |
    | **$project** | 增加、删除、重命名字段 |
    | **$match** | 条件匹配。只满足条件的文档才能进入下一阶段 |
    | $limit       | 限制结果的数量                              |
    | $skip        | 跳过文档的数量                              |
    | $sort        | 条件排序                                    |
    | $group       | 条件组合结果 统计                           |
    |$lookup | 用以引入其它集合的数 据 （表关联查询） |

  - **SQL 和 NOSQL 对比:**
    | SQL | NOSQL |
    | ------------ | ------------------------------------------- |
    | **WHERE** | $match |
    | GROUP BY | $group |
    | **HAVING** | $match |
    | **SELECT** | $project |
    | ORDER BY | $sort |
    | LIMIT | $limit |
    | SUM() | $sum |
    | COUNT() | $sum |
    | **join** | $lookup |

  - 管道表达式

    > 管道操作符作为“键”,所对应的“值”叫做管道表达式。 例如`{$match:{status:"A"}}`，$match 称为管道操作符，而 status:"A"称为管道表达式， 是管道操作符的操作数(Operand)。 每个管道表达式是一个文档结构，它是由字段名、字段值、和一些表达式操作符组成的

    | 常用表达式操作符 | 描述                   |
    | ---------------- | ---------------------- |
    | $addToSet        | 将文档指定字段的值去重 |
    | $max             | 文档指定字段的最大值   |
    | $min             | 文档指定字段的最小值   |
    | $sum             | 文档指定字段求和       |
    | $avg             | 文档指定字段求平均     |
    | $gt              | 大于给定值             |
    | $lt              | 小于给定值             |
    | $eq              | 等于给定值             |

- MongoDB Aggregation 管道操作符详解
  - $project
    > 修改文档的结构，可以用来重命名、增加或删除文档中的字段。
  - $match
    > 用于过滤文档。用法类似于 find() 方法中的参数。
  - $group
    > 将集合中的文档进行分组，可用于统计结果。
  - $sort
    > 将集合中的文档进行排序。