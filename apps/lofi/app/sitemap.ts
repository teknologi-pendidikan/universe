
const URL = 'https://lofi.teknologipendidikan.or.id'

export default async function sitemap() {
  const routes = ['', '/portfolio', '/blog'].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
  }))

  return [...routes]
}
