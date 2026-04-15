---
title: 用户与组管理
date: 2026-04-15
description: useradd/usermod/passwd 与组管理常用操作笔记。
---

# 用户管理
## 添加用户
### 操作
#### 添加用户`useradd [用户名] -参数`
-s	:添加的shell种类 默认/bin/bash

-c	:要添加的注释信息

-d	:重新指定家目录

-m	:若指定的目录不存在则创建

-u	:指定该用户的用户id

-g	:设置第一所属组

-G	:设置其他附属组

##### 测试
测试一添加指定用户：

`useradd -c "wenxu0003 user" -m -d /var/xyz/wenxu0003 -u 9876 wenxu0003`

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/52501712/1775815996743-85a2f20c-b86e-4369-86f8-8b6e9821ddf9.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/52501712/1775816078661-a7257cda-e4e0-4fd2-a764-1a0124006c2f.png)

测试二（添加指定shell的用户）：

`useradd -s /sbin/nologin wenxu0002`

/sbin/nologin	:只能远程登陆

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/52501712/1775816492103-310b9996-a73a-43ea-8e8c-9f1146a1d75f.png)

#### 设置密码 `passwd [用户名]`
### Linux做的反应：
1. 在home文件夹下创建该用户的同名子目录，且该目录的所有者为该用户<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/52501712/1775813218632-fcde6b7e-a301-40a1-8b15-945bfbdcb290.png)
2. 在账户信息文件：/etc/passwd 里多了一行描述该用户的记录

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/52501712/1775813629999-fff92a5d-818c-4290-84d5-14c9222330aa.png)

有七个字段用冒号隔开

wenxu0001:x:1002:1002::/home/wenxu0001:/bin/bash

用户名：密码（隐式）：该用户id号： 组id（第一所属组id）：注释（可以不加）：家目录：shell  


3. 在影子文件：/etc/shadow 里多了一行该用户的密码记录

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/52501712/1775813782848-528d4f44-5f22-467d-8620-f0e430e1bc45.png)  
	md5加密策略加密后

头两个字段

用户名：加密后的密码

4. 组信息文件：vim/etc/group 多了一行记录，即自动创建同名组

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/52501712/1775813943229-8d98fba9-6f59-40f9-b60f-a70336ba7ed2.png)

有四个字段  
	wenxu001:x:1002

组名：组密码：组id：该组中包含的其他用户名

## 删除用户
1. 不彻底的删除

`userdel [用户名]`

 家目录不被删除

账户信息文件的记录被删除

影子文件的记录也被删除

组信息文件记录也被删除

2. 彻底的删除 

`user -rf [用户名]`

家目录也被删除

## 修改用户属性
### 操作
#### 命令：
`usermod [option] [用户名]`

option:

-s	:添加的shell种类 默认/bin/bash

-c	:要添加的注释信息

-d	:重新指定家目录

-m	:若指定的目录不存在则创建

-u	:指定该用户的用户id

-g	:设置第一所属组

-G	:设置其他附属组

#### 修改用户信息文件：
有七个字段用冒号隔开

wenxu0001:x:1002:1002::/home/wenxu0001:/bin/bash

用户名：密码（隐式）：该用户id号： 组id（第一所属组id）：注释（可以不加）：家目录：shell

# 组管理
## 添加组
`groupadd [组名]`  
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/52501712/1775868510081-017aa5dc-4b6a-48e3-8b5f-c7240c1206bb.png)

## 删除组
`groupdel [组名]`

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/52501712/1775868661974-21c33cfd-018a-45c5-9a54-153c3ec7f22b.png)

# 用户与组的关系
实验准备：

用户：

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/52501712/1775868907810-3990632d-f58e-46a7-80a6-c5aa3450c7cc.png) 

组：

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/52501712/1775869163252-cf77792b-9842-4f7b-b85f-7ea4a240e1c4.png)

:::warning
一个用户可以隶属于多个组，一个组也可以包含多个用户

:::

## 操作
### 把用户添加到组
`gpasswd -a [用户] [组名]`

> “只能添加其他附属组”
>

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/52501712/1775869644531-77b83387-7f8d-4b08-a7c3-5fac6b3f5dbf.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/52501712/1775869702530-0ea96e94-08d7-413a-80ce-373056a064c6.png)

:::warning
两种组：

primarygroup 第一所属组：	

每个用户只能有一个第一所属组

其他附属组

:::

### 两种验证思路
1. 组包含了哪些用户

查看组信息文件 `vim /etc/group`

2. 用户隶属于哪些组

查询用户隶属的组`groups [用户名]`

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/52501712/1775870363399-843c373a-0580-4b47-933c-34a1a864c296.png)

### 删除用户所属的组
`gpasswd -d [用户名] [组名]`

> 只能删除附属组
>

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/52501712/1775870741687-67509026-c417-4f4f-b59b-e9e4f46f168f.png)

### 修改用户的primary group 
`usermod -g [组名] [用户名]`

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/52501712/1775871136240-e7cf93ac-e233-4499-ad39-7f6f2cde00a2.png)

### 修改附属组 
 `usermod -G [组名] [用户名]` 

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/52501712/1775872071119-63663d4f-5aa7-454e-ac12-bc38b1b6cb22.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/52501712/1775872089393-95c5a173-18d9-4c3a-9f5c-2d0e035eef1d.png)

多个组用逗号隔开

### 修改一个对象的所有者或所属组
`chown [option] [所有者] : [所属组] [file]`

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/52501712/1775872691724-592438ac-eb73-4d1a-af2f-9bfdf33e2917.png)

:::warning
在Linux中的一个对象，它的的所有者和所属组可以没有任何关系

:::

省略所属组只修改所有者后，所属组修改为对应所有者的的第一隶属组 

### 综合实例
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/52501712/1775873203524-ec1b09e8-3987-4318-a68e-4c1143f68e1a.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/52501712/1775873380282-68919740-c1c8-4d12-839d-eb05b2dcb0a1.png)

