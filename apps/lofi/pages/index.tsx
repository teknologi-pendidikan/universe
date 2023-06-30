import ArticleCard from 'components/ArticleCard'
import FrontHeader from 'components/FrontHeader'
import RunningEvents from 'components/RunningEvents'
import SectionInformationReference from 'components/SectionInformationReference'
import fs from 'fs'
import matter from 'gray-matter'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export async function getStaticProps() {
  // date regex yyyy-mm-dd
  const dateRegex = /([0-9]{4}-[0-9]{2}-[0-9]{2})-/
  const files = fs.readdirSync('_post')
  const posts = files.map((fileName) => {
    const slug = fileName.replace('.md', '').replace(dateRegex, '')
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

export default function Home({ posts }) {
  const sortedPosts = posts.sort(
    (a, b) =>
      Number(new Date(b.frontmatter.date)) -
      Number(new Date(a.frontmatter.date)),
  )
  return (
    <main className={`relative ${inter.className} text-brandblue-700`}>
      <Head>
        <title>LOFI TEP - Surat Kabar Mahasiswa Teknologi Pendidikan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FrontHeader />
      <SectionInformationReference>
        {posts.slice(0, 3).map(({ slug, frontmatter }) => (
          <ArticleCard key={slug} slug={slug} frontmatter={frontmatter} />
        ))}
      </SectionInformationReference>
      <RunningEvents />
      <section className="mx-auto container px-4 mb-8 mt-5 max-w-screen-xl">
        <div className="flex flex-col space-y-4 justify-start items-start">
          <h1 className="text-5xl font-bold text-black pb-2">
            Artikel Terbaru
          </h1>
          <div className="grid grid-rows-3 grid-flow-col gap-x-6 w-full">
            {sortedPosts[0] && (
              <Link
                className="row-span-3 flex flex-col"
                href={sortedPosts[0].slug}
              >
                <Image
                  src={sortedPosts[0].frontmatter.image}
                  alt={sortedPosts[0].frontmatter.title}
                  width={1280}
                  height={720}
                  className="w-full rounded-lg object-cover h-[480px] object-right-top"
                />
                <h2 className="text-2xl font-bold text-black pb-2 pt-4 hover:underline">
                  {sortedPosts[0].frontmatter.title}
                </h2>
                <p className="text-black">
                  {sortedPosts[0].frontmatter.description}
                </p>
              </Link>
            )}
            {sortedPosts.slice(2, 5).map(({ slug, frontmatter }) => (
              <Link
                key={slug}
                className="max-w-sm col-span-2 flex flex-col h-full w-full border-spacing-4 border-gray-200 border-b-2 pb-4"
                href={slug}
              >
                <div className="flex flex-row pb-2">
                  <h2 className="text-md font-bold text-black pb-2 pt-4 hover:underline">
                    {frontmatter.title.slice(0, 75)}
                  </h2>
                  <Image
                    src={frontmatter.image}
                    alt={frontmatter.title}
                    width={1280}
                    height={720}
                    className="h-16 w-16 object-cover rounded-md object-top"
                  />
                </div>
                <p className="text-black h-full break-words">
                  {/* pull date and convert to Indonesian Locale DD/MM/YYYY */}
                  {new Date(frontmatter.date).toLocaleDateString('id-ID', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                  {' - '}
                  {frontmatter.description.slice(0, 130)}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
