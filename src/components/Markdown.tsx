import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Props = {
  source: string;
};

function normalizeHref(href: string | undefined) {
  if (!href || href.startsWith("#")) return href;
  if (href.startsWith("//")) return href;
  const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";
  if (!href.startsWith("/")) return href;
  if (prefix && href.startsWith(prefix)) return href;
  return prefix ? `${prefix}${href}` : href;
}

function normalizeSrc(src: string | undefined) {
  if (!src) return src;
  if (src.startsWith("data:")) return src;
  if (src.startsWith("http://") || src.startsWith("https://")) return src;
  if (src.startsWith("//")) return src;
  return normalizeHref(src);
}

export function Markdown({ source }: Props) {
  return (
    <div className="markdown-body">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          a: ({ href, children, ...rest }) => {
            const resolved = normalizeHref(href);
            return (
              <a
                {...rest}
                href={resolved}
                target={href?.startsWith("http") ? "_blank" : undefined}
                rel={
                  href?.startsWith("http") ? "noopener noreferrer" : undefined
                }
              >
                {children}
              </a>
            );
          },
          img: ({ src, alt, ...rest }) => {
            const raw = typeof src === "string" ? src : undefined;
            const resolved = normalizeSrc(raw);
            return (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                {...rest}
                src={resolved}
                alt={alt ?? ""}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="my-4 max-w-full rounded-xl border border-zinc-200 dark:border-zinc-800"
              />
            );
          },
        }}
      >
        {source}
      </ReactMarkdown>
    </div>
  );
}
