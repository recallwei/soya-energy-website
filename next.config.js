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
  }
}

module.exports = nextConfig
