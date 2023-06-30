import fs from 'fs'
import matter from 'gray-matter'

export function getPostData() {
  const dateRegex = /([0-9]{4}-[0-9]{2}-[0-9]{2})-/
  const files = fs.readdirSync('_post')
  const posts = files.map((fileName) => {
    const slug = fileName.replace('.md', '').replace(dateRegex, '')
    const readFile = fs.readFileSync(`_post/${fileName}`, 'utf-8')
    const { data: frontmatter } = matter(readFile)
    const date = frontmatter.date
    const title = frontmatter.title
    const subtitle = frontmatter.subtitle
    const description = frontmatter.description
    // const image = frontmatter.image
    // const tags = frontmatter.tags
    const author = frontmatter.author
    const category = frontmatter.category
    return {
      slug,
      title,
      subtitle,
      description,
    //   image,
    //   tags,
      author,
      category,
      date,
    }
  })

  return {
    props: {
      posts,
    },
  }
}
