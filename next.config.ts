import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: [
      "localhost",
      "firebasestorage.googleapis.com",
      "lh3.googleusercontent.com",
    ],
    formats: ["image/webp", "image/avif"],
  },
};

export default nextConfig;
