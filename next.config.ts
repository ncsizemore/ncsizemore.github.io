import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  }
  // Remove basePath and assetPrefix since this will be the root site
}

export default nextConfig