### JavaScript 基础问题

#### First-class Function

> 当一门编程语言的函数可以被当作变量一样用时，则称这门语言拥有头等函数。例如，在这门语言中，函数可以被当作参数传递给其他函数，可以作为另一个函数的返回值，还可以被赋值给一个变量。

- 把函数赋值给变量

  **即使你的函数有自己的函数名称**，你仍然可以用这个变量名去调用它。给函数命名只会方便你调试，但不会影响我们调用它。

```JavaScript
const foo = function() {
   console.log("foobar");
}
// 用变量来调用它
foo();
```

- 传递一个函数作为参数

  **回调函数**：我们把一个函数作为参数传递给另外一个函数，那么我们就称这个函数为回调函数。`sayHello()` 函数就是一个回调函数

```JavaScript
function sayHello() {
   return "Hello, ";
}
function greeting(helloMessage, name) {
  console.log(helloMessage() + name);
}
// 传递 `sayHello` 作为 `greeting` 函数的参数
greeting(sayHello, "JavaScript!"); // Hello, JavaScript!
```

- 返回一个函数

  高阶函数（Higher-Order Function）：一个返回另外一个函数的函数被称为高阶函数。

```
function sayHello() {
   return function() {
      console.log("Hello!");
   }
}
//用一个变量调用
const sayHello = function() {
   return function() {
      console.log("Hello!");
   }
}
const myFunc = sayHello();
myFunc(); // Hello!
//使用双括号调用
function sayHello() {
   return function() {
      console.log("Hello!");
   }
}
sayHello()();
```

#### 变量声明

- 变量声明方法

  > 在函数之外声明的变量，叫做全局变量，因为它可被当前文档中的任何其他代码所访问。在函数内部声明的变量，叫做局部变量，因为它只能在当前函数的内部访问。

  - var：声明一个变量，可选初始化一个值。
  - let：声明一个块作用域的局部变量，可选初始化一个值。
  - const：声明一个块作用域的只读常量。

- 你可以使用 `undefined` 来判断一个变量是否已赋值
- `undefined` 值在布尔类型环境中会被当作 `false`
- 数值类型环境中 `undefined` 值会被转换为 `NaN`
- 当你对一个 `null` 变量求值时，空值 `null` 在数值类型环境中会被当作 0 来对待，而布尔类型环境中会被当作 `false`

#### 变量提升

JavaScript 变量的另一个不同寻常的地方是，你可以先使用变量稍后再声明变量而不会引发异常。这一概念称为变量提升；JavaScript 变量感觉上是被“提升”或移到了函数或语句的最前面。但是，提升后的变量将返回 `undefined` 值。因此在使用或引用某个变量之后进行声明和初始化操作，这个被提升的变量仍将返回 `undefined` 值。

```JavaScript
var myvar = "my value";
(function() {
  console.log(myvar);
  //下面这行代码存在，则输出undefined，若不存在输出"my value"
  var myvar = "local value";
})();
```

**在 ECMAScript 6 中**，`let`和`const`同样会被提升变量到代码块的顶部但是不会被赋予初始值。在变量声明之前引用这个变量，将抛出引用错误（ReferenceError）。这个变量将从代码块一开始的时候就处在一个“暂时性死区”，直到这个变量被声明为止。

```JavaScript
console.log(x); // ReferenceError
let x = 3;
```

#### 数据结构和类型

- 七种基本数据类型：
  - 布尔值（Boolean），有 2 个值分别是：true 和 false.
  - null ， 一个表明 null 值的特殊关键字。 JavaScript 是大小写敏感的，因此 null 与 Null、NULL 或变体完全不同。
  - undefined ，和 null 一样是一个特殊的关键字，undefined 表示变量未赋值时的属性。
  - 数字（Number），整数或浮点数，例如： 42 或者 3.14159。
  - 任意精度的整数 (BigInt) ，可以安全地存储和操作大整数，甚至可以超过数字的安全整数限制。
  - 字符串（String），字符串是一串表示文本值的字符序列，例如："Howdy" 。
  - 代表（Symbol）( 在 ECMAScript 6 中新添加的类型).。一种实例是唯一且不可改变的数据类型。
- 以及对象（Object）

- 数字与字符串的转换

```JavaScript
"37" - 7 // 30
"37" + 7 // "377"
+ "1.1" + + "1.1" //2.2
```

#### `Boolean`对象

> `Boolean` 对象是一个布尔值的对象包装器。

如果需要，作为第一个参数传递的值将转换为布尔值。如果省略该参数或参数值为 `0`、`-0`、`null`、`false`、`NaN`、`undefined`，或空字符串（`""`），则该对象具有的初始值为 false。**所有其它值，包括任何对象，空数组（`[]`）或字符串 `"false"`**，都会创建一个初始值为 `true` 的对象。

_注意不要将基本类型中的布尔值 `true` 和 `false` 与值为 `true` 和 `false` 的 `Boolean` 对象弄混了。_

其值不是 `undefined` 或 `null` 的任何对象（包括其值为 `false` 的布尔对象）在传递给条件语句时都将计算为 `true`。例如，以下 `if` 语句中的条件评估为 `true`：

```JavaScript
const x = new Boolean(false);
if (x) {
  // 这里的代码会被执行
}
```

不要用创建 `Boolean` 对象的方式将一个非布尔值转化成布尔值，直接将 `Boolean` 当做转换函数来使用即可，或者使用**双重非（!!）运算符**：

```JavaScript
const x = Boolean(expression);     // use this...
const x = !!(expression);          // ...or this
const x = new Boolean(expression); // don't use this!
```

当使用非严格相等（`==`）来比较一个对象和布尔原始值时，最重要的是需要弄明白最终比较的是什么。请看一下的示例：

```JavaScript
if ([]) { console.log("[] is truthy")}         // logs "[] is truthy"
if ([] == false) { console.log("[] == false")} // logs "[] == false"
```

`[]` 是真值而 `[] == false` 也同时成立的原因是：非严格比较 `[] == false` 会将 `[]` 的原始值和 `false` 进行比较。而获取 `[]` 的原始值时，JavaScript 引擎会首先调用 `[].toString()`。其结果为 `""`，也是最终和 `false` 一起比较的值。换句话说，`[] == false` 等价于 `"" == false`，而 `""` 是假值——这也解释了为什么会得到这一结果。

#### 字面值知识

**值得一提的是**，语言标准要求数字字面量必须是无符号的。但是像`-123.4`这样的代码片段还是没有问题的，会被解释为一元操作符`-`应用于数字字面量`123.4`

整数可以用十进制（基数为 10）、十六进制（基数为 16）、八进制（基数为 8）以及二进制（基数为 2）表示。

- 十进制整数字面量由一串数字序列组成，且没有前缀 0。
- 八进制的整数以 0（或 0O、0o）开头，只能包括数字 0-7。
- 十六进制整数以 0x（或 0X）开头，可以包含数字（0-9）和字母 a~f 或 A~F。
- 二进制整数以 0b（或 0B）开头，只能包含数字 0 和 1。

严格模式下，八进制整数字面量必须以 0o 或 0O 开头，而不能以 0 开头。

```JavaScript
0, 117 and -345 (十进制，基数为 10)
015, 0001 and -0o77 (八进制，基数为 8)
0x1123, 0x00111 and -0xF1A7 (十六进制，基数为 16 或"hex")
0b11, 0b0011 and -0b11 (二进制，基数为 2)
```

对象属性名字可以是任意字符串，包括空串。如果对象属性名字不是合法的 javascript 标识符，它必须用""包裹。属性的名字不合法，那么便不能用。访问属性值，而是通过类数组标记 ("[]") 访问和赋值。

```javascript
var unusualPropertyNames = {
  "": "An empty string",
  "!": "Bang!"
}
console.log(unusualPropertyNames."");   // 语法错误: Unexpected string
console.log(unusualPropertyNames[""]);  // An empty string
console.log(unusualPropertyNames.!);    // 语法错误: Unexpected token !
console.log(unusualPropertyNames["!"]); // Bang!
```

在 ES2015，对象字面值扩展支持在创建时设置原型，简写了 `foo: foo` 形式的属性赋值，方法定义，支持父方法调用，以及使用表达式动态计算属性名。总之，这些也使对象字面值和类声明更加紧密地联系起来，让基于对象的设计从这些便利中更加受益。

```JavaScript
var obj = {
    // __proto__
    __proto__: theProtoObj,
    // Shorthand for ‘handler: handler’
    handler,
    // Methods
    toString() {
     // Super calls
     return "d " + super.toString();
    },
    // Computed (dynamic) property names
    [ 'prop_' + (() => 42)() ]: 42
};
```

**请注意：**

```JavaScript
var foo = {a: "alpha", 2: "two"};
console.log(foo.a);    // alpha
console.log(foo[2]);   // two
//console.log(foo.2);  // SyntaxError: missing ) after argument list
//console.log(foo[a]); // ReferenceError: a is not defined
console.log(foo["a"]); // alpha
console.log(foo["2"]); // two
```

一个正则表达式是字符被斜线（译注：正斜杠“/”）围成的表达式。

你可以在字符串字面值上使用字符串对象的所有方法——JavaScript 会自动将字符串字面值转换为一个临时字符串对象，调用该方法，然后废弃掉那个临时的字符串对象。你也能用对字符串字面值使用类似 `String.length` 的属性：

```JavaScript
console.log("John's cat".length)
// 将打印字符串中的字符个数（包括空格）
// 结果为：10
```

**带标签的模板字符串**

更高级的形式的模板字符串是带标签的模板字符串。标签使您可以用函数解析模板字符串。标签函数的第一个参数包含一个字符串值的数组。其余的参数与表达式相关。最后，你的函数可以返回处理好的的字符串（或者它可以返回完全不同的东西 , 如下个例子所述）。用于该标签的函数的名称可以被命名为任何名字。

```JavaScript
let person = 'Mike';
let age = 28;

function myTag(strings, personExp, ageExp) {
  let str0 = strings[0]; // "That "
  let str1 = strings[1]; // " is a "
  let str2 = strings[2]; // "."

  let ageStr;
  if (ageExp > 99){
    ageStr = 'centenarian';
  } else {
    ageStr = 'youngster';
  }

  // We can even return a string built using a template literal
  return `${str0}${personExp}${str1}${ageStr}${str2}`;
}

let output = myTag`That ${ person } is a ${ age }.`;

console.log(output);
// That Mike is a youngster.
```

正如下面例子所展示的，标签函数并**不一定需要返回一个字符串**。

```JavaScript
function template(strings, ...keys) {
  return (function(...values) {
    var dict = values[values.length - 1] || {};
    var result = [strings[0]];
    keys.forEach(function(key, i) {
      var value = Number.isInteger(key) ? values[key] : dict[key];
      result.push(value, strings[i + 1]);
    });
    return result.join('');
  });
}

var t1Closure = template`${0}${1}${0}!`;
t1Closure('Y', 'A');  // "YAY!"
var t2Closure = template`${0} ${'foo'}!`;
t2Closure('Hello', {foo: 'World'});  // "Hello World!"
```

在标签函数的第一个参数中，存在一个特殊的属性`raw` ，我们可以通过它来访问模板字符串的原始字符串，而不经过特殊字符的替换。

```JavaScript
function tag(strings) {
  console.log(strings.raw[0]);
}

tag`string text line 1 \n string text line 2`;
// logs "string text line 1 \n string text line 2" ,
// including the two characters '\' and 'n'
```

除非必要， 应该尽量使用 `String` 字面值，因为 `String` 对象的某些行为可能并不与直觉一致。举例：

```JavaScript
const firstString = '2 + 2'; //创建一个字符串字面量
const secondString = new String('2 + 2'); // 创建一个字符串对象
eval(firstString); // 返回数字 4
eval(secondString); // 返回包含 "2 + 2" 的字符串对象
```

`String` 对象有一个属性 `length`，标识了字符串中 `UTF-16` 的码点个数。举例，下面的代码把 13 赋值给了`helloLength`，因为 `"Hello, World!"` 包含 13 个字符，每个字符用一个 UTF-16 码点表示。你可以通过数组的方式访问每一个码点，但你不能修改每个字符，因为字符串是不变的类数组对象：

```JavaScript
const hello = 'Hello, World!';
const helloLength = hello.length;
hello[0] = 'L'; // 无效，因为字符串是不变的
hello[0]; // 返回 "H"
```

#### 异常抛出

如果`finally`块返回一个值，该值会是整个`try-catch-finally`流程的返回值，不管在`try`和`catch`块中语句返回了什么：

```javascript
function f() {
  try {
    console.log(0)
    throw "bogus"
  } catch (e) {
    console.log(1)
    return true // this return statement is suspended
    // until finally block has completed
    console.log(2) // not reachable
  } finally {
    console.log(3)
    return false // overwrites the previous "return"
    console.log(4) // not reachable
  }
  // "return false" is executed now
  console.log(5) // not reachable
}
f() // console 0, 1, 3; returns false
```

用`finally`块覆盖返回值也适用于在 catch 块内抛出或重新抛出的异常：

```JavaScript
function f() {
  try {
    throw 'bogus';
  } catch(e) {
    console.log('caught inner "bogus"');
    throw e; // this throw statement is suspended until
             // finally block has completed
  } finally {
    return false; // overwrites the previous "throw"
  }
  // "return false" is executed now
}

try {
  f();
} catch(e) {
  // this is never reached because the throw inside
  // the catch is overwritten
  // by the return in finally
  console.log('caught outer "bogus"');
}

// OUTPUT
// caught inner "bogus"
```

#### 循环语句

JavaScript 中提供了这些循环语句：

- for 语句
- do...while 语句
- while 语句
- label 语句
- break 语句
- continue 语句
- for...in 语句
- for...of 语句

**label**

> 一个 `label` 提供了一个让你在程序中其他位置引用它的标识符。例如，你可以用 `label` 标识一个循环， 然后使用 `break` 或者 `continue` 来指出程序是否该停止循环还是继续循环。

```JavaScript
var num = 0;
outPoint:
for (var i = 0 ; i < 10 ; i++){
  for (var j = 0 ; j < 10 ; j++){
    if( i == 5 && j == 5 ){
      break outPoint; // 在 i = 5，j = 5 时，跳出所有循环，
                      // 返回到整个 outPoint 下方，继续执行
    }
    num++;
  }
}
alert(num); // 输出 55
```

使用 `continue` 语句，则可达到与未添加 label 相同的效果，但在这种有多层循环的情况下，循环的跳出进入流程更为明晰一些：

```javascript
var num = 0
outPoint: for (var i = 0; i < 10; i++) {
  for (var j = 0; j < 10; j++) {
    if (i == 5 && j == 5) {
      continue outPoint
    }
    num++
  }
}
alert(num) // 95
```

**for...in**
`for...in` 语句循环一个指定的变量来循环**一个对象所有可枚举的属性**。JavaScript 会为每一个不同的属性执行指定的语句。

**for...of**
`for...of` 语句在**可迭代对象**（包括**Array、Map、Set、arguments** 等等）上创建了一个循环，对值的每一个独特属性调用一次迭代。

下面的这个例子展示了 `for...of` 和 `for...in` 两种循环语句之间的区别。 `for...in` 循环遍历的结果是数组元素的下标，而 `for...of` 遍历的结果是元素的值：

```JavaScript
let arr = [3, 5, 7];
arr.foo = "hello";
arr.push(4)
for (let i in arr) {
  console.log(i); // 输出 "0", "1", "2", "foo"
}

for (let i of arr) {
  console.log(i); // 输出 "3", "5", "7"
}
// 注意 for...of 的输出没有出现 "hello"
```
