import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "关于",
  description: "个人简介与联系方式",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
        关于我
      </h1>
      <div className="markdown-body mt-8 space-y-4 text-zinc-700 dark:text-zinc-300">
        <p>
          在这里写你的简介：你在做什么、擅长什么、希望合作的方向。把这段替换成你自己的内容即可。
        </p>
        <p>
          联系方式示例：把下面的占位链接换成你的 GitHub、邮箱或其他渠道。
        </p>
        <ul>
          <li>
            GitHub：{" "}
            <a href="https://github.com/">https://github.com/</a>
          </li>
          <li>邮箱：you@example.com</li>
        </ul>
      </div>
    </div>
  );
}
