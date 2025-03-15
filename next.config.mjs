/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
      unoptimized: true, // Fixes image optimization issues
    },
    trailingSlash: true
  };

export default nextConfig;
