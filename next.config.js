/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US'
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.soly-energy.com',
        port: '',
        pathname: '/app/uploads/**'
      }
    ]
  },
  /**
   * React PDF
   * @see https://github.com/wojtekmaj/react-pdf/blob/main/packages/react-pdf/README.md#nextjs
   */
  webpack: (config) => {
    config.resolve.alias.canvas = false
    return config
  }
}

module.exports = nextConfig
