import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/', '/admin/', '/sso/', '/login/'],
    },
    sitemap: 'https://lofi.teknologipendidikan.or.id/sitemap.xml',
  }
}
