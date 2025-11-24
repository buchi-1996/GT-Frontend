import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // CRITICAL: Use standalone output to prevent PM2 race conditions
  output: 'standalone',
  
  // Optimize for production
  compress: true,
 
  // Disable x-powered-by header
  poweredByHeader: false,

};

export default nextConfig;