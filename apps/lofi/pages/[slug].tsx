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
    <div className="container mx-auto mb-8 mt-5 max-w-screen-xl px-4">
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
        className="container mx-auto mb-20 font-serif text-black"
      >
        <section
          id="article-title"
          className="mb-8 flex flex-col items-center justify-center"
        >
          <h1 className="mb-12 max-w-screen-lg pt-24 text-center text-3xl text-gray-900 lg:text-5xl">
            {frontmatter.title}
          </h1>
          <p className="max-w-screen-md text-center text-sm text-gray-500">
            {frontmatter.description}
          </p>
          <span className="max-w-screen-md pt-4 text-center text-sm text-gray-500">
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
            <Link
              href={`/authors/${frontmatter.author}`}
              className="hover:text-gray-700 hover:underline"
            >
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
          className="relative mx-auto mb-12 max-w-screen-md overflow-hidden"
        >
          <Image
            src={frontmatter.image || IMAGEPLACEHOLDER}
            alt={frontmatter.title}
            className="h-40 rounded-lg object-cover md:h-96"
            width={1280}
            height={720}
            loading="eager"
            quality={75}
          />
          <p className="pt-4 text-sm text-gray-500">{frontmatter.title}</p>
        </section>
        <section
          id="article-content"
          className="prose-full prose-xl px-5 text-gray-900 lg:px-48 lg:text-justify"
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
