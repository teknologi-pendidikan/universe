import SectionLayout from 'components/layout/CommonSectionLayout'
import LayoutThematicContent from 'components/layout/PageThematicLayout'
import { CommonCard } from 'components/organism/CommonResourcesCard'
import LearningContentData from 'data/learning.content.json'
import { getAllThematicContent, getThematicContent } from 'lib/fetchThematicContent'
import {
  LearningContentProperties,
  ThematicLearningContentPageViewProps,
  ThematicLearningContentProperties,
} from 'types/global'

export const dynamicParams = false

export default async function Page({ params }: ThematicLearningContentPageViewProps) {
  const { uuid, thematicTitle, thematicDescription, thematicLearningContents } = (await getThematicContent(
    params.uuid,
  )) as any as ThematicLearningContentProperties

  // iterate through all learning contents and find the ones that are videos that match the thematic learning content
  // This code gets all video learning content for a specific course.
  // const video: any = []
  // LearningContentData.learningcontent.forEach((learningContent) => {
  //   if (learningContent.contentType === 'video') {
  //     thematicLearningContents.forEach((thematicLearningContent) => {
  //       if (thematicLearningContent === learningContent.uuid) {
  //         video.push(learningContent)
  //       }
  //     })
  //   }
  // })

  // filter learning contents by thematic learning contents
  const getThematicLearningContents = (learningContents: any, thematicLearningContents: any) => {
    return learningContents.filter((learningContent: any) => {
      return thematicLearningContents.includes(learningContent.uuid)
    })
  }

  // filter learning contents by video content type
  const video = getThematicLearningContents(LearningContentData.learningcontent, thematicLearningContents).filter(
    (learningContent: any) => {
      return learningContent.contentType === 'video'
    },
  )
  // filter learning contents by slide content type
  const images = getThematicLearningContents(LearningContentData.learningcontent, thematicLearningContents).filter(
    (learningContent: any) => {
      return learningContent.contentType === 'image'
    },
  )

  // filter learning contents by slide content type
  const slides = getThematicLearningContents(LearningContentData.learningcontent, thematicLearningContents).filter(
    (learningContent: any) => {
      return learningContent.contentType === 'slides'
    },
  )

  // filter learning contents by text content type
  const text = getThematicLearningContents(LearningContentData.learningcontent, thematicLearningContents).filter(
    (learningContent: any) => {
      return learningContent.contentType === 'text'
    },
  )

  return (
    <main>
      <LayoutThematicContent
        id={uuid}
        title={thematicTitle}
        subtitle={thematicDescription}
        className="container mx-auto pt-12"
      >
        <SectionLayout
          title="Lecture Videos"
          id="videos-content"
          subtitle="Open Educational Lecture Videos"
          className="container mx-auto pt-12"
        >
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {video.slice(0, 3).map((video: LearningContentProperties) => (
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
          title="Lecture Images"
          id="images-content"
          subtitle="Open Educational Lecture Images"
          className="container mx-auto pt-12"
        >
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {images.slice(0, 3).map((image: LearningContentProperties) => (
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
          title="Lecture Slides / Decks"
          id="slides-content"
          subtitle="Open Educational Lecture Slides"
          className="container mx-auto pt-12"
        >
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {slides.slice(0, 3).map((slide: LearningContentProperties) => (
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
          title="Lecture Notes"
          id="text-content"
          subtitle="Open Educational Lecture Text"
          className="container mx-auto pt-12"
        >
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {text.slice(0, 3).map((text: LearningContentProperties) => (
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
      </LayoutThematicContent>
    </main>
  )
}

export async function generateStaticParams() {
  const pokes = await getAllThematicContent()
  return pokes.map((p) => ({ uuid: p.uuid }))
}
