---
title: 文件操作管理
date: 2026-04-15
description: systemd target 与 Vim/文件操作相关笔记整理。
---

## systemd目标
查看目标

`systemctl getdefault`

查看支持目标清单

`systemctl list-units --type=target`

设置默认目标

`systemctl set-default [target]`

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/52501712/1774143187715-5d227522-0def-4e1a-af48-2f885750c369.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/52501712/1774143335551-19655d92-7fcc-4c94-8232-829aa866ad7c.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/52501712/1774143436821-d1b759c7-7908-42b6-9ec9-b19893a73e28.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/52501712/1774143513768-38a66169-f7ae-4037-b4eb-b046a9a98628.png)

# VI编辑器
相当于记事本

进入对应文件的命令模式

`vim /wenxu222/wenxu555.txt`

:::info
如果文件不存在则创建对应的空白文件

如果存在则会打开该文件进行二次编辑

:::

## 两种模式
### 命令模式
切换方法

插入模式下点esc

### 插入模式
切换方法

a 或 insert 键

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/52501712/1774145714587-e09328be-6be9-4304-84d7-b7d9ac5f264b.png)

## 十种技巧
在命令模式下进行

### :wq
退出命令模式

### :q！
放弃本次修改内容

### :w [目录]
重写

### 行尾命令模式
上下翻，历史命令

### 重做&撤销重做
u

ctrl r

### 快速查找
/ word查找

：noh取消

### 快速定位
### 插入行号
:set nu 显示行号

: set nonu取消行号

### 复制
yy

### 剪切
dd

### 粘贴
p

# 


