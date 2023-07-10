import WelcomeHero from 'components/common/WelcomeHero'
import SectionLayout from 'components/layout/CommonSectionLayout'
import ReactGoogleSlides from 'components/libs/WrapperGoogleSlides'
import Banner from 'components/organism/CommonBanner'
import {
  CommonCard,
  ThematicCard,
} from 'components/organism/CommonResourcesCard'
import slidesVideoData from 'data/slides.content.json'
import thematicdata from 'data/thematic.content.json'
import contentVideoData from 'data/video.content.json'
import Link from 'next/link'

export default function Page() {
  return (
    <main>
      <WelcomeHero />
      <SectionLayout
        id="thematic-resources"
        className="container mx-auto py-16"
        title="Thematic Resources"
        subtitle="Sumber belajar yang tersedia di EDTECH-ID"
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {thematicdata.thematiclist.map((thematic) => (
            <ThematicCard
              key={thematic.slug}
              title={thematic.title}
              author={thematic.author}
              description={thematic.description}
              date={thematic.date}
              image={`/${thematic.image}`}
              slug={thematic.slug}
            />
          ))}
        </div>
      </SectionLayout>
      <Banner
        title="Are you a teacher in a disadvantaged, frontier, and outermost area?"
        description="We have a special collection of learning materials for your students!"
        ctaLink="/thematic/outermost-area"
        ctaText="Explore the collection"
      />
      <SectionLayout
        id="lecture-videos"
        className="container mx-auto py-16"
        title="Lecture Videos"
        subtitle="Open Educational Lecture Videos, curated by EDTECH-ID"
      >
        <div className="flex flex-col items-start justify-start space-y-8">
          <div className="grid auto-cols-auto grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {contentVideoData.videolist.slice(0, 4).map((video) => (
              <CommonCard
                key={video.slug}
                slug={`${video.slug}`}
                title={video.title}
                author={video.author}
                image={video.url}
              />
            ))}
          </div>
          <Link
            href="/video"
            className="rounded-lg bg-gray-800 p-4 font-semibold text-white hover:bg-gray-900 hover:underline"
          >
            Watch more lecture videos
          </Link>
        </div>
      </SectionLayout>
      <SectionLayout
        id="lecture-decks"
        className="container mx-auto py-16"
        title="Lecture Slides & Decks"
        subtitle="Lecture Slides and Deck on OpenCourseWare"
      >
        <div className="flex flex-col items-start justify-start space-y-8">
          <div className="grid auto-cols-auto grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {slidesVideoData.slidesdeck.slice(0, 4).map((slides) => (
              <div className="aspect-video h-full w-full" key={slides.slug}>
                <ReactGoogleSlides
                  slidesLink={slides.url}
                  width="370"
                  height="100%"
                />
              </div>
            ))}
          </div>
          <Link
            href="/slides"
            className="rounded-lg bg-gray-800 p-4 font-semibold text-white hover:bg-gray-900 hover:underline"
          >
            Browse more slides decks
          </Link>
        </div>
      </SectionLayout>
    </main>
  )
}
