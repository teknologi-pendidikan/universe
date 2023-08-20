import GlobalSiteContent from 'data/site.content.json'
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/about-us'].map((route) => ({
    url: `${GlobalSiteContent.globalContentData.url}/${route}`,
    lastModified: new Date().toISOString(),
  }))

  return [...routes]
}
