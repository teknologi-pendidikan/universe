import fs from 'fs'
import matter from 'gray-matter'
import { MetadataRoute } from 'next'

const URL = 'https://lofi.teknologipendidikan.or.id'

function getPostData() {
  const files = fs.readdirSync('_post')
  const posts = files.map((filename) => {
    const slug = filename.replace('.md', '')
    const markdownWithMeta = fs.readFileSync(`_post/${filename}`, 'utf-8')
    const { data: frontmatter } = matter(markdownWithMeta)
    return { frontmatter, slug }
  })
  return posts
}

export default function sitemap(): MetadataRoute.Sitemap {
  // News Article
  const posts = getPostData()
  const routesNews = posts.map((post) => ({
    url: `${URL}/${post.slug}`,
    lastModified: new Date().toISOString(),
  }))

  // Static pages
  const routes = [
    '',
    '/kirim-artikel',
    '/redaksi',
    '/authors/chandrina',
    '/authors/vzrenggamani',
  ].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
  }))

  return [...routes, ...routesNews]
}
