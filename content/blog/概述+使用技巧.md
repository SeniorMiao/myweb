---
title: 概述与使用技巧
date: 2026-04-15
description: Linux 概述、帮助系统与常用操作技巧笔记。
---

> ###### 第二周

# redhat9
## 目标
<font style="background-color:#FBF5CB;">系统管理员——RHCSA</font>

系统工程师——RHCE

系统架构师——RHCA

## 发展史
1991.10发布 Linux kernel(0.1)

### 内核版本号
`uname -r`

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/52501712/1773534326681-aa3898f4-98ae-4df6-9f13-52938c04cc84.png)

**格式：**主版本号.次版本号.修正号

主版本号更迭，代表有质的变化

次版本号更迭，代表有一定的升级；奇数：内核版本为测试版；偶数：内核版本为稳定版

修正号更迭，有小的升级

el9:红帽9

### 发行版本
#### 定义：
不同厂商用Linux内核再开发的版本



## Linnux在日常生活中的应用
### <font style="color:rgb(15, 17, 21);">移动计算与智能设备</font>
这是普通人接触 Linux 最频繁的领域。



**Android 手机与平板：**Android 操作系统基于 Linux 内核。全球绝大多数智能手机都运行 Android。这意味着每次你发短信、刷短视频、用地图导航或玩手机游戏时，底层都是 Linux 在管理硬件资源（如处理器、内存和网络连接）。



**智能电视与流媒体设备：**许多智能电视（如基于 webOS 或 Tizen 系统的电视）、Roku 设备以及 Amazon Fire TV 都基于 Linux。它负责解码视频流、渲染用户界面以及处理遥控器的输入。



**物联网设备：**智能家居设备，如 Google Nest 智能音箱、智能冰箱或某些安全摄像头，通常都嵌入了 Linux 系统以保证稳定运行。

### <font style="color:rgb(15, 17, 21);">互联网服务与云端应用</font>
虽然你看不到背后的物理服务器，但几乎每一次在线互动都有 Linux 的参与。



**社交媒体与搜索引擎**：你每天使用的 Google、Facebook、Twitter（X）、YouTube 等网站，其后端的服务器绝大多数运行的都是 Linux。当你发出搜索请求或刷新朋友圈时，Linux 服务器在数据中心处理着海量的数据。



**网购与流媒体：**亚马逊、淘宝、Netflix 和 Spotify 的后台基础设施也高度依赖 Linux。它保证了你的购物车数据不会丢失，或者电影能够流畅地缓冲播放。



**云存储：**当你使用 Google Drive、百度网盘或 iCloud 备份照片时，存储和管理你文件的操作系统几乎可以肯定是 Linux。



### 车载系统与交通出行
现代汽车变得越来越像带轮子的计算机，Linux 在其中扮演了关键角色。



**车载信息娱乐系统：**许多汽车品牌（如特斯拉、丰田、宝马、福特等）采用 Automotive Grade Linux（一种开源的 Linux 平台）来构建其信息娱乐系统。它控制着中控屏幕上的导航、音乐播放、蓝牙电话连接以及倒车影像的显示。



**导航系统：**无论是车载的 GPS 导航，还是公路上的电子指示牌背后的控制系统，Linux 经常因其稳定性和可靠性被选为底层运行环境。



**交通管制：**许多城市的交通信号灯控制系统和机场的航班显示系统也运行在 Linux 上，以保证 24/7 全天候无故障运行。



## 使用中的四种帮助
### whatis
`whatis ls`

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/52501712/1773536890752-39c6a978-4b97-45b0-8875-80a80e3dce5c.png)

### --help 
`ls --help`

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/52501712/1773537024432-5340e8f5-0bf5-48c0-99d2-3e52f8843970.png)

### man
`man ls`

退出快捷键：q

搜索：/ （n跳转下一个匹配结果；shift+n跳转到上一个匹配结果）

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/52501712/1773537320669-5847a03c-6ca6-4a37-bcc5-108ae2b3e8a0.png)

### info 


## 七种使用技巧
### history
`history`

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/52501712/1773537710339-bb01d0cc-0da8-4a54-9839-afc5b0d1f21f.png)

重复执行某条命令

`！+序号`

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/52501712/1773537780836-45df0ff8-99f6-4ff9-bcb6-c577ea74e61f.png)

### clear
`clear`/ ctrl + l

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/52501712/1773537878232-608e6281-bf39-40ec-8eeb-69c9568a5738.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/52501712/1773538014017-2de64d85-101d-4d90-b998-e9e6abe8a910.png)

### 上下键
调出之前命令

### tab键
补全命令/文件目录

### !$
占位符 代表上一条命令的最后一个参数

### date
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/52501712/1773538326037-0f82c597-6438-4d15-9b21-1dad209b58e1.png)



### ！+字母
反向检索首字母为d的历史命令



## 强制退出（6+2种）
### ctrl + c
### ctrl + b
### ctrl + d 
### q
### quit
### exit
### 借助virtual machine manager关闭
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/52501712/1773539003541-d8c6e558-2f9f-42c0-96d3-071e9a75b0e5.png)



### VMware关闭虚拟机
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/52501712/1773539936385-1957789d-29f3-4938-a43b-d039ec38d8bb.png)



## 六种目录操作
### 目录的树状结构
查看根目录

`ls /`

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/52501712/1773540749682-4cbaf541-7913-43f9-903c-8189d0dfbf4b.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/52501712/1773540649724-cf2c9e77-d0ae-4a48-8696-ef5fc7305137.png)

`ls /home/`

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/52501712/1773540849621-f533a235-44a2-4965-acba-913918437398.png)



:::info
切换用户

/su - 【目标用户】

输入密码后切换 密码不可见输入后回车

$：普通权限

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/52501712/1773542796463-e0e70d60-1329-4a73-ac5f-6a7d8572b8b1.png)

#：超级权限

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/52501712/1773542694640-d67394fa-d6d3-4e4b-bd8d-82a12e3c63e1.png)



返回

exit

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/52501712/1773542229578-bb899b96-36d8-48a1-8dc8-5f47e4b09899.png)

:::

### pwd 
查看当前所在目录

`pwd`

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/52501712/1773541492840-036e8fec-7b53-4b97-9561-b8bd52184824.png)

### cd 
切换目录位置

#### 绝对路径用法
`cd /home/kiosk`

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/52501712/1773541751593-d40e510f-588d-4217-8237-18fee7919b9d.png)

#### 相对路径用法


#### 只写cd
`cd`

~:当前用户的家目录

root的家目录（一级子目录）

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/52501712/1773542193761-87462bf5-a7e8-46cc-ad03-bab5805c0f17.png)

kiosk的家目录（普通用户：二级子目录）

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/52501712/1773542272246-0e3bd8e6-7c09-4db9-968b-77df57e32ad0.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/52501712/1773542897322-03b44f4e-ea8c-484b-a4ae-40f44c5f108d.png)

:::info
创建用户的命令

useradd 	【用户名】

passwd	【用户名】

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/52501712/1773542536408-9a0bda35-73dd-4a6c-abda-4914d8a35f1d.png)

切换到新用户

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/52501712/1773542628644-8e82670b-b455-4b26-abbb-2fede1614ae4.png)

:::

#### cd # 
`cd #`

返回上次所在位置

#### cd ..
`cd ..`

向外跳一层

#### cd /
`cd /`

回到根目录

#### cd ./
`cd ./`

“./"可以指代当前pwd结果的位置

### ls
#### ls -l 
`ls -l`

:::info
创建文件

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/52501712/1773545637147-3cc3bbe2-c779-4ba2-a08d-2286db4cbc73.png)

:::

##### 第一列：类型
d：子目录

-或f：普通文件

b：块设备文件

c：字符设备文件

l：链接文件

p：管道文件

##### 第二列（中间的九列）：权限
前三位：

r：读

w：写

x：执行

中间三位：组内成员的权限

最后三位：组外成员的权限

##### 第三列
硬链接的个数

##### 第四列
该对象的所有者

##### 第五列
该对象的所属组

##### 第六列
该对象的大小

##### 第七列
创建的时间

##### 第八列
对象名

#### ls -a
全部显示

#### ls -i 
查看inode

inode :索引节点号

#### ls -d 
不看对象内容

### chomd
修改目标对象的权限

#### 方法1：chomd [权限二进制和] 文件
| <font style="color:rgb(15, 17, 21);">权限</font> | <font style="color:rgb(15, 17, 21);">数字</font> |
| --- | --- |
| `<font style="color:rgb(15, 17, 21);background-color:rgb(235, 238, 242);">---</font>` | <font style="color:rgb(15, 17, 21);">0</font> |
| `<font style="color:rgb(15, 17, 21);background-color:rgb(235, 238, 242);">--x</font>` | <font style="color:rgb(15, 17, 21);">1</font> |
| `<font style="color:rgb(15, 17, 21);background-color:rgb(235, 238, 242);">-w-</font>` | <font style="color:rgb(15, 17, 21);">2</font> |
| `<font style="color:rgb(15, 17, 21);background-color:rgb(235, 238, 242);">-wx</font>` | <font style="color:rgb(15, 17, 21);">3</font> |
| `<font style="color:rgb(15, 17, 21);background-color:rgb(235, 238, 242);">r--</font>` | <font style="color:rgb(15, 17, 21);">4</font> |
| `<font style="color:rgb(15, 17, 21);background-color:rgb(235, 238, 242);">r-x</font>` | <font style="color:rgb(15, 17, 21);">5</font> |
| `<font style="color:rgb(15, 17, 21);background-color:rgb(235, 238, 242);">rw-</font>` | <font style="color:rgb(15, 17, 21);">6</font> |
| `<font style="color:rgb(15, 17, 21);background-color:rgb(235, 238, 242);">rwx</font>` | <font style="color:rgb(15, 17, 21);">7</font> |


#### 方法2：
<font style="color:rgb(15, 17, 21);">语法：</font>`<font style="color:rgb(15, 17, 21);background-color:rgb(235, 238, 242);">chmod [对象][操作][权限] 文件</font>`

| <font style="color:rgb(15, 17, 21);">对象</font> | <font style="color:rgb(15, 17, 21);">含义</font> | <font style="color:rgb(15, 17, 21);">操作</font> | <font style="color:rgb(15, 17, 21);">含义</font> | <font style="color:rgb(15, 17, 21);">权限</font> | <font style="color:rgb(15, 17, 21);">含义</font> |
| --- | --- | --- | --- | --- | --- |
| <font style="color:rgb(15, 17, 21);">u</font> | <font style="color:rgb(15, 17, 21);">所有者</font> | <font style="color:rgb(15, 17, 21);">+</font> | <font style="color:rgb(15, 17, 21);">添加</font> | <font style="color:rgb(15, 17, 21);">r</font> | <font style="color:rgb(15, 17, 21);">读</font> |
| <font style="color:rgb(15, 17, 21);">g</font> | <font style="color:rgb(15, 17, 21);">所属组</font> | <font style="color:rgb(15, 17, 21);">-</font> | <font style="color:rgb(15, 17, 21);">移除</font> | <font style="color:rgb(15, 17, 21);">w</font> | <font style="color:rgb(15, 17, 21);">写</font> |
| <font style="color:rgb(15, 17, 21);">o</font> | <font style="color:rgb(15, 17, 21);">其他用户</font> | <font style="color:rgb(15, 17, 21);">=</font> | <font style="color:rgb(15, 17, 21);">设定</font> | <font style="color:rgb(15, 17, 21);">x</font> | <font style="color:rgb(15, 17, 21);">执</font> |


### mkdir
创建目录

`mkdir [参数] 目录`

| <font style="color:rgb(15, 17, 21);">选项</font> | <font style="color:rgb(15, 17, 21);">说明</font> |
| --- | --- |
| `<font style="color:rgb(15, 17, 21);background-color:rgb(235, 238, 242);">-p</font>` | <font style="color:rgb(15, 17, 21);">创建多级目录（若父目录不存在则一并创建）</font> |
| `<font style="color:rgb(15, 17, 21);background-color:rgb(235, 238, 242);">-m</font>` | <font style="color:rgb(15, 17, 21);">创建时直接指定权限（数字模式），如</font><font style="color:rgb(15, 17, 21);"> </font>`<font style="color:rgb(15, 17, 21);background-color:rgb(235, 238, 242);">-m 755</font>` |
| `<font style="color:rgb(15, 17, 21);background-color:rgb(235, 238, 242);">-v</font>` | <font style="color:rgb(15, 17, 21);">显示创建过程（verbose）</font> |




### rm
删除命令

`rm [参数] 文件或目录`

| <font style="color:rgb(15, 17, 21);">选项</font> | <font style="color:rgb(15, 17, 21);">说明</font> |
| --- | --- |
| `<font style="color:rgb(15, 17, 21);background-color:rgb(235, 238, 242);">-i</font>` | **<font style="color:rgb(15, 17, 21);">交互模式</font>**<font style="color:rgb(15, 17, 21);">：删除前逐一询问确认</font> |
| `<font style="color:rgb(15, 17, 21);background-color:rgb(235, 238, 242);">-f</font>` | **<font style="color:rgb(15, 17, 21);">强制删除</font>**<font style="color:rgb(15, 17, 21);">：忽略不存在的文件，不提示确认</font> |
| `<font style="color:rgb(15, 17, 21);background-color:rgb(235, 238, 242);">-r</font>`<br/><font style="color:rgb(15, 17, 21);"> </font><font style="color:rgb(15, 17, 21);">或</font><font style="color:rgb(15, 17, 21);"> </font>`<font style="color:rgb(15, 17, 21);background-color:rgb(235, 238, 242);">-R</font>` | **<font style="color:rgb(15, 17, 21);">递归删除</font>**<font style="color:rgb(15, 17, 21);">：删除目录及其内部所有内容（目录必须用此选项）</font> |
| `<font style="color:rgb(15, 17, 21);background-color:rgb(235, 238, 242);">-v</font>` | **<font style="color:rgb(15, 17, 21);">显示详细信息</font>**<font style="color:rgb(15, 17, 21);">：列出被删除的每个文件</font> |


## 课后习题
### 什么是Linux的发行版本和内核版本？
<font style="color:rgb(15, 17, 21);">指的是 Linux 操作系统的核心——</font>**<font style="color:rgb(15, 17, 21);">内核</font>**<font style="color:rgb(15, 17, 21);">的版本号。内核是系统的心脏，负责管理硬件、内存、进程等底层资源。Linux 内核由 Linus Torvalds 领导的团队维护，所有发行版都使用相同的内核源代码，只是版本可能不同。</font>

<font style="color:rgb(15, 17, 21);">指的是将 Linux 内核、GNU 工具链、图形界面、包管理器、应用软件等打包在一起，形成的</font>**<font style="color:rgb(15, 17, 21);">完整操作系统</font>**<font style="color:rgb(15, 17, 21);">。不同的发行版面向不同用户场景。是在内核上的二次开发，提供服务。</font>

### 查看Linux内核版本的命令是什么？简述Linux内核版本各部分含义。
`uname -r`

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/52501712/1773534326681-aa3898f4-98ae-4df6-9f13-52938c04cc84.png)

**格式：**主版本号.次版本号.修正号

主版本号更迭，代表有质的变化

次版本号更迭，代表有一定的升级；奇数：内核版本为测试版；偶数：内核版本为稳定版

修正号更迭，有小的升级

el9:红帽9

### 简述Linux在生活中无处不在的几个方面。
**<font style="color:rgb(15, 17, 21);">互联网与云服务</font>**<font style="color:rgb(15, 17, 21);">：全球超过 90% 的云服务器运行 Linux。你访问的网站（如 Google、淘宝）、视频流（Netflix）、社交平台（微信后台）大多运行在 Linux 上。</font>

**<font style="color:rgb(15, 17, 21);">移动设备</font>**<font style="color:rgb(15, 17, 21);">：Android 系统基于 Linux 内核，全球数十亿智能手机、平板、电视盒都运行着 Linux。</font>

**<font style="color:rgb(15, 17, 21);">智能家居与嵌入式设备</font>**<font style="color:rgb(15, 17, 21);">：路由器、智能电视、智能音箱、物联网设备（如摄像头、门锁）大量使用轻量级 Linux（如 OpenWrt、Yocto）。</font>

**<font style="color:rgb(15, 17, 21);">汽车</font>**<font style="color:rgb(15, 17, 21);">：车载信息娱乐系统（如特斯拉、奥迪的 MMI）很多基于 Linux 或 Android Automotive（也是 Linux 分支）。</font>

**<font style="color:rgb(15, 17, 21);">金融与关键基础设施</font>**<font style="color:rgb(15, 17, 21);">：证券交易所、银行核心系统、ATM 机大量采用 Linux 以确保高可靠性和实时性。</font>

**<font style="color:rgb(15, 17, 21);">个人电脑与创意工具</font>**<font style="color:rgb(15, 17, 21);">：Steam Deck 游戏机运行 Arch Linux，推动 Linux 游戏生态；好莱坞特效渲染（《阿凡达》等）多使用 Linux 集群。</font>

### 简述Linux使用过程中帮助命令的用法。
| <font style="color:rgb(15, 17, 21);">帮助方式</font> | <font style="color:rgb(15, 17, 21);">用法</font> | <font style="color:rgb(15, 17, 21);">说明</font> |
| --- | --- | --- |
| `**<font style="color:rgb(15, 17, 21);background-color:rgb(235, 238, 242);">--help</font>**`<br/>**<font style="color:rgb(15, 17, 21);"> </font>****<font style="color:rgb(15, 17, 21);">参数</font>** | `<font style="color:rgb(15, 17, 21);background-color:rgb(235, 238, 242);">ls --help</font>` | <font style="color:rgb(15, 17, 21);">大多数命令支持，输出简洁的用法和常用选项摘要</font> |
| `**<font style="color:rgb(15, 17, 21);background-color:rgb(235, 238, 242);">man</font>**`<br/>**<font style="color:rgb(15, 17, 21);"> </font>****<font style="color:rgb(15, 17, 21);">手册</font>** | `<font style="color:rgb(15, 17, 21);background-color:rgb(235, 238, 242);">man ls</font>` | **<font style="color:rgb(15, 17, 21);">Manual pages</font>**<font style="color:rgb(15, 17, 21);">，最权威的完整参考手册，按章节组织（1 用户命令、5 配置文件、8 系统管理）</font> |
| `**<font style="color:rgb(15, 17, 21);background-color:rgb(235, 238, 242);">info</font>**`<br/>**<font style="color:rgb(15, 17, 21);"> </font>****<font style="color:rgb(15, 17, 21);">文档</font>** | `<font style="color:rgb(15, 17, 21);background-color:rgb(235, 238, 242);">info ls</font>` | <font style="color:rgb(15, 17, 21);">更详细、结构化的文档，比 man 更易阅读（GNU 项目偏好）</font> |
| `**<font style="color:rgb(15, 17, 21);background-color:rgb(235, 238, 242);">whatis</font>**` | `<font style="color:rgb(15, 17, 21);background-color:rgb(235, 238, 242);">whatis ls</font>` | <font style="color:rgb(15, 17, 21);">显示命令的一行简短描述，快速了解命令功能</font> |
| `**<font style="color:rgb(15, 17, 21);background-color:rgb(235, 238, 242);">apropos</font>**` | `<font style="color:rgb(15, 17, 21);background-color:rgb(235, 238, 242);">apropos “list files”</font>` | <font style="color:rgb(15, 17, 21);">根据关键词搜索相关命令，当你忘记命令名时很有用</font> |


### 简述Linux使用过程的常见技巧。
#### history
`history`

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/52501712/1773537710339-bb01d0cc-0da8-4a54-9839-afc5b0d1f21f.png)

重复执行某条命令

`！+序号`

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/52501712/1773537780836-45df0ff8-99f6-4ff9-bcb6-c577ea74e61f.png)

#### clear
`clear`/ ctrl + l

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/52501712/1773537878232-608e6281-bf39-40ec-8eeb-69c9568a5738.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/52501712/1773538014017-2de64d85-101d-4d90-b998-e9e6abe8a910.png)

#### 上下键
调出之前命令

#### tab键
补全命令/文件目录

#### !$
占位符 代表上一条命令的最后一个参数

#### date
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/52501712/1773538326037-0f82c597-6438-4d15-9b21-1dad209b58e1.png)



#### ！+字母
反向检索首字母为d的历史命令

### 简述Linux系统下命令提示符的含义。
#### 格式：
[用户名@主机名 当前工作目录]提示符

**<font style="color:rgb(15, 17, 21);">示例</font>**<font style="color:rgb(15, 17, 21);">：</font>`<font style="color:rgb(15, 17, 21);background-color:rgb(235, 238, 242);">zhangsan@ubuntu:~$</font>`

| <font style="color:rgb(15, 17, 21);">组成部分</font> | <font style="color:rgb(15, 17, 21);">示例</font> | <font style="color:rgb(15, 17, 21);">含义</font> |
| --- | --- | --- |
| **<font style="color:rgb(15, 17, 21);">用户名</font>** | `<font style="color:rgb(15, 17, 21);background-color:rgb(235, 238, 242);">zhangsan</font>` | <font style="color:rgb(15, 17, 21);">当前登录的用户名，</font>`<font style="color:rgb(15, 17, 21);background-color:rgb(235, 238, 242);">root</font>`<br/><font style="color:rgb(15, 17, 21);"> </font><font style="color:rgb(15, 17, 21);">时通常显示为红色或</font><font style="color:rgb(15, 17, 21);"> </font>`<font style="color:rgb(15, 17, 21);background-color:rgb(235, 238, 242);">#</font>`<br/><font style="color:rgb(15, 17, 21);"> </font><font style="color:rgb(15, 17, 21);">提示符</font> |
| **<font style="color:rgb(15, 17, 21);">主机名</font>** | `<font style="color:rgb(15, 17, 21);background-color:rgb(235, 238, 242);">ubuntu</font>` | <font style="color:rgb(15, 17, 21);">当前计算机的名称</font> |
| **<font style="color:rgb(15, 17, 21);">工作目录</font>** | `<font style="color:rgb(15, 17, 21);background-color:rgb(235, 238, 242);">~</font>` | <font style="color:rgb(15, 17, 21);">波浪线表示当前在用户的家目录（</font>`<font style="color:rgb(15, 17, 21);background-color:rgb(235, 238, 242);">/home/zhangsan</font>`<br/><font style="color:rgb(15, 17, 21);">），其他目录会显示绝对路径或相对路径缩写</font> |
| **<font style="color:rgb(15, 17, 21);">提示符符号</font>** | `<font style="color:rgb(15, 17, 21);background-color:rgb(235, 238, 242);">$</font>` | <font style="color:rgb(15, 17, 21);">普通用户用</font><font style="color:rgb(15, 17, 21);"> </font>`<font style="color:rgb(15, 17, 21);background-color:rgb(235, 238, 242);">$</font>`<br/><font style="color:rgb(15, 17, 21);">；</font>`<font style="color:rgb(15, 17, 21);background-color:rgb(235, 238, 242);">root</font>`<br/><font style="color:rgb(15, 17, 21);">（超级用户）用</font><font style="color:rgb(15, 17, 21);"> </font>`<font style="color:rgb(15, 17, 21);background-color:rgb(235, 238, 242);">#</font>`<br/><font style="color:rgb(15, 17, 21);">，表示权限级别</font> |




## 总结：
### 收获：
1.设定好了本次课程的学习目标

2.了解到了Linux的发展历史，以及内核版本和发行版本的区别

3.通过上网查询、询问大模型了解到了Linux系统在生活中的应用

4.在遇到不会使用命令的时候可以通过帮助手册学习到命令的用法

5.在遇到卡死，循环重复的情况时，推出状态的6+2种方法

6.学习了Linux文件的存储结构，以及如何通过命令进行目录操作

7.在Linux系统种有哪些快捷操作，可以提高管理效率

### 问题：
本次实验较为顺利，没有出现问题

