/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static export mode
  images: {
    unoptimized: true, // Disables Image Optimization API for static exports
  },
};

module.exports = nextConfig;
