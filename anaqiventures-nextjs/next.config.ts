import type { NextConfig } from "next";

const isDevelopment = process.env.NODE_ENV === "development";

const nextConfig: NextConfig = {
  ...(isDevelopment ? {} : { output: "export" as const }),
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
