import AuthorData from 'data/author.json'
import fs from 'fs'
import matter from 'gray-matter'
import Link from 'next/link'
import { useRouter } from 'next/router'

type AuthorData = {
  username: string
  name: string
  email: string
  role: string
}

type Params = {
  params: {
    username: string
  }
}

export async function getStaticPaths() {
  const paths = AuthorData.map((author) => ({
    params: {
      username: author.username,
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { username } }: Params) {
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
  const author = AuthorData.find((author) => author.username === username)
  const { name, email, role } = author as AuthorData

  const filteredPosts = posts.filter(
    (post: any) => post.frontmatter.author === username,
  )

  return (
    <div className="mx-auto container px-4 mb-8 mt-24 max-w-screen-xl">
      <div
        id={`${username}`}
        className="container mx-auto text-black mb-20 font-serif"
      >
        <section
          id="article-title"
          className="flex flex-col items-center justify-center mb-8"
        >
          <h1 className="text-3xl lg:text-5xl text-gray-900 text-center max-w-screen-lg">
            {name}
          </h1>
          <p className="text-xl text-gray-500 text-center pt-4 max-w-screen-md">
            {role}
          </p>
        </section>
        <section id="article-list">
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredPosts.map((post: any) => (
              <li
                key={post.slug}
                className="flex flex-col items-start justify-start mb-8 border-spacing-2 border rounded-md p-4 border-gray-500"
              >
                <Link href={`/${post.slug}`}>
                  <h2 className="text-xl lg:text-2xl text-gray-900 max-w-screen-lg hover:underline hover:text-brandblue-700">
                    {post.frontmatter.title}
                  </h2>
                </Link>
                <p className="text-sm text-gray-500 pt-2">
                  {post.frontmatter.category}
                </p>
                <p className="text-md text-gray-800 pt-4 max-w-screen-md line-clamp-4">
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
