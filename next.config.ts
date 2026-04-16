import type { NextConfig } from "next";

// GitHub Actions sets this automatically; Vercel does not.
const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = isGitHubPages
  ? {
      output: "export",
      basePath: "/portlandapartments",
      images: { unoptimized: true },
    }
  : {};

export default nextConfig;
