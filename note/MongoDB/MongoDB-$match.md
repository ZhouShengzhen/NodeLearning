### $match 的几点注意事项

#### $regex

`$regex`一般用于`find`但是中来用正则表达式的方式查找字符串。

其实`$regex`也是可以在`$match`使用

**举例**

```JavaScript
let reg = "XXX"
let matchString = {
    $or: [
        { name: { $regex: reg } },
        { callNum: { $regex: reg } },
        { certNum: { $regex: reg } },
        { comName: { $regex: reg } }
    ]
}

$match:matchString
```

#### 子对象比较

**举例**

- 原数据

```JSON
[{
    "_id" : 1,
    "subFormData" : {
        "3333" : [
            {
                "testdate" : ISODate("2022-03-09T19:02:00.000+08:00"),
                "_id" : 420899215648989184
            }
        ],
        "4444" : [
            {
                "testdate" : ISODate("2022-02-10T19:02:00.000+08:00"),
                "_id" : 233
            }
        ]
    }
},
{
    "_id" : 2,
    "subFormData" : {
        "3333" : [
            {
                "testdate" : ISODate("2021-03-09T19:02:00.000+08:00"),
                "_id" : 420899215648989184
            }
        ],
        "4444" : [
            {
                "testdate" : ISODate("2021-03-10T19:02:00.000+08:00"),
                "_id" : 233
            }
        ]
    }
}]
```

- 目标

单条内容存储格式如下，需要查询 testdate 大于 2022-03-09 的数据行,"3333","4444"为动态字典，其值为数组字典，如何使用 mongodb 查询符合条件的结果。

- 处理方法

```Shell
db.tablename
.aggregate([
{ "$unwind" : "$subFormData.3333.testdate" },
{ "$match" : { "subFormData.3333.testdate" : { "$gte" : ISODate("2022-03-01T16:00:00Z") } } },
{ "$project" : { "targetDate" : "$subFormData.3333.testdate" } }])
```

#### $unwind

> 有些时候我们使用管道聚合的时候，会导致想要的数据居合道子元素中，一直使用子元素对比颇费时间，直接展开。

##### 简单示例

- 原数据

```Shell
db.inventory.insertOne({ "_id" : 1, "item" : "ABC1", sizes: [ "S", "M", "L"] })
```

- 目标

```JSON
{ "_id" : 1, "item" : "ABC1", "sizes" : "S" }
{ "_id" : 1, "item" : "ABC1", "sizes" : "M" }
{ "_id" : 1, "item" : "ABC1", "sizes" : "L" }
```

- 处理方法

```Shell
db.inventory.aggregate( [ { $unwind : "$sizes" } ] )
```

##### 拆分数组字段是 null 或者[]数据

- 原数据

```Shell
db.inventory2.insertMany([
  { "_id" : 1, "item" : "ABC", price: NumberDecimal("80"), "sizes": [ "S", "M", "L"] },
  { "_id" : 2, "item" : "EFG", price: NumberDecimal("120"), "sizes" : [ ] },
  { "_id" : 3, "item" : "IJK", price: NumberDecimal("160"), "sizes": "M" },
  { "_id" : 4, "item" : "LMN" , price: NumberDecimal("10") },
  { "_id" : 5, "item" : "XYZ", price: NumberDecimal("5.75"), "sizes" : null }
])
```

- 目标

```Shell
{ "_id" : 1, "item" : "ABC", "price" : NumberDecimal("80"), "sizes" : "S" }
{ "_id" : 1, "item" : "ABC", "price" : NumberDecimal("80"), "sizes" : "M" }
{ "_id" : 1, "item" : "ABC", "price" : NumberDecimal("80"), "sizes" : "L" }
{ "_id" : 3, "item" : "IJK", "price" : NumberDecimal("160"), "sizes" : "M" }
```

- 处理方法
  > 下面的$unwind操作是等效的，并为size字段中的每个元素返回一个文档。如果size字段没有解析为数组，但没有丢失、null或空数组，则$unwind 将非数组操作数视为单个元素数组。

```Shell
db.inventory2.aggregate( [ { $unwind: "$sizes" } ] )
db.inventory2.aggregate( [ { $unwind: { path: "$sizes" } } ] )
```

- 目标
  > 下面的`$unwind`操作使用`includeArrayIndex`选项在输出中包含数组索引。

```Json
{ "_id" : 1, "item" : "ABC", "price" : NumberDecimal("80"), "sizes" : "S", "arrayIndex" : NumberLong(0) }
{ "_id" : 1, "item" : "ABC", "price" : NumberDecimal("80"), "sizes" : "M", "arrayIndex" : NumberLong(1) }
{ "_id" : 1, "item" : "ABC", "price" : NumberDecimal("80"), "sizes" : "L", "arrayIndex" : NumberLong(2) }
{ "_id" : 3, "item" : "IJK", "price" : NumberDecimal("160"), "sizes" : "M", "arrayIndex" : null }
```

- 处理方法

```Shell
db.inventory2.aggregate([
  {
    $unwind:
      {
        path: "$sizes",
        includeArrayIndex: "arrayIndex"
      }
   }
])
```

- 目标

  > 下面的`$unwind`操作使用`preserveNullAndEmptyArrays`选项来包含`size`字段为`null`、缺失或空数组的文档。

```JSON
{ "_id" : 1, "item" : "ABC", "price" : NumberDecimal("80"), "sizes" : "S" }
{ "_id" : 1, "item" : "ABC", "price" : NumberDecimal("80"), "sizes" : "M" }
{ "_id" : 1, "item" : "ABC", "price" : NumberDecimal("80"), "sizes" : "L" }
{ "_id" : 2, "item" : "EFG", "price" : NumberDecimal("120") }
{ "_id" : 3, "item" : "IJK", "price" : NumberDecimal("160"), "sizes" : "M" }
{ "_id" : 4, "item" : "LMN", "price" : NumberDecimal("10") }
{ "_id" : 5, "item" : "XYZ", "price" : NumberDecimal("5.75"), "sizes" : null }
```

- 处理方法

```Shell
db.inventory2.aggregate( [
   { $unwind: { path: "$sizes", preserveNullAndEmptyArrays: true } }
] )
```

#### 参考文献

- [mongodb Aggregation 聚合操作之$unwind](https://www.jianshu.com/p/fdead12f7de3)
