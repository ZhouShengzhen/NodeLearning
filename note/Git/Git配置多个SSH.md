### Git 配置多个 SSH

> 差不多就要进入正式项目开发阶段了，今天向锋哥要了项目 Gitlab 的权限，在本地配置了一波

#### ssh-keygen

> 多个 ssh 需要创建将 ssh 文件命名不同的名称，这里就得知道在哪里配置文件了首先，定位到`~/.ssh`目录下，如果只有 Git 在的话，一般是比较干净的，之后乱起来的话，还是需要好好整理的。

- 创建本地私钥、公钥

最后那的文件名可以随便改，但是一定要有区分度。

```shell
ssh-keygen -t rsa -C 'emailAddress' -f ~/.ssh/id_rsa_test
```

创建第二个私钥、公钥

```shell
ssh-keygen -t rsa -C 'companyEmailAddress' -f ~/.ssh/id_rsa_com
```

#### 配置`config`

```
# xxx.company.com/
Host xxx.company.com/ # 代表公司的git代码仓库地址
HostName xxx.company.com/
PreferredAuthentications publickey
IdentityFile ~/.ssh/id_rsa_company
# github
Host github.com # 代表github的git代码仓库地址
HostName github.com
PreferredAuthentications publickey
IdentityFile ~/.ssh/id_rsa_github

# IdentityFile代表生成ssh的私钥文件地址
```
