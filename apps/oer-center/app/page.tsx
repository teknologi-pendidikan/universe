import WelcomeHero from 'components/common/WelcomeHero'
import SectionLayout from 'components/layout/CommonSectionLayout'
import Banner from 'components/organism/CommonBanner'
import {
  CommonCard,
  ThematicCard,
} from 'components/organism/CommonResourcesCard'
import { randomUUID } from 'crypto'
import LearningContent from 'data/learning.content.json'
import ThematicContent from 'data/thematic.content.json'
import Script from 'next/script'
import { Course, ItemList, WithContext } from 'schema-dts'

export default function Page() {
  const videos = LearningContent.learningcontent.filter(
    (content) => content.contentType === 'video',
  )
  const slides = LearningContent.learningcontent.filter(
    (content) => content.contentType === 'slides',
  )
  const images = LearningContent.learningcontent.filter(
    (content) => content.contentType === 'image',
  )
  const text = LearningContent.learningcontent.filter(
    (content) => content.contentType === 'text',
  )

  const videosCourse = videos.map((video) => {
    const course: WithContext<Course> = {
      '@context': 'https://schema.org',
      '@type': 'Course',
      name: video.contentTitle,
      description: video.contentDescription,
      provider: {
        '@type': 'Organization',
        name: 'Teknologi Pendidikan ID',
      },
      url: `https://sumberbelajar.teknologipendidikan.sch.id/learning-content/${video.uuid}`,
      thumbnailUrl: video.contentUrl,
      dateCreated: video.contentUploadDate,
      inLanguage: 'id-ID',
      genre: 'video',
      isAccessibleForFree: true,
      license: 'https://creativecommons.org/licenses/by/4.0/',
      educationalUse: 'lecture',
      learningResourceType: 'video lecture',
      typicalAgeRange: '18',
      timeRequired: 'PT1H',
      courseCode: video.uuid,
    }
    return course
  })

  const slidesCourse = slides.map((slide) => {
    const course: WithContext<Course> = {
      '@context': 'https://schema.org',
      '@type': 'Course',
      name: slide.contentTitle,
      description: slide.contentDescription,
      provider: {
        '@type': 'Organization',
        name: 'Teknologi Pendidikan ID',
      },
      url: `https://sumberbelajar.teknologipendidikan.sch.id/learning-content/${slide.uuid}`,
      thumbnailUrl: slide.contentUrl,
      dateCreated: slide.contentUploadDate,
      inLanguage: 'id-ID',
      genre: 'slides',
      isAccessibleForFree: true,
      license: 'https://creativecommons.org/licenses/by/4.0/',
      educationalUse: 'lecture',
      learningResourceType: 'slides lecture',
      typicalAgeRange: '18',
      timeRequired: 'PT1H',
      courseCode: slide.uuid,
    }
    return course
  })

  const imagesCourse = images.map((image) => {
    const course: WithContext<Course> = {
      '@context': 'https://schema.org',
      '@type': 'Course',
      name: image.contentTitle,
      description: image.contentDescription,
      provider: {
        '@type': 'Organization',
        name: 'Teknologi Pendidikan ID',
      },
      url: `https://sumberbelajar.teknologipendidikan.sch.id/learning-content/${image.uuid}`,
      thumbnailUrl: image.contentUrl,
      dateCreated: image.contentUploadDate,
      inLanguage: 'id-ID',
      genre: 'image',
      isAccessibleForFree: true,
      license: 'https://creativecommons.org/licenses/by/4.0/',
      educationalUse: 'lecture',
      learningResourceType: 'image lecture',
      typicalAgeRange: '18',
      timeRequired: 'PT1H',
      courseCode: image.uuid,
    }
    return course
  })

  const textCourse = text.map((text) => {
    const course: WithContext<Course> = {
      '@context': 'https://schema.org',
      '@type': 'Course',
      name: text.contentTitle,
      description: text.contentDescription,
      provider: {
        '@type': 'Organization',
        name: 'Teknologi Pendidikan ID',
      },
      url: `https://sumberbelajar.teknologipendidikan.sch.id/learning-content/${text.uuid}`,
      thumbnailUrl: text.contentUrl,
      dateCreated: text.contentUploadDate,
      inLanguage: 'id-ID',
      genre: 'text',
      isAccessibleForFree: true,
      license: 'https://creativecommons.org/licenses/by/4.0/',
      educationalUse: 'lecture',
      learningResourceType: 'text lecture',
      typicalAgeRange: '18',
      timeRequired: 'PT1H',
      courseCode: text.uuid,
    }
    return course
  })

  const jsonLd: WithContext<ItemList> = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: [
      ...videosCourse,
      ...slidesCourse,
      ...imagesCourse,
      ...textCourse,
    ],
    numberOfItems: videosCourse.length,
    itemListOrder: 'ItemListOrderDescending',
    name: 'Lecture Videos',
    description: 'Open Educational Lecture Videos',
  }

  return (
    <main id="main-content" tabIndex={-1} className="focus:outline-1">
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        key={`json-ld-${jsonLd['@type']}`}
        id={`json-ld-${jsonLd['@type']}-${randomUUID()}`}
      />
      <WelcomeHero />
      <SectionLayout
        title="Thematic Collections"
        id="thematic-content"
        subtitle="Open Educational Resources with Thematically Category"
        className="container mx-auto px-10 py-6 lg:px-0"
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
        ctaLink="/thematic/45bc7885-93af-43ee-b935-63de353e7d40"
        ctaText="Explore the collection"
        className="bg-brandblue-600 text-white"
      />
      <SectionLayout
        title="Lecture Videos"
        id="videos-content"
        subtitle="Open Educational Lecture Videos"
        className="container mx-auto px-10 py-6 lg:px-0"
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
        className="container mx-auto px-10 py-6 lg:px-0"
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
        className="container mx-auto px-10 py-6 lg:px-0"
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
        className="container mx-auto px-10 py-6 lg:px-0"
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
