---
title: Linux 文件操作管理
date: 2026-04-15
description: systemd 目标与 Vim 编辑器常用操作速查。
---

## systemd 目标
查看目标

`systemctl getdefault`

查看支持目标清单

`systemctl list-units --type=target`

设置默认目标

`systemctl set-default [target]`

![](https://cdn.nlark.com/yuque/0/2026/png/52501712/1774143187715-5d227522-0def-4e1a-af48-2f885750c369.png)

![](https://cdn.nlark.com/yuque/0/2026/png/52501712/1774143335551-19655d92-7fcc-4c94-8232-829aa866ad7c.png)

![](https://cdn.nlark.com/yuque/0/2026/png/52501712/1774143436821-d1b759c7-7908-42b6-9ec9-b19893a73e28.png)

![](https://cdn.nlark.com/yuque/0/2026/png/52501712/1774143513768-38a66169-f7ae-4037-b4eb-b046a9a98628.png)

## VI 编辑器
相当于记事本

进入对应文件的命令模式

`vim /wenxu222/wenxu555.txt`

> 如果文件不存在则创建对应的空白文件；如果存在则会打开该文件进行二次编辑。

## 两种模式
### 命令模式
切换方法：插入模式下点 `Esc`

### 插入模式
切换方法：`a` 或 `Insert` 键

![](https://cdn.nlark.com/yuque/0/2026/png/52501712/1774145714587-e09328be-6be9-4304-84d7-b7d9ac5f264b.png)

## 十种技巧（命令模式）
### `:wq`
保存并退出

### `:q!`
放弃修改并退出

### `:w [目录]`
另存为

### 行尾命令模式
上下翻，历史命令

### 撤销与重做
撤销：`u`  
重做：`Ctrl + r`

### 快速查找
`/ word` 查找  
`:noh` 取消高亮

### 快速定位
（待补充）

### 行号
显示：`:set nu`  
取消：`:set nonu`

### 复制/剪切/粘贴
复制：`yy`  
剪切：`dd`  
粘贴：`p`

