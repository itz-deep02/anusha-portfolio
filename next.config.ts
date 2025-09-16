import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // ✅ Don’t fail the Vercel build on ESLint errors
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
