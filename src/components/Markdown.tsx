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
        }}
      >
        {source}
      </ReactMarkdown>
    </div>
  );
}
