import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/', '/sso/', '/login/'],
    },
    sitemap: 'https://teknologipendidikan.or.id/sitemap.xml',
  }
}
