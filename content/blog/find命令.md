---
title: find 命令
date: 2026-04-15
description: find 的常用筛选条件与批量处理用法笔记。
---

# find命令
find [起始路径] [筛选条件] [筛选条件]...

准备工作：

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/52501712/1774743413324-53b213c8-6a66-4459-8f90-efd5aa7b5494.png)



:::warning
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/52501712/1774743598964-a885f231-89e6-42da-9508-72a51e6794b3.png)

linux系统下并不是以有无扩展名作为区分文件与目录的标准

:::

## 按名称查找
`find [路径] -name "[名称]"`

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/52501712/1774743959709-c27a0027-0eed-482b-ac16-3bc059ee1619.png)

:::warning
通配符：

? 	这一位任何字符都匹配  
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/52501712/1774744052188-3e26c4e6-6980-4134-a78e-b6f8323b2a2f.png)  
*	多位任意字符都匹配

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/52501712/1774744268107-13b2e312-48c4-434b-879d-3cb90d31ecd0.png)

:::

## 按类型查找
`find [路径] -type [类型符]`  
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/52501712/1774744744825-6b6c726f-cf4e-49f6-8f0d-48bf6934f84a.png)  
当有两个查找条件时，他们的关系是逻辑与

:::warning
常见的文件类型  
man find  
/type 查找类型关键字

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/52501712/1774744576608-e2ef210c-fcd0-4456-bc0e-b2b9613dbfb0.png)

:::

## 按所有者查找
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/52501712/1774745596475-c4d9deb9-f21a-40df-896d-45b40734629d.png)

准备工作：

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/52501712/1774745029223-beab0c9d-0939-4a36-b143-6d91604c5100.png)

`find [路径] -user [所有者]`

## 查找的高级操作
将查找的结果批量处理

批量：移动、复制、删除

### `mv`移动
#### 移动并改名
`mv wenxu1.txt /tmp/wenxu11.txt`

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/52501712/1774747808671-a08a4cf5-6a00-4d82-a5cb-5f85c0af60ad.png)

#### 移动不改名
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/52501712/1774747875500-338684a7-89af-439d-88e3-a7d662ba6f6f.png)

#### 若目标位置有同名文件，则会覆盖，可以选择暴力覆盖加-f参数
#### 移动子目录
`mv source 目标`

### `cp`复制
#### 复制且不改名
cp wenxu2.txt /tmp/

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/52501712/1774748315793-fc4d8052-e5e0-4684-b45b-c63b960bce58.png)

#### 复制且改名
cp wenxu2.txt /tmp/wenxu21.txt

#### 目标位置有同名文件
覆盖：\cp 

不覆盖：-n

#### 复制子目录
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/52501712/1774748689133-b16263fa-9fe7-4b5d-a469-6f6f14924e1b.png)

### 批量移动
find / -name "*abc*" -type f -user wenxu001 -exec mv {} /tmp/ \;

### 批量复制
find / -name "*abc*" -type f -user root -exec cp {} / \;

:::warning
移动对象时所有者不变，复制时属于当前操作身份

:::

### 批量删除
## 文件内查找
### 查找所有关键字
`grep wenxu wenxuqqq.txt`

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/52501712/1774751985434-3b35fdbc-45bb-4257-b9c6-e88081fd06c2.png)

### 仅查找开头
`grep "^wenxu" wenxuqqq.txt`

### 仅查找结尾
`grep "wenxu$" wenxuqqq.txt`

### 管道符的二次过滤
`ll / grep abc `





