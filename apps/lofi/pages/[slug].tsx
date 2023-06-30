import fs from 'fs'
import matter from 'gray-matter'
import Image from 'next/image'
import IMAGEPLACEHOLDER from 'public/placeholder.png'
import ReactMarkdown from 'react-markdown'

const dateRegex = /([0-9]{4}-[0-9]{2}-[0-9]{2})-/

export async function getStaticPaths() {
  const files = fs.readdirSync('_post')
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace('.md', '').replace(dateRegex, ''),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }) {
  const fileName = fs.readFileSync(`_post/${slug}.md`, 'utf-8')
  const { data: frontmatter, content } = matter(fileName)
  return {
    props: {
      frontmatter,
      content,
    },
  }
}

export default function Artikel({ frontmatter, content }) {
  return (
    <div className="mx-auto container px-4 mb-8 mt-5 max-w-screen-xl">
      <article className="container mx-auto text-black mb-20 font-serif">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl lg:text-5xl text-gray-900 pt-24 mb-12 text-center max-w-screen-lg">
            {frontmatter.title}
          </h1>
          <p className="text-sm text-gray-500 text-center mb-12 max-w-screen-md">
            {frontmatter.description}
          </p>
        </div>

        <div className="overflow-hidden relative max-w-screen-md mx-auto mb-12">
          <Image
            src={frontmatter.image || IMAGEPLACEHOLDER}
            alt={frontmatter.title}
            className="h-40 md:h-96 object-cover rounded-lg"
            width={1280}
            height={720}
          />
          <p className="text-sm text-gray-500 pt-4">{frontmatter.title}</p>
        </div>
        <ReactMarkdown className="prose-full prose-xl text-gray-900 px-5 lg:px-48 text-justify">
          {content}
        </ReactMarkdown>
      </article>
    </div>
  )
}
