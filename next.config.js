/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Image optimization
  images: {
    domains: ['images.unsplash.com', 'randomuser.me'], 
    formats: ['image/avif', 'image/webp'],
  },
  
  // Compression
  compress: true,
  
  // Experimental features
  experimental: {
    // optimizeCss: true, // Requires 'critters' package
    optimizeServerReact: true, // Optimizes server-side React rendering
  },
  
  // Enable static optimization
  poweredByHeader: false, // Remove the X-Powered-By header
  
  // Enable gzip compression for faster page loads
  productionBrowserSourceMaps: false, // Disable source maps in production for smaller files
  
  // Configure compiler options
  compiler: {
    // Enable styled-components if using them
    // styledComponents: true,
    removeConsole: process.env.NODE_ENV === 'production', // Remove console statements in production
  },
  
  // Configure asset prefixes for CDN if needed
  // assetPrefix: 'https://cdn.yourdomain.com',
};

module.exports = nextConfig;
