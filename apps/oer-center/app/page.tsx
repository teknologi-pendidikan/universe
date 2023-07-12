import WelcomeHero from 'components/common/WelcomeHero'
import SectionLayout from 'components/layout/CommonSectionLayout'
import Banner from 'components/organism/CommonBanner'
import { CommonCard, ThematicCard } from 'components/organism/CommonResourcesCard'
import LearningContent from 'data/learning.content.json'
import ThematicContent from 'data/thematic.content.json'

export default function Page() {
  const videos = LearningContent.learningcontent.filter((content) => content.contentType === 'video')
  const slides = LearningContent.learningcontent.filter((content) => content.contentType === 'slides')
  const images = LearningContent.learningcontent.filter((content) => content.contentType === 'image')
  const text = LearningContent.learningcontent.filter((content) => content.contentType === 'text')
  return (
    <main>
      <WelcomeHero />
      <SectionLayout
        title="Thematic Collections"
        id="thematic-content"
        subtitle="Open Educational Resources with Thematically Category"
        className="container mx-auto p-12"
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {ThematicContent.thematiclist.map((thematic) => (
            <ThematicCard
              key={thematic.uuid}
              title={thematic.thematicTitle}
              image={thematic.thematicThumbnail}
              slug={`${thematic.uuid}`}
              description={thematic.thematicDescription}
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
        title="Lecture Videos"
        id="videos-content"
        subtitle="Open Educational Lecture Videos"
        className="container mx-auto pt-12"
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {videos.slice(0, 3).map((video) => (
            <CommonCard
              key={video.uuid}
              title={video.contentTitle}
              image={video.contentUrl}
              slug={`/learning-content/${video.uuid}`}
              author={video.contentAuthor}
              type="video"
            />
          ))}
        </div>
      </SectionLayout>
      <SectionLayout
        title="Lecture Slides / Decks"
        id="slides-content"
        subtitle="Open Educational Lecture Slides"
        className="container mx-auto pt-12"
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {slides.slice(0, 3).map((slide) => (
            <CommonCard
              key={slide.uuid}
              title={slide.contentTitle}
              image={slide.contentUrl}
              slug={`/learning-content/${slide.uuid}`}
              author={slide.contentAuthor}
              type="slides"
            />
          ))}
        </div>
      </SectionLayout>
      <SectionLayout
        title="Lecture Images"
        id="images-content"
        subtitle="Open Educational Lecture Images"
        className="container mx-auto pt-12"
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {images.slice(0, 3).map((image) => (
            <CommonCard
              key={image.uuid}
              title={image.contentTitle}
              image={image.contentUrl}
              slug={`/learning-content/${image.uuid}`}
              author={image.contentAuthor}
              type="image"
            />
          ))}
        </div>
      </SectionLayout>
      <SectionLayout
        title="Lecture Notes"
        id="text-content"
        subtitle="Open Educational Lecture Text"
        className="container mx-auto pt-12"
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {text.slice(0, 3).map((text) => (
            <CommonCard
              key={text.uuid}
              title={text.contentTitle}
              image={text.contentUrl}
              slug={`/learning-content/${text.uuid}`}
              author={text.contentAuthor}
              type="text"
            />
          ))}
        </div>
      </SectionLayout>
    </main>
  )
}
