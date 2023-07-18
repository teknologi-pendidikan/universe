import { MetadataRoute } from 'next'
const URL = 'https://teknologipendidikan.or.id'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/about-us'].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
  }))

  return [...routes]
}
