### Git 安装与简单配置

### 常用指令

- `clone`

```Git
git clone XXXX
```

- `congit`

```Git
git config  user.email 'zhoushengzhen2019@gmail.com'
```

- `add`

```Git
git add .
```

- `commit`

```Git
git commit -m 'XXX'
```

- `push`

```Git
git push
```

### `.gitignore`文件

- 使用位置
  - `.gitignore`文件可以放在任意目录下
  - 一个 git 项目中可以包含多个`.gitignore`文件
  - 每个`.gitignore`文件只对该`.gitignore`文件所处目录和妻子目录有作用
  - 除了上述使用方法外，`.gitignore`文件也可以配置全局生效
- [语法规则](https://git-scm.com/docs/gitignore)

  > 在 .gitignore 文件中，每一行的忽略规则的语法如下：

  - 空格不匹配任意文件，可作为分隔符，可用反斜杠转义

  - 以“＃”开头的行都会被 Git 忽略。即#开头的文件标识注释，可以使用反斜杠进行转义。

  - 可以使用标准的 glob 模式匹配。所谓的 glob 模式是指 shell 所使用的简化了的正则表达式。

  - 以斜杠"/“开头表示目录；”/“结束的模式只匹配文件夹以及在该文件夹路径下的内容，但是不匹配该文件；”/"开始的模式匹配项目跟目录；如果一个模式不包含斜杠，则它匹配相对于当前 .gitignore 文件路径的内容，如果该模式不在 .gitignore 文件中，则相对于项目根目录。

  - 假如说我们希望过滤掉 src/build 文件夹下的所有内容，我们可以这么写：src/build/那么这个路径下的所有内容都会被忽略，这个路径是相对路径。

  - 以星号"\*“通配多个字符，即匹配多个任意字符；使用两个星号”**" 表示匹配任意中间目录，比如 a/**/z 可以匹配 a/z, a/b/z 或 a/b/c/z 等。

  - 比如 src/\*\*/build，可以匹配到 src/test/build，也可以匹配到 src/current/build。

  - 以问号"?"通配单个字符，即匹配一个任意字符；

  - 以方括号"[]"包含单个字符的匹配列表，即匹配任何一个列在方括号中的字符。比如[abc]表示要么匹配一个 a，要么匹配一个 b，要么匹配一个 c；如果在方括号中使用短划线分隔两个字符，表示所有在这两个字符范围内的都可以匹配。比如[0-9]表示匹配所有 0 到 9 的数字，[a-z]表示匹配任意的小写字母）。

  - 以叹号"!“表示不忽略(跟踪)匹配到的文件或目录，即要忽略指定模式以外的文件或目录，可以在模式前加上惊叹号（!）取反。需要特别注意的是：如果文件的父目录已经被前面的规则排除掉了，那么对这个文件用”!“规则是不起作用的。也就是说”!“开头的模式表示否定，该文件将会再次被包含，如果排除了该文件的父级目录，则使用”!"也不会再次被包含。可以使用反斜杠进行转义。

  - 比如说我们想要保留 src/build 路径下叫做 main.go 的文件，那么我们可以加上一行：!main.go

**注意：**git 对于.ignore 配置文件是按行从上到下进行规则匹配的，意味着如果前面的规则匹配的范围更大，则后面的规则将不会生效；

```
#注释           .gitignore的注释
*.txt           忽略所有 .txt 后缀的文件
!src.a          忽略除 src.a 外的其他文件
/todo           仅忽略项目根目录下的 todo 文件，不包括 src/todo
build/          忽略 build/目录下的所有文件，过滤整个build文件夹；
doc/*.txt       忽略doc目录下所有 .txt 后缀的文件，但不包括doc子目录的 .txt 的文件

bin/:           忽略当前路径下的 bin 文件夹，该文件夹下的所有内容都会被忽略，不忽略 bin 文件
/bin:           忽略根目录下的 bin 文件
/*.c:           忽略 cat.c，不忽略 build/cat.c
debug/*.obj:    忽略debug/io.obj，不忽略 debug/common/io.obj和tools/debug/io.obj
**/foo:         忽略/foo, a/foo, a/b/foo等
a/**/b:         忽略a/b, a/x/b, a/x/y/b等
!/bin/run.sh    不忽略bin目录下的run.sh文件
*.log:          忽略所有 .log 文件
config.js:      忽略当前路径的 config.js 文件

/mtk/           忽略整个文件夹
*.zip           忽略所有.zip文件
/mtk/do.c       忽略某个具体文件
```

- 全局配置

  - 创建全局文件`touch ~/.gitignore`
  - 编写全局文件
  - 全局设置`git config --global core.excludesfile ~/.gitignore`

- 已经提交过的处理方法

```shell
git rm -r --cached . // 删除本地缓存
git add . // 添加要提交的文件
git commit -m "update .gitignore" // 更新本地的缓存
git config core.excludesfile .gitignore //让配置文件生效
```
