import fs from "fs";
import path from "path";

export type ResourceItem = {
  name: string;
  version?: string;
  description?: string;
  /**
   * 站内资源路径（从 public/ 根开始），如 "/resources/jdk.zip"
   */
  path?: string;
  /**
   * 外部下载链接（如 GitHub Releases）
   */
  url?: string;
};

const resourcesJsonPath = path.join(process.cwd(), "content", "resources.json");

export function getResources(): ResourceItem[] {
  if (!fs.existsSync(resourcesJsonPath)) return [];
  const raw = fs.readFileSync(resourcesJsonPath, "utf8");
  const parsed = JSON.parse(raw) as unknown;
  if (!Array.isArray(parsed)) return [];
  return parsed
    .filter((x): x is ResourceItem => typeof x === "object" && x !== null)
    .map((x) => x as ResourceItem)
    .filter((x) => typeof x.name === "string" && x.name.trim().length > 0)
    .map((x) => ({
      ...x,
      name: x.name.trim(),
    }));
}

