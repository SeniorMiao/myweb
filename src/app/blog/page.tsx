import Link from "next/link";
import type { Metadata } from "next";
import { getAllItems } from "@/lib/content";

export const metadata: Metadata = {
  title: "博客",
  description: "文章列表",
};

export default function BlogIndexPage() {
  const posts = getAllItems("blog");

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
        博客
      </h1>
      <p className="mt-3 text-zinc-600 dark:text-zinc-400">
        在 <code className="rounded bg-zinc-100 px-1 py-0.5 text-sm dark:bg-zinc-900">content/blog/</code>{" "}
        添加 <code className="rounded bg-zinc-100 px-1 py-0.5 text-sm dark:bg-zinc-900">.md</code>{" "}
        文件即可新增文章。
      </p>
      <ul className="mt-10 space-y-8">
        {posts.map((post) => (
          <li key={post.slug} className="border-b border-zinc-100 pb-8 last:border-0 dark:border-zinc-900">
            <Link
              href={`/blog/${post.slug}/`}
              className="text-xl font-medium text-zinc-900 hover:underline dark:text-zinc-50"
            >
              {post.title}
            </Link>
            {post.date ? (
              <p className="mt-1 text-sm text-zinc-500">{post.date}</p>
            ) : null}
            {post.description ? (
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                {post.description}
              </p>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
}
