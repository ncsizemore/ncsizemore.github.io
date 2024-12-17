/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // If not deploying to root domain
  basePath: process.env.NODE_ENV === 'production' ? '/new-academic-site' : '',
}

module.exports = nextConfig