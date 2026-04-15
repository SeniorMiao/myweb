import Link from "next/link";
import type { Metadata } from "next";
import { getAllItems } from "@/lib/content";

export const metadata: Metadata = {
  title: "项目",
  description: "作品集与项目说明",
};

export default function ProjectsIndexPage() {
  const items = getAllItems("projects");

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
        项目
      </h1>
      <p className="mt-3 text-zinc-600 dark:text-zinc-400">
        每个项目对应 <code className="rounded bg-zinc-100 px-1 py-0.5 text-sm dark:bg-zinc-900">content/projects/</code>{" "}
        下的一篇 Markdown。
      </p>
      <ul className="mt-10 space-y-8">
        {items.map((item) => (
          <li key={item.slug} className="border-b border-zinc-100 pb-8 last:border-0 dark:border-zinc-900">
            <Link
              href={`/projects/${item.slug}/`}
              className="text-xl font-medium text-zinc-900 hover:underline dark:text-zinc-50"
            >
              {item.title}
            </Link>
            {item.date ? (
              <p className="mt-1 text-sm text-zinc-500">{item.date}</p>
            ) : null}
            {item.description ? (
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                {item.description}
              </p>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
}
