import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/learning-content', '/contributors', '/support-us', '/policy', '/guidelines', '/about'].map(
    (route) => ({
      url: `https://sumberbelajar.teknologipendidikan.sch.id${route}`,
      lastModified: new Date().toISOString(),
    }),
  )

  return [...routes]
}
