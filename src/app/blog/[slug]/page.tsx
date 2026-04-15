import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getItem, getSlugs } from "@/lib/content";
import { Markdown } from "@/components/Markdown";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getSlugs("blog").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getItem("blog", slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description || undefined,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getItem("blog", slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <header>
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          {post.title}
        </h1>
        {post.date ? (
          <p className="mt-2 text-sm text-zinc-500">{post.date}</p>
        ) : null}
      </header>
      <div className="mt-10">
        <Markdown source={post.body} />
      </div>
    </article>
  );
}
