---
title: 重定向
date: 2026-04-15
description: 标准输出/标准错误的覆盖与追加重定向速查。
---

### <font style="color:rgb(15, 17, 21);"> </font>`<font style="color:rgb(15, 17, 21);background-color:rgb(235, 238, 242);">></font>`<font style="color:rgb(15, 17, 21);"> 覆盖重定向</font>
<font style="color:rgb(15, 17, 21);">将命令的标准输出写入指定文件，如果文件已存在则覆盖原内容。</font>

<font style="color:rgb(15, 17, 21);">bash</font>

```bash
# 将 cat 命令的输出写入 newfile.txt
cat wenxu777.txt > newfile.txt

# 如果 newfile.txt 已存在，内容会被覆盖
```

### <font style="color:rgb(15, 17, 21);"></font>`<font style="color:rgb(15, 17, 21);background-color:rgb(235, 238, 242);">>></font>`<font style="color:rgb(15, 17, 21);"> 追加重定向</font>
<font style="color:rgb(15, 17, 21);">将命令的标准输出追加到指定文件末尾，不覆盖原有内容。</font>

<font style="color:rgb(15, 17, 21);">bash</font>

```bash
# 将当前日期追加到日志文件
date >> log.txt
```

### <font style="color:rgb(15, 17, 21);">省略文件描述符编号时的默认行为</font>
<font style="color:rgb(15, 17, 21);">当使用 </font>`<font style="color:rgb(15, 17, 21);background-color:rgb(235, 238, 242);">></font>`<font style="color:rgb(15, 17, 21);"> 或 </font>`<font style="color:rgb(15, 17, 21);background-color:rgb(235, 238, 242);">>></font>`<font style="color:rgb(15, 17, 21);"> 时，默认操作的是标准输出（即描述符 1），所以 </font>`<font style="color:rgb(15, 17, 21);background-color:rgb(235, 238, 242);">> file</font>`<font style="color:rgb(15, 17, 21);"> 等同于 </font>`<font style="color:rgb(15, 17, 21);background-color:rgb(235, 238, 242);">1> file</font>`<font style="color:rgb(15, 17, 21);">。</font>

## <font style="color:rgb(15, 17, 21);">标准错误重定向</font>
### <font style="color:rgb(15, 17, 21);"></font>`<font style="color:rgb(15, 17, 21);background-color:rgb(235, 238, 242);">2></font>`<font style="color:rgb(15, 17, 21);"> 错误覆盖重定向</font>
<font style="color:rgb(15, 17, 21);">将标准错误写入指定文件（覆盖）。</font>

```bash
# 尝试列出不存在的目录，错误信息被保存到 error.log
ls /nonexist 2> error.log
```

### <font style="color:rgb(15, 17, 21);"> </font>`<font style="color:rgb(15, 17, 21);background-color:rgb(235, 238, 242);">2>></font>`<font style="color:rgb(15, 17, 21);"> 错误追加重定向</font>
<font style="color:rgb(15, 17, 21);">将标准错误追加到指定文件末尾。</font>

```bash
# 将错误信息追加到已有日志
command 2>> error.log
```

## 全部输出重定向符
### `&>`全部输出覆盖重定向
### `&>>`全部输出追加重定向
