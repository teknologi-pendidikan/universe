const nextSafe = require('next-safe')
const withMDX = require('@next/mdx')()
const withPWA = require('@ducanh2912/next-pwa').default({
  dest: 'public',
  reloadOnOnline: true,
  disable: process.env.NODE_ENV === 'development',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.youtube.com',
      },
      {
        protocol: 'https',
        hostname: '**.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: '**.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: '**.teknologipendidikan.or.id',
      },
      {
        protocol: 'https',
        hostname: '**.cloudhost.id',
      },
      {
        protocol: 'https',
        hostname: '**.google.com',
      },
    ],
  },
  experimental: {
    mdxRs: true,
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: nextSafe({
          isDev: false,
          // contentSecurityPolicy: false
          contentSecurityPolicy: {
            'connect-src': "'self' webpack://* https: data:",
            'frame-src': "'self' https://*.youtube.com/ https://*.google.com/",
            'img-src':
              "'self' blob: https://*.teknologipendidikan.or.id https://is3.cloudhost.id/teknologipendidikan/ https://drive.google.com https://*.googleusercontent.com https://www.netlify.com/img/",
            'script-src':
              "'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com/gtag/js https://netlify-rum.netlify.app/ https://www.youtube.com/iframe_api https://www.youtube.com/s/player/1dda5629/www-widgetapi.vflset/",
            'style-src': "'self' 'unsafe-inline'",
            'worker-src': "'self' blob:",
            'prefetch-src': false,
          },
        }),
      },
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DPTSI-Infra-Lockdown',
            value: 'FALSE',
          },
          {
            key: 'X-DPTSI-Zone',
            value: 'GLOBAL',
          },
        ],
      },
      {
        source: '/admin/:path*',
        headers: nextSafe({
          isDev: false,
          contentSecurityPolicy: {
            'connect-src':
              "'self' webpack://* https: data: blob: http://localhost:8081/api/v1",
            'frame-src': "'none' ",
            'img-src':
              "'self' blob: https://*.teknologipendidikan.or.id https://*.githubusercontent.com https://is3.cloudhost.id/teknologipendidikan/ https://drive.google.com https://*.googleusercontent.com https://www.netlify.com/img/",
            'script-src':
              "'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com/gtag/js https://netlify-rum.netlify.app/ https://unpkg.com/netlify-cms@^2.10.17/dist/",
            'style-src': "'self' 'unsafe-inline'",
            'worker-src': "'self' blob:",
            'prefetch-src': false,
          },
        }),
      },
    ]
  },
}

module.exports = withMDX(withPWA(nextConfig))
