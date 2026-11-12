import type { NextConfig } from "next";

// Build target switch:
//   DEPLOY_TARGET=github  -> GitHub Pages preview, served under /pinehurstmtnlodge-new
//   (unset)               -> custom domain, served from the root
const isGithub = false;
const basePath = isGithub ? "/pinehurstmtnlodge-new" : "";
const siteOrigin = isGithub ? "https://bruerdevelopment.github.io" : "https://pinehurstmtnlodge.com";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
    NEXT_PUBLIC_SITE_ORIGIN: siteOrigin,
  },
  allowedDevOrigins: ['192.168.0.50'],
  // Static export has no image optimizer server, so next/image must run unoptimized.
  images: {
    unoptimized: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
