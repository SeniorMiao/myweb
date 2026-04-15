# 个人网站（博客 + 项目）

基于 **Next.js 静态导出**（`output: "export"`），可部署到 **GitHub Pages**。内容放在 `content/blog/` 与 `content/projects/` 的 Markdown 文件中，构建时生成静态 HTML。

## 本地开发

```bash
npm install
npm run dev
```

浏览器打开 `http://localhost:3000`。

## 写作与页面

- **博客**：在 `content/blog/` 新建 `*.md`，文件名（不含扩展名）即网址路径，例如 `hello-world.md` → `/blog/hello-world/`。
- **项目**：在 `content/projects/` 同样方式添加。
- **首页文案**：编辑 `src/app/page.tsx`。
- **关于页**：编辑 `src/app/about/page.tsx`。

Markdown 里写站内链接时，用根路径即可，例如 `[项目](/projects/)`；部署在 GitHub「项目站点」子路径时，构建脚本会自动补上仓库前缀。

## 模拟 GitHub「项目站点」子路径构建

普通仓库的 Pages 地址为 `https://<用户名>.github.io/<仓库名>/`。本地验证时可设置环境变量 `BASE_PATH`（与仓库名一致，前面加 `/`）：

**PowerShell：**

```powershell
$env:BASE_PATH="/你的仓库名"
npm run build
Remove-Item Env:BASE_PATH
```

也可复制 `.env.example` 为 `.env.local`（已被 `.gitignore` 忽略），写入一行 `BASE_PATH=/你的仓库名` 后再执行 `npm run build`。

`package.json` 里的 `npm run build:subpath` 是示例脚本（默认写死为 `/MyWeb`），请改成与你的 **GitHub 仓库名** 一致，或直接用上面的环境变量方式。

构建产物在 `out/` 目录。

## 第一次发布到 GitHub（新手向）

### 1. 在 GitHub 新建仓库

1. 登录 GitHub，右上角 **+** → **New repository**。
2. **Repository name** 填写你的仓库名（例如 `my-web`）。记下这个名字，它决定线上地址里的路径段。
3. 建议先 **不要** 勾选「Add a README」（避免与你本地已有提交冲突）。创建即可。

### 2. 把本地上传到 GitHub

在本项目根目录执行（把下面 URL 换成你的仓库地址）：

```bash
git add .
git commit -m "Initial personal site"
git branch -M main
git remote add origin https://github.com/<你的用户名>/<你的仓库名>.git
git push -u origin main
```

如果你使用 SSH，把 `origin` 换成 `git@github.com:<你的用户名>/<你的仓库名>.git`。

### 3. 开启 GitHub Pages（用 Actions 发布）

1. 打开仓库 **Settings** → **Pages**。
2. **Build and deployment** → **Source** 选择 **GitHub Actions**（不要选 Deploy from a branch 指向 `out`，本仓库已用 workflow 上传构建产物）。
3. 回到 **Actions** 标签页，确认 workflow **Deploy static site to GitHub Pages** 在 `push` 到 `main` 后会运行并成功。

首次使用 Pages 时，GitHub 可能会提示为 workflow 授予 **pages: write** 权限；按页面提示允许即可。

部署完成后，在 **Settings → Pages** 里可以看到站点地址。普通仓库一般为：

`https://<你的用户名>.github.io/<你的仓库名>/`

### 4. 默认分支不是 `main` 时

本仓库的自动发布配置在 `.github/workflows/deploy-pages.yml` 里监听 **`main`**。若你使用 `master` 等其他默认分支，请把 workflow 里的：

`branches: ["main"]`

改成你的分支名，并推送。

## 用户站点仓库（`<用户名>.github.io`）

若仓库名恰好是 **`<你的用户名>.github.io`**，站点根路径为 `https://<你的用户名>.github.io/`，**不需要** `BASE_PATH`。本仓库的 GitHub Actions 已做判断：仓库名以 `.github.io` 结尾时自动使用空的 `BASE_PATH`。

## 常见问题

- **样式或脚本 404、页面空白**：GitHub Pages 曾用 Jekyll 处理站点；本项目已在 `public/.nojekyll` 禁用 Jekyll，避免忽略 `_next` 等目录。
- **资源路径不对**：确认线上地址是否带子路径；子路径站点必须在构建时设置正确的 `BASE_PATH`（本仓库 CI 已对普通仓库自动设置）。
- **推送要求登录**：HTTPS 推送可能需要 **Personal Access Token**（PAT）代替密码；或在本地配置 **SSH key**。

## 技术说明

- Next.js App Router、`next build` 生成 `out/`。
- `next.config.ts` 中开启 `output: "export"`、`images.unoptimized`，适配静态托管。
