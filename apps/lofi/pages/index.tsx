import ArticleCard from 'components/ArticleCard'
import FrontHeader from 'components/FrontHeader'
import RunningEvents from 'components/RunningEvents'
import SectionInformationReference from 'components/SectionInformationReference'
import StructuredData from 'components/StructuredData'
import fs from 'fs'
import matter from 'gray-matter'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

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

type Props = {
  posts: {
    slug: string
    frontmatter: {
      title: string
      description: string
      image: string
      date: string
      author: string
    }
  }[]
}

export default function Home({ posts } : Props) {
  const sortedPosts = posts.sort(
    (a, b) =>
      Number(new Date(b.frontmatter.date)) -
      Number(new Date(a.frontmatter.date)),
  )
  const router = useRouter()
  const currentUrl = router.asPath

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Redaksi EDTECH-ID - Surat Kabar Teknologi Pendidikan',
    legalName: 'Komunitas Inovasi Teknologi Pembelajaran',
    url: 'http://lofi.teknologipendidikan.or.id',
    logo: 'http://lofi.teknologipendidikan.or.id/logo-lofi.svg',
    foundingDate: '2021',
    founders: [
      {
        '@type': 'Person',
        name: 'Rengga Prakoso Nugroho',
      },
      {
        '@type': 'Person',
        name: 'Chandrina Damayanti Setiasih',
      },
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Universitas Negeri Malang',
      addressLocality: 'Malang',
      addressRegion: 'Jawa Timur',
      postalCode: '65145',
      addressCountry: 'ID',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Tim Redaksi EDTECH-ID, Subdit Komunikasi dan Kerjasama',
      email: 'komunikasi@teknologipendidikan.or.id',
    },
    sameAs: [
      'http://www.facebook.com/teknologipendidikan.or.id',
      'https://www.youtube.com/@teknologi-pendidikan',
      'https://linkedin.com/company/teknologi-pendidikan',
      'https://www.instagram.com/teknologipendidikan.or.id',
      'https://twitter.com/haloedtechid',
      'https://teknologipendidikan.or.id',
    ],
  }

  return (
    <main className={`relative ${inter.className} text-brandblue-700`}>
      <Head>
        <title key="title">
          Redaksi EDTECH-ID - Surat Kabar Teknologi Pendidikan
        </title>
        <meta
          key="desc"
          name="description"
          content="Redaksi EDTECH-ID - Surat Kabar Teknologi Pendidikan (dulu dikenal dengan nama Majalah LOFI TEP)"
        />
        <meta
          key="ogtitle"
          property="og:title"
          content="Redaksi EDTECH-ID - Surat Kabar Teknologi Pendidikan"
        />
        <meta
          key="ogdesc"
          property="og:description"
          content="Redaksi EDTECH-ID - Surat Kabar Teknologi Pendidikan (dulu dikenal dengan nama Majalah LOFI TEP)"
        />
        <meta
          key="ogimage"
          property="og:image"
          content="https://lofi.teknologipendidikan.or.id/opengraph-main.png"
        />
        <meta
          key="ogimagealt"
          property="og:image:alt"
          content="Logo Redaksi EDTECH-ID dan Tagline Inovatif.Kreatif.Komunikatif."
        />
        <meta
          key="twttitle"
          name="twitter:title"
          content="Redaksi EDTECH-ID - Surat Kabar Teknologi Pendidikan"
        />
        <meta
          key="twtdesc"
          name="twitter:description"
          content="Redaksi EDTECH-ID - Surat Kabar Teknologi Pendidikan (dulu dikenal dengan nama Majalah LOFI TEP)"
        />
        <meta
          key="twturl"
          name="twitter:url"
          content={`https://lofi.teknologipendidikan.or.id${currentUrl}?utm_source=twitter&utm_medium=social`}
        />
        <meta
          key="twtimage"
          name="twitter:image:src"
          content="https://lofi.teknologipendidikan.or.id/opengraph-main.png"
        />
        <meta
          key="twtimagealt"
          name="twitter:image:alt"
          content="Logo Redaksi EDTECH-ID dan Tagline Inovatif.Kreatif.Komunikatif."
        />
        <meta key="twtcreator" name="twitter:creator" content="@haloedtechid" />
        <meta key="twtsite" name="twitter:site" content="@haloedtechid" />
      </Head>
      <StructuredData data={structuredData} />
      <section
        id="hero"
        className="hidden relative h-screen outline-1 outline-red-400 outline"
      >
        <Image
          src="/opengraph-main.png"
          width={1920}
          height={1080}
          alt="Hero Image"
          className="max-h-screen object-cover object-center"
        />
        <div
          id="arrowdown"
          className="py-2 w-full bg-brandblue-800 absolute bottom-0"
        >
          <h1 className="text-center text-white">
            Majalah dan Surat Kabar Mahasiswa Teknologi Pendidikan
          </h1>
        </div>
      </section>
      <FrontHeader />
      <SectionInformationReference>
        {posts.slice(0, 3).map(({ slug, frontmatter }) => (
          <ArticleCard key={slug} slug={slug} frontmatter={frontmatter} />
        ))}
      </SectionInformationReference>
      <RunningEvents />
      <section className="mx-auto container px-4 mb-8 mt-5 max-w-screen-xl">
        <div className="flex flex-col space-y-4 justify-start items-start">
          <h2 className="text-5xl font-bold text-black pb-2">
            Artikel Terbaru
          </h2>
          <div className="grid grid-cols-1 lg:grid-rows-3 lg:grid-flow-col lg:gap-x-6 w-full">
            {sortedPosts[0] && (
              <Link
                className="lg:row-span-3 flex flex-col border-b-gray-200 lg:border-0"
                href={sortedPosts[0].slug}
              >
                <Image
                  src={sortedPosts[0].frontmatter.image}
                  alt={sortedPosts[0].frontmatter.title}
                  width={1280}
                  height={720}
                  className="w-full rounded-lg object-cover h-36 lg:h-[480px] object-right-top"
                />
                <h3 className="text-2xl font-bold text-black pb-2 pt-4 hover:underline">
                  {sortedPosts[0].frontmatter.title}
                </h3>
                <p className="text-black">
                  {sortedPosts[0].frontmatter.description}
                </p>
              </Link>
            )}
            {sortedPosts.slice(2, 5).map(({ slug, frontmatter }) => (
              <Link
                key={slug}
                className="lg:max-w-sm col-span-2 flex flex-col h-full w-full border-spacing-4 border-gray-200 border-b-2 pb-4 pt-4 lg:pt-0"
                href={slug}
              >
                <div className="flex flex-col-reverse lg:flex-row">
                  <h3 className="text-md font-bold text-black pb-2 pt-4 hover:underline">
                    {frontmatter.title.slice(0, 75)}
                  </h3>
                  <Image
                    src={frontmatter.image}
                    alt={frontmatter.title}
                    width={1280}
                    height={720}
                    className="lg:h-16 lg:w-16  h-36 object-cover rounded-md object-top"
                  />
                </div>
                <p className="hidden lg:block text-black h-full break-words">
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
