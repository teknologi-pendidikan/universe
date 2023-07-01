import fs from 'fs'
import matter from 'gray-matter'

// create jsdoc based on types
/**
 * @typedef {Object} PostData
 * @property {string} slug
 * @property {string} date
 * @property {string} title
 * @property {string} subtitle
 * @property {string} description
 * @property {string} image
 * @property {string} category
 * @property {string} author
 * @property {string} content
 */

// add types
export type PostData = {
  slug: string
  date: string
  title: string
  subtitle: string
  description: string
  image: string
  category: string
  author: string
}

export function getPostData() {
  const dateRegex = /([0-9]{4}-[0-9]{2}-[0-9]{2})-/
  const files = fs.readdirSync('_post')
  const POSTLIST = []
  const posts = files.map((fileName) => {
    const slug = fileName.replace('.md', '').replace(dateRegex, '')
    const readFile = fs.readFileSync(`_post/${fileName}`, 'utf-8')
    const { data: frontmatter } = matter(readFile)
    const date = frontmatter.date
    const title = frontmatter.title
    const subtitle = frontmatter.subtitle
    const description = frontmatter.description
    const image = frontmatter.image
    const author = frontmatter.author
    const category = frontmatter.category

    POSTLIST.push({
      slug,
      date,
      title,
      subtitle,
      description,
      image,
      author,
      category,
    })
  })
  return {
    POSTLIST,
  }
}
