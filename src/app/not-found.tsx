import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col items-center px-4 py-24 text-center">
      <p className="text-sm font-medium text-zinc-500">404</p>
      <h1 className="mt-2 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
        页面不存在
      </h1>
      <p className="mt-3 text-zinc-600 dark:text-zinc-400">
        链接可能已失效，或内容尚未发布。
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-zinc-900 px-5 py-2 text-sm font-medium text-white hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
      >
        返回首页
      </Link>
    </div>
  );
}
