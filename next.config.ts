/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  }
  // Remove basePath and assetPrefix since this will be the root site
}

module.exports = nextConfig