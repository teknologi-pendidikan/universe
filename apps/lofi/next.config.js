const nextSafe = require('next-safe')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: nextSafe({
          isDev: false,
          // contentSecurityPolicy: false
          contentSecurityPolicy: {
            'connect-src': "'self' webpack://* https: data:",
            'frame-src': 'https:',
            'img-src': "'self' blob: https:",
            'script-src': "'self' 'unsafe-inline' 'unsafe-eval' https:",
            'style-src': "'self' 'unsafe-inline'",
            'worker-src': "'self' blob:",
            'report-uri': 'https://dptsi.edtech.or.id',
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
            'report-uri': 'https://dptsi.edtech.or.id',
            'prefetch-src': false,
          },
        }),
      },
    ]
  },
}

module.exports = nextConfig
