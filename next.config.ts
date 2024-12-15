import { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ['@flaticon/flaticon-uicons'],
  },
  images: {
    remotePatterns: [{ hostname: 'cdn.hashnode.com' }],
  },
  skipTrailingSlashRedirect: true,
}

export default nextConfig
