import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res-4.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'res-3.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'res-2.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'res-1.cloudinary.com',
      }
    ],
  }
};

export default nextConfig;
