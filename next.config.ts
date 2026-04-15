import type { NextConfig } from "next";

/**
 * GitHub「项目站点」地址为 https://<用户>.github.io/<仓库名>/
 * 构建时需设置 BASE_PATH=/<仓库名>（与仓库名大小写一致）。
 * 若仓库名为 <用户名>.github.io（用户站点，根域名），则不要设置 BASE_PATH。
 */
const rawBase = (process.env.BASE_PATH ?? "").trim().replace(/\/$/, "");
const basePath = rawBase === "/" ? "" : rawBase;

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
};

export default nextConfig;
