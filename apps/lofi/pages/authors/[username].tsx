import TeamRedaksi from 'data/redaksi.json'
import fs from 'fs'
import matter from 'gray-matter'
import Link from 'next/link'
import { useRouter } from 'next/router'

type TeamRedaksi = {
  username: string
  name: string
  email: string
  role: string
}

export async function getStaticPaths() {
  const paths = TeamRedaksi.reporterlist.map((author) => ({
    params: {
      username: author.username,
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps() {
  const files = fs.readdirSync('_post')
  const posts = files.map((fileName) => {
    const slug = fileName.replace('.md', '')
    const readFile = fs.readFileSync(`_post/${fileName}`, 'utf-8')
    const { data: frontmatter } = matter(readFile)
    return {
      slug,
      frontmatter,
    }
  })
  return {
    props: {
      posts,
    },
  }
}

export default function Author({ posts }: any) {
  const router = useRouter()
  const { username } = router.query
  const author = TeamRedaksi.reporterlist.find(
    (author) => author.username === username,
  )
  const { name, role } = author as TeamRedaksi

  const filteredPosts = posts.filter(
    (post: any) => post.frontmatter.author === username,
  )

  return (
    <div className="container mx-auto mb-8 mt-24 max-w-screen-xl px-4">
      <div
        id={`${username}`}
        className="container mx-auto mb-20 font-serif text-black"
      >
        <section
          id="article-title"
          className="mb-8 flex flex-col items-center justify-center"
        >
          <h1 className="max-w-screen-lg text-center text-3xl text-gray-900 lg:text-5xl">
            {name}
          </h1>
          <p className="max-w-screen-md pt-4 text-center text-xl text-gray-500">
            {role}
          </p>
        </section>
        <section id="article-list">
          <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post: any) => (
              <li
                key={post.slug}
                className="mb-8 flex border-spacing-2 flex-col items-start justify-start rounded-md border border-gray-500 p-4"
              >
                <Link href={`/${post.slug}`}>
                  <h2 className="hover:text-brandblue-700 max-w-screen-lg text-xl text-gray-900 hover:underline lg:text-2xl">
                    {post.frontmatter.title}
                  </h2>
                </Link>
                <p className="pt-2 text-sm text-gray-500">
                  {post.frontmatter.category}
                </p>
                <p className="text-md line-clamp-4 max-w-screen-md pt-4 text-gray-800">
                  {post.frontmatter.description}
                </p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  )
}
