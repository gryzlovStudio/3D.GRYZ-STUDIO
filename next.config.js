/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/3D.GRYZ-STUDIO',
  assetPrefix: '/3D.GRYZ-STUDIO/',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig
