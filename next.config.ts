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
      "https://suwogbcfxurmblgcrvkp.storage.supabase.co",
      "https://suwogbcfxurmblgcrvkp.supabase.co",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "suwogbcfxurmblgcrvkp.storage.supabase.co",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "suwogbcfxurmblgcrvkp.supabase.co",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
