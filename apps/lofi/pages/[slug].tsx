import SEO from 'components/SEO'
import StructuredData from 'components/StructuredData'
import fs from 'fs'
import matter from 'gray-matter'
import Image from 'next/image'
import IMAGEPLACEHOLDER from 'public/opengraph-main.png'
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
      slug,
    },
  }
}

export default function Artikel({ frontmatter, content, slug }) {
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
        ogType='article'
      />
      <StructuredData data={structuredData} />
      <article
        id={slug}
        className="container mx-auto text-black mb-20 font-serif"
      >
        <section
          id="article-title"
          className="flex flex-col items-center justify-center"
        >
          <h1 className="text-3xl lg:text-5xl text-gray-900 pt-24 mb-12 text-center max-w-screen-lg">
            {frontmatter.title}
          </h1>
          <p className="text-sm text-gray-500 text-center mb-12 max-w-screen-md">
            {frontmatter.description}
          </p>
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
            loading='eager'
            quality={75}
          />
          <p className="text-sm text-gray-500 pt-4">{frontmatter.title}</p>
        </section>
        <section
          id="article-content"
          className="prose-full prose-xl text-gray-900 px-5 lg:px-48 lg:text-justify"
        >
          <ReactMarkdown>{content}</ReactMarkdown>
        </section>
      </article>
    </div>
  )
}
