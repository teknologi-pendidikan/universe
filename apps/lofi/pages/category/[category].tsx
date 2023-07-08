import FrontHeader from 'components/FrontHeader'
import ListOfCategory from 'data/category.json'
import fs from 'fs'
import matter from 'gray-matter'
import Image from 'next/image'
import Link from 'next/link'

type ListOfCategoryType = {
  CategoryId: string
  title: string
}

export async function getStaticPaths() {
  const paths = ListOfCategory.map((category) => ({
    params: {
      category: category.CategoryId,
    },
  }))
  return {
    paths,
    fallback: false,
  }
}

type Params = {
  params: {
    category: string
  }
}
export async function getStaticProps({ params }: Params) {
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

  const categoryPosts = posts.filter(
    (post) => post.frontmatter.category === params.category,
  )

  const categoryData = ListOfCategory.find(
    (category) => category.CategoryId === params.category,
  )

  return {
    props: {
      categoryData,
      categoryPosts,
    },
  }
}

type CategoryPostViewType = {
  categoryPosts: {
    slug: string
    frontmatter: {
      title: string
      date: string
      author: string
      description: string
      image: string
      category: string
    }
  }[]
  categoryData: ListOfCategoryType
}

export default function CategoryPostView({
  categoryPosts,
  categoryData,
}: CategoryPostViewType) {
  return (
    <main className={`relative`}>
      <FrontHeader title={`Rilisan ${categoryData.title}`} />
      <section className="container mx-auto my-10 max-w-screen-xl px-4 font-serif">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {categoryPosts.map((post: any) => (
            <div
              key={post.slug}
              className="border-black-1 flex flex-col items-start justify-start space-y-2 rounded-lg border"
            >
              {post.frontmatter.image ? (
                <Image
                  src={post.frontmatter.image}
                  alt={post.frontmatter.title}
                  width={1280}
                  height={720}
                  className="h-40 w-full rounded-t-lg object-cover object-right-top"
                />
              ) : (
                <div className="h-40 w-full rounded-t-lg bg-gray-300" />
              )}
              <div className="w-full px-4 pb-4 pt-2">
                <Link href={`/${post.slug}`}>
                  <h2 className="text-2xl text-black hover:underline">
                    {post.frontmatter.title.slice(0, 80)}
                  </h2>
                </Link>
                <p className="line-clamp-3 pt-2 text-sm text-gray-800">
                  {post.frontmatter.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
