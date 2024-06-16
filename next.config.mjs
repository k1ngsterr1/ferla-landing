/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["ferla-backend-production.up.railway.app"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
