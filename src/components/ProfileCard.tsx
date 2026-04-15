import Image from "next/image";

type SocialLink = {
  label: string;
  href: string;
};

type Props = {
  name: string;
  title?: string;
  avatarSrc?: string;
  links: SocialLink[];
};

export function ProfileCard({
  name,
  title,
  avatarSrc = "/avatar.svg",
  links,
}: Props) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const resolvedAvatarSrc =
    avatarSrc.startsWith("/") && basePath && !avatarSrc.startsWith(basePath)
      ? `${basePath}${avatarSrc}`
      : avatarSrc;

  return (
    <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
      <div className="shrink-0">
        <div className="h-20 w-20 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
          <Image
            src={resolvedAvatarSrc}
            alt={`${name} 的头像`}
            width={160}
            height={160}
            className="h-full w-full object-cover"
            priority
          />
        </div>
      </div>

      <div className="min-w-0">
        <p className="text-sm font-medium text-zinc-500">欢迎</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          你好，我是{" "}
          <span className="text-zinc-700 dark:text-zinc-200">{name}</span>
        </h1>
        {title ? (
          <p className="mt-3 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
            {title}
          </p>
        ) : null}

        <div className="mt-5 flex flex-wrap gap-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="inline-flex items-center rounded-full border border-zinc-300 bg-white px-3 py-1.5 text-sm font-medium text-zinc-900 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-50 dark:hover:bg-zinc-900"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

