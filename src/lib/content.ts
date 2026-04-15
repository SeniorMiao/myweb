import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type Collection = "blog" | "projects";

export type ContentItem = {
  slug: string;
  title: string;
  description: string;
  date?: string;
  body: string;
};

function collectionDir(collection: Collection) {
  return path.join(process.cwd(), "content", collection);
}

export function getSlugs(collection: Collection): string[] {
  const dir = collectionDir(collection);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export function getItem(
  collection: Collection,
  slug: string,
): ContentItem | null {
  const fullPath = path.join(collectionDir(collection), `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;
  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);
  const title = typeof data.title === "string" ? data.title : slug;
  const description =
    typeof data.description === "string" ? data.description : "";
  const date = typeof data.date === "string" ? data.date : undefined;
  return { slug, title, description, date, body: content };
}

export function getAllItems(collection: Collection): ContentItem[] {
  return getSlugs(collection)
    .map((slug) => getItem(collection, slug))
    .filter((item): item is ContentItem => item !== null)
    .sort((a, b) => {
      const da = a.date ? Date.parse(a.date) : 0;
      const db = b.date ? Date.parse(b.date) : 0;
      return db - da;
    });
}
