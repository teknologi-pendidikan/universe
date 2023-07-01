const nextSafe = require('next-safe')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: nextSafe({
          isDev: false,
          contentSecurityPolicy: {
            'connect-src': "'self' webpack://* https: data:",
            'frame-src':
              "'none' https://www.youtube.com/ https://docs.google.com/",
            'img-src':
              "'self' https://is3.cloudhost.id/teknologipendidikan/ https://drive.google.com https://*.googleusercontent.com https://www.netlify.com/img/",
            'script-src':
              "'self' 'unsafe-eval' 'unsafe-inline' https://www.youtube.com/ https://www.googletagmanager.com/gtag/js https://netlify-rum.netlify.app/",
            'style-src': "'self' 'unsafe-inline'",
            'worker-src': "'self' blob:",
            'report-uri': 'https://dptsi.edtech.or.id',
          },
        }),
      },
    ]
  },
}

module.exports = nextConfig
