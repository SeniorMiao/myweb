import type { Metadata } from "next";
import { getResources } from "@/lib/resources";

export const metadata: Metadata = {
  title: "资源",
  description: "常用安装包与资料下载",
};

function resolveHref(item: { path?: string; url?: string }) {
  if (item.url) return item.url;
  if (!item.path) return null;
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  if (!item.path.startsWith("/")) return item.path;
  return base && !item.path.startsWith(base) ? `${base}${item.path}` : item.path;
}

export default function ResourcesPage() {
  const items = getResources();

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
        资源下载
      </h1>
      <p className="mt-3 text-zinc-600 dark:text-zinc-400">
        小文件可直接放在{" "}
        <code className="rounded bg-zinc-100 px-1 py-0.5 text-sm dark:bg-zinc-900">
          public/resources/
        </code>{" "}
        下；大文件（如 JDK 安装包）建议放到 GitHub Releases 再在这里填链接。
      </p>

      <ul className="mt-10 space-y-6">
        {items.map((item) => {
          const href = resolveHref(item);
          return (
            <li
              key={`${item.name}-${item.version ?? ""}`}
              className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h2 className="text-lg font-semibold">{item.name}</h2>
                {item.version ? (
                  <span className="text-sm text-zinc-500">{item.version}</span>
                ) : null}
              </div>
              {item.description ? (
                <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  {item.description}
                </p>
              ) : null}
              <div className="mt-4">
                {href ? (
                  <a
                    href={href}
                    className="inline-flex items-center rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
                    target={item.url ? "_blank" : undefined}
                    rel={item.url ? "noopener noreferrer" : undefined}
                    download={item.path ? "" : undefined}
                  >
                    下载
                  </a>
                ) : (
                  <span className="text-sm text-zinc-500">
                    缺少下载地址（请在 resources.json 里补齐 url 或 path）
                  </span>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

