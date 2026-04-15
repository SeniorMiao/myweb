---
title: 高级权限
date: 2026-04-15
description: umask、SUID/SGID/Sticky 与 ACL 等高级权限要点整理。
---

# UMASK反掩码
## 含义
<font style="color:rgb(15, 17, 21);">即权限屏蔽字</font>

<font style="color:rgb(15, 17, 21);">用于</font>**<font style="color:rgb(15, 17, 21);">设定新创建文件或目录的默认权限</font>**<font style="color:rgb(15, 17, 21);">。它决定了从默认的完整权限中“去掉”哪些位。</font>

`umask [反掩码]`

**<font style="color:rgb(15, 17, 21);">对文件</font>**<font style="color:rgb(15, 17, 21);">：默认完整权限是 </font>`<font style="color:rgb(15, 17, 21);background-color:rgb(235, 238, 242);">666</font>`<font style="color:rgb(15, 17, 21);">（rw-rw-rw-），因为文件默认不应有执行权限。</font>

**<font style="color:rgb(15, 17, 21);">对目录</font>**<font style="color:rgb(15, 17, 21);">：默认完整权限是 </font>`<font style="color:rgb(15, 17, 21);background-color:rgb(235, 238, 242);">777</font>`<font style="color:rgb(15, 17, 21);">（rwxrwxrwx），因为目录需要执行权限才能进入。</font>

**<font style="color:rgb(15, 17, 21);">公式</font>**<font style="color:rgb(15, 17, 21);">：  
</font><font style="color:rgb(15, 17, 21);">实际权限 = 完整权限 - umask 值（按位减，但实际上是按位清除）</font>

## 查看反掩码
`umask`

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/52501712/1775952425738-7342ed72-cb68-4aa5-9428-85723d5ca2df.png)



反掩码默认0022

自己创一个wenxuxxx用户

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/52501712/1775952568124-65dcd049-983a-4326-bbbe-390270f9c93d.png)

修改反掩码

`umask [反掩码] 用户`

修改

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/52501712/1775953100600-1764436e-3841-4acc-9fcc-f0343556908a.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/52501712/1775953118588-6e932dce-acef-4d67-a22a-31eedc760023.png)



:::warning
推文件权限时可能出错

正确口诀：

有x则减，无x则不变

rwxrw-rw-	=>		rw-rw-rw-

:::

# SUID权限弥补
对passwd命令的执行文件操作

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/52501712/1775953642474-9f17c223-7a30-4418-b543-8c33cac1b107.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/52501712/1775953859438-9f4e4d07-47cb-4151-85f3-720951e7fe26.png)

删除权限

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/52501712/1775953966817-b9ffe9c0-a487-4fa4-8ca2-6a53d850ee68.png)

由于删除了s权限所以执行进程的id是进程所有者id，而不是弥补权限后的root

没有权限所以执行失败

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/52501712/1775954142572-d7538d6a-de21-4806-a6d0-1ca7f663a7ee.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/52501712/1775954185104-c071ba33-0cd1-4e57-9757-67e767681084.png)

添加s权限后执行成功

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/52501712/1775954262178-5554b179-9b4a-46e1-9a68-30c19eaf26d7.png)

## SUID的含义
对敏感命令，x权限普通用户无法执行，s会给普通用户弥补权限

<font style="color:rgb(15, 17, 21);">在 Linux 中，SUID（Set User ID）是一种特殊的文件权限，主要作用于可执行文件。当一个可执行文件设置了 SUID 权限后，任何用户执行该文件时，进程将以文件所有者（通常是 root）的身份运行，而不是以执行者自己的身份。</font>

## <font style="color:rgb(15, 17, 21);">s与S的区别</font>
<font style="color:rgb(15, 17, 21);">s比S多一个x的权限</font>

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/52501712/1775954693907-cb488eca-4aa4-4f27-b3f3-d6067bc77f4d.png)



# SGID
## 含义
<font style="color:rgb(15, 17, 21);">是 Linux 中的一种特殊权限，作用于</font>**<font style="color:rgb(15, 17, 21);">可执行文件</font>**<font style="color:rgb(15, 17, 21);">或</font>**<font style="color:rgb(15, 17, 21);">目录</font>**<font style="color:rgb(15, 17, 21);">，其效果与 SUID 类似，但针对的是</font>**<font style="color:rgb(15, 17, 21);">组</font>**<font style="color:rgb(15, 17, 21);">身份</font>

<font style="color:rgb(15, 17, 21);">任何用户执行该文件时，产生的进程的</font>**<font style="color:rgb(15, 17, 21);">有效组 ID（EGID）</font>**<font style="color:rgb(15, 17, 21);"> 会变成该文件</font>**<font style="color:rgb(15, 17, 21);">所属组的 GID</font>**<font style="color:rgb(15, 17, 21);">，而不是执行者自己的主要组。</font>

<font style="color:rgb(15, 17, 21);">进程因此会拥有该组对应的文件访问权限。</font>

创建组23ruangong3

## 实验过程
创建观察的文件夹

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/52501712/1775955940504-6d62f31d-8d58-42ee-8116-781b6025a52c.png)

修改所属组

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/52501712/1775956005443-c42f5bea-d0bb-439a-bd18-2c88087b7bb5.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/52501712/1775956036506-74b8b440-1908-42b1-a2a9-c0589e467211.png)

加SGID  

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/52501712/1775956190502-b6897611-6828-47c8-abd6-4cc0996b055b.png)

有t权限后组内创建的文件会继承所属组

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/52501712/1775956508678-02c9fba5-f3dd-4354-9f48-450c264ce07f.png)





# <font style="color:rgb(15, 17, 21);">Sticky</font>
## 含义
<font style="color:rgb(15, 17, 21);">是一种特殊权限，主要作用于</font>**<font style="color:rgb(15, 17, 21);">目录</font>**<font style="color:rgb(15, 17, 21);">。设置后，只有文件的所有者、目录的所有者或 root 才能删除或重命名该目录下的文件（即使其他用户对该目录有写权限也无法删除别人的文件</font>

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/52501712/1775957527232-42ad6101-aae0-45e2-869a-635deb392df2.png)

谁的东西只能谁删除

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/52501712/1775957711847-362273a1-506b-46d5-8080-6a72949ed56b.png)

## 实验过程
对象的第九位权限变为t

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/52501712/1775956747566-9ddda9b6-302e-4f15-a31e-8c456f9c70f0.png)



观察准备：

创建share文件夹

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/52501712/1775956840854-9dacf24f-7565-44ea-8a6c-d53d4d80d43a.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/52501712/1775956896234-50b07c76-f81d-47cd-93d5-083d74c7fc42.png)

切换到wenxuxxx用户并创建两个txt文件

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/52501712/1775957094235-0b5a87ab-fe50-48d1-9060-ec31f48b0bef.png)

用root权限将文件设置为全权限

并添加t权限

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/52501712/1775957187308-b4f06ffe-ebf8-4652-b198-1f8768f6d105.png)

## 
# ACL访问控制列表
## 查看访问列表
准备一个123.txt

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/52501712/1775959368711-0bac80f3-9add-4346-a2ad-cef0cea94213.png)

查看列表`getfacl`

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/52501712/1775959516212-dd4d3dfb-8f4b-4bcc-8e30-c1ef7468e176.png)

## 含义
<font style="color:rgb(15, 17, 21);">是对 Linux 传统 UGO（用户-组-其他）权限模型的扩展，允许为</font>**<font style="color:rgb(15, 17, 21);">单个用户</font>**<font style="color:rgb(15, 17, 21);">、</font>**<font style="color:rgb(15, 17, 21);">单个组</font>**<font style="color:rgb(15, 17, 21);">甚至</font>**<font style="color:rgb(15, 17, 21);">默认继承</font>**<font style="color:rgb(15, 17, 21);">设置更细粒度的权限，而不限于“所有者、所属组、其他人”三个维度。</font>

## 设置acl
设置文件的

`setfacl -m u:[用户名]:[权限] [目标]`

`setfacl -m d:u:[用户名]:[权限] [目标]`

修改wenxuxxx权限为rw- ， wenxuyyy权限为---

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/52501712/1775959978823-3a5b033d-a60f-4664-9339-b37648efb6d0.png)

wenxuyyy用户不能操作（---）

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/52501712/1775960189296-d1cbcc7a-e8a7-4965-9f4c-4bc098b1b8e3.png)

wenxuxxx用户可以读写（rw-）

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/52501712/1775960253962-4c8f4dae-ceee-472c-9135-9d10710a94d7.png)

## 删除acl
不彻底删除：

`setfacl -x u:[用户]`

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/52501712/1775960886476-cd4acf4f-341e-4f06-b1d8-864c9a973a2e.png)

彻底删除：

chacl -B [目标] 

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/52501712/1775960980547-0e322709-b632-4830-988b-c9dfce382744.png)

移动D带有acl的对象同时携带acl 

而复制不会携带acl ，想携带加 -p 参数，保留固有属性



:::warning
chmod 7777     SUID 1  SGID 1  STICL 1 

权限最高位代表 SUID，SGID ,  STICL，组成二进制数的十进制转换

:::

