import ArticleCard from 'components/ArticleCard'
import FrontHeader from 'components/FrontHeader'
import RunningEvents from 'components/RunningEvents'
import SectionInformationReference from 'components/SectionInformationReference'
import StructuredData from 'components/StructuredData'
import ListOfCategory from 'data/category.json'
import fs from 'fs'
import matter from 'gray-matter'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Script from 'next/script'

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
      category: string
    }
  }[]
}

export default function Home({ posts }: Props) {
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
  const postCategoryReferensi = sortedPosts.filter(
    (post) => post.frontmatter.category === 'referensi',
  )

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
        className="relative hidden h-screen outline outline-1 outline-red-400"
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
          className="bg-brandblue-800 absolute bottom-0 w-full py-2"
        >
          <h1 className="text-center text-white">
            Majalah dan Surat Kabar Mahasiswa Teknologi Pendidikan
          </h1>
        </div>
      </section>
      <FrontHeader />
      <SectionInformationReference>
        {postCategoryReferensi.slice(0, 3).map((post) => (
          <ArticleCard
            key={post.slug}
            slug={post.slug}
            frontmatter={post.frontmatter}
          />
        ))}
      </SectionInformationReference>
      <section
        id="release-category"
        className="container mx-auto mb-8 mt-5 max-w-screen-xl px-4"
      >
        <div className="flex flex-col items-start justify-start space-y-4">
          <h2 className="pb-2 text-xl font-bold text-black">
            Rubrik & Kategori Rilisan
          </h2>
          <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-5">
            {ListOfCategory.map((category) => (
              <Link
                key={category.CategoryId}
                href={`/category/${category.CategoryId}`}
                className="border-black-1 hover:bg-brandblue-800 text-brandblue-800 flex flex-col items-start justify-start space-y-2 rounded-lg border p-4 hover:text-white"
              >
                <h3 className="text-xl font-semibold hover:underline">
                  {category.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <RunningEvents />
      <ins
        className="adsbygoogle block"
        data-ad-client="ca-pub-7675866095389123"
        data-ad-slot="3330495757"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      <Script id="adsgoogle-banner">
        (adsbygoogle = window.adsbygoogle || []).push({});
      </Script>
      <section
        id="new-release"
        className="container mx-auto mb-8 mt-5 max-w-screen-xl px-4"
      >
        <div className="flex flex-col items-start justify-start space-y-4">
          <h2 className="pb-2 text-5xl font-bold text-black">
            Artikel Terbaru
          </h2>
          <div className="grid w-full grid-cols-1 lg:grid-flow-col lg:grid-rows-3 lg:gap-x-6">
            {sortedPosts[0] && (
              <Link
                className="flex flex-col border-b-gray-200 lg:row-span-3 lg:border-0"
                href={sortedPosts[0].slug}
              >
                <Image
                  src={sortedPosts[0].frontmatter.image}
                  alt={sortedPosts[0].frontmatter.title}
                  width={1280}
                  height={720}
                  className="h-36 w-full rounded-lg object-cover object-right-top lg:h-[480px]"
                />
                <h3 className="pb-2 pt-4 text-2xl font-bold text-black hover:underline">
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
                className="border-spacing-4 col-span-2 flex h-full w-full flex-col border-b-2 border-gray-200 pb-4 pt-4 lg:max-w-sm lg:pt-0"
                href={slug}
              >
                <div className="flex flex-col-reverse lg:flex-row">
                  <h3 className="text-md pb-2 pt-4 font-bold text-black hover:underline">
                    {frontmatter.title.slice(0, 75)}
                  </h3>
                  <Image
                    src={frontmatter.image}
                    alt={frontmatter.title}
                    width={1280}
                    height={720}
                    className="h-36 rounded-md  object-cover object-top lg:h-16 lg:w-16"
                  />
                </div>
                <p className="line-clamp-3 hidden h-full text-black lg:block">
                  {/* pull date and convert to Indonesian Locale DD/MM/YYYY */}
                  {new Date(frontmatter.date).toLocaleDateString('id-ID', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                  {' - '}
                  {frontmatter.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
