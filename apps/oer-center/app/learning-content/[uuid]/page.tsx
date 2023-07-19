import LayoutCommonContent from 'components/layout/CommonContentLayout'
import { randomUUID } from 'crypto'
import { getGoogleDriveFileId, getYoutubeVideoId } from 'lib/contentTypeChecker'
import {
  getAllLearningContent,
  getLearningContent,
} from 'lib/fetchLearningContent'
import Image from 'next/image'
import Script from 'next/script'
import {
  LearningContentPageViewProps,
  LearningContentProperties,
} from 'types/global'

export const dynamicParams = false

export default async function Page({ params }: LearningContentPageViewProps) {
  const {
    uuid,
    contentTitle,
    contentAuthor,
    contentDescription,
    contentType,
    contentUploadDate,
    contentUrl,
  } = (await getLearningContent(params.uuid)) as LearningContentProperties

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['VideoObject', 'LearningResource'],
    name: contentTitle,
    description: contentDescription,
    learningResourceType: contentType,
    educationLevel: 'TertiaryEducation',
    contentUrl: contentUrl,
    thumbnailUrl: contentUrl,
    uploadDate: contentUploadDate,
  }

  return (
    <main id="main-content" tabIndex={-1}>
      {contentType === 'video' && (
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          key={`json-ld-${jsonLd['@type']}`}
          id={`json-ld-${jsonLd['@type']}-${randomUUID()}`}
        />
      )}
      <LayoutCommonContent
        title={contentTitle}
        subtitle={contentDescription}
        className="container mx-auto px-10 pt-12 lg:px-0 lg:py-48"
        id={uuid}
        author={contentAuthor}
        uploadDate={contentUploadDate}
      >
        {contentType === 'video' && (
          <iframe
            src={`https://www.youtube.com/embed/${getYoutubeVideoId(
              contentUrl,
            )}?modestbranding=1&rel=0&cc_load_policy=1&iv_load_policy=3`}
            width="100%"
            height="100%"
            title={contentTitle}
          ></iframe>
        )}

        {contentType === 'slides' && (
          <iframe
            src={`https://docs.google.com/presentation/d/${getGoogleDriveFileId(
              contentUrl,
            )}/embed?start=false&loop=false&delayms=3000`}
            width="100%"
            height="100%"
            title={contentTitle}
          ></iframe>
        )}

        {contentType === 'image' && (
          <Image
            src={`https://drive.google.com/uc?export=view&id=${getGoogleDriveFileId(
              contentUrl,
            )}`}
            width={1000}
            height={1000}
            alt={contentDescription}
          />
        )}

        {contentType === 'text' && (
          <iframe
            src={`https://drive.google.com/file/d/${getGoogleDriveFileId(
              contentUrl,
            )}/preview`}
            width="100%"
            height="100%"
            title={contentTitle}
          ></iframe>
        )}
      </LayoutCommonContent>
    </main>
  )
}

export async function generateStaticParams() {
  const pokes = await getAllLearningContent()
  return pokes.map((p) => ({ uuid: p.uuid }))
}
