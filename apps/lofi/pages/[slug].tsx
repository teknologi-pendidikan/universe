/* eslint-disable no-unused-vars */
import SEO from 'components/SEO'
import StructuredData from 'components/StructuredData'
import TeamRedaksi from 'data/redaksi.json'
import fs from 'fs'
import matter from 'gray-matter'
import Image from 'next/image'
import Link from 'next/link'
import IMAGEPLACEHOLDER from 'public/opengraph-main.png'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

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

type Params = {
  slug: string
}

type TeamRedaksi = {
  username: string
  name: string
  email: string
  role: string
}

export async function getStaticProps({ params: { slug } }: { params: Params }) {
  const fileName = fs.readFileSync(`_post/${slug}.md`, 'utf-8')
  const { data: frontmatter, content } = matter(fileName)
  return {
    props: {
      frontmatter,
      content,
      slug,
    },
  }
}

type Props = {
  frontmatter: {
    title: string
    description: string
    image: string
    date: string
    author: string
  }
  content: string
  slug: string
}

export default function Artikel({ frontmatter, content, slug }: Props) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: frontmatter.title,
    description: frontmatter.description,
    image: [frontmatter.image],
    datePublished: frontmatter.date,
    dateModified: frontmatter.date,
    author: [
      {
        '@type': 'Person',
        name: frontmatter.author,
        url: `https://lofi.teknologipendidikan.or.id/${frontmatter.author}`,
      },
    ],
    publisher: {
      '@type': 'Organization',
      name: 'Redaksi EDTECH-ID - Surat Kabar Teknologi Pendidikan',
      legalName: 'Komunitas Inovasi Teknologi Pembelajaran',
      url: 'http://lofi.teknologipendidikan.or.id',
    },
    isAccessibleForFree: 'true',
    articleBody: content,
  }
  return (
    <div className="mx-auto container px-4 mb-8 mt-5 max-w-screen-xl">
      <SEO
        title={`${frontmatter.title} - Redaksi EDTECH-ID`}
        description={frontmatter.description}
        ogUrl={`https://lofi.teknologipendidikan.or.id/${slug}`}
        ogImgUrl={`https://lofi.teknologipendidikan.or.id/${frontmatter.image}`}
        ogImgAlt={frontmatter.title}
        ogType="article"
      />
      <StructuredData data={structuredData} />
      <article
        id={slug}
        className="container mx-auto text-black mb-20 font-serif"
      >
        <section
          id="article-title"
          className="flex flex-col items-center justify-center mb-8"
        >
          <h1 className="text-3xl lg:text-5xl text-gray-900 pt-24 mb-12 text-center max-w-screen-lg">
            {frontmatter.title}
          </h1>
          <p className="text-sm text-gray-500 text-center max-w-screen-md">
            {frontmatter.description}
          </p>
          <span className="text-sm text-gray-500 text-center max-w-screen-md pt-4">
            <time dateTime={frontmatter.date}>
              {
                // format date to Indonesian
                new Date(frontmatter.date).toLocaleDateString('id-ID', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })
              }
            </time>{' '}
            -{' '}
            <Link href={`/authors/${frontmatter.author}`} className='hover:underline hover:text-gray-700'>
              {
                TeamRedaksi.reporterlist.find(
                  (author: TeamRedaksi) =>
                    author.username === frontmatter.author,
                )?.name
              }
            </Link>
          </span>
        </section>

        <section
          id="article-heroimage"
          className="overflow-hidden relative max-w-screen-md mx-auto mb-12"
        >
          <Image
            src={frontmatter.image || IMAGEPLACEHOLDER}
            alt={frontmatter.title}
            className="h-40 md:h-96 object-cover rounded-lg"
            width={1280}
            height={720}
            loading="eager"
            quality={75}
          />
          <p className="text-sm text-gray-500 pt-4">{frontmatter.title}</p>
        </section>
        <section
          id="article-content"
          className="prose-full prose-xl text-gray-900 px-5 lg:px-48 lg:text-justify"
        >
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              // eslint-disable-next-line no-unused-vars
              img: ({ node, ...props }) => (
                // @ts-ignore
                <Image
                  {...props}
                  alt={`${props.alt}`}
                  className="rounded-lg"
                  width={1280}
                  height={720}
                  loading="lazy"
                  quality={75}
                />
              ),
              // eslint-disable-next-line no-unused-vars
              a: ({ node, ...props }) => (
                <a {...props} className="text-blue-500 hover:underline" />
              ),
              // eslint-disable-next-line no-unused-vars
              table: ({ node, ...props }) => (
                <table {...props} className="table-auto" />
              ),
            }}
          >
            {content}
          </ReactMarkdown>
        </section>
      </article>
    </div>
  )
}
