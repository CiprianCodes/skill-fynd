/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com', port: '' },
      { protocol: 'https', hostname: 'randomuser.me', port: '' },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  
  compress: true,
  
  experimental: {
    optimizeServerReact: true,
  },
  
  poweredByHeader: false,
  
  productionBrowserSourceMaps: false,
  
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

};

module.exports = nextConfig;
