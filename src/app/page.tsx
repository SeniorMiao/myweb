import Link from "next/link";
import { getAllItems } from "@/lib/content";

export default function Home() {
  const posts = getAllItems("blog").slice(0, 3);
  const projects = getAllItems("projects").slice(0, 3);

  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <section>
        <p className="text-sm font-medium text-zinc-500">欢迎</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          你好，我是 <span className="text-zinc-700 dark:text-zinc-200">你的名字</span>
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          这是一套可部署到 GitHub Pages 的个人站骨架：支持博客与项目页，后续也可以平滑扩展到更多动态能力。
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/blog/"
            className="rounded-full bg-zinc-900 px-5 py-2 text-sm font-medium text-white hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            阅读博客
          </Link>
          <Link
            href="/projects/"
            className="rounded-full border border-zinc-300 px-5 py-2 text-sm font-medium text-zinc-900 hover:bg-white dark:border-zinc-700 dark:text-zinc-50 dark:hover:bg-zinc-950"
          >
            查看项目
          </Link>
        </div>
      </section>

      <section className="mt-16 grid gap-10 md:grid-cols-2">
        <div>
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="text-lg font-semibold">最新文章</h2>
            <Link href="/blog/" className="text-sm text-zinc-600 hover:underline dark:text-zinc-400">
              全部
            </Link>
          </div>
          <ul className="mt-4 space-y-4">
            {posts.map((p) => (
              <li key={p.slug}>
                <Link href={`/blog/${p.slug}/`} className="font-medium hover:underline">
                  {p.title}
                </Link>
                {p.date ? (
                  <p className="text-xs text-zinc-500">{p.date}</p>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="text-lg font-semibold">精选项目</h2>
            <Link href="/projects/" className="text-sm text-zinc-600 hover:underline dark:text-zinc-400">
              全部
            </Link>
          </div>
          <ul className="mt-4 space-y-4">
            {projects.map((p) => (
              <li key={p.slug}>
                <Link href={`/projects/${p.slug}/`} className="font-medium hover:underline">
                  {p.title}
                </Link>
                {p.description ? (
                  <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{p.description}</p>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
