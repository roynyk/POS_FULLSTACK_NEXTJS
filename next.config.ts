import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "10mb",
    },
  },
  devIndicators: false,
  images: {
    domains: [
      "suwogbcfxurmblgcrvkp.supabase.co",
      "suwogbcfxurmblgcrvkp.storage.supabase.co",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "suwogbcfxurmblgcrvkp.supabase.co",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "suwogbcfxurmblgcrvkp.storage.supabase.co",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
