import LayoutCommonContent from 'components/layout/CommonContentLayout'
import { getGoogleDriveFileId, getYoutubeVideoId } from 'lib/contentTypeChecker'
import {
  getAllLearningContent,
  getLearningContent,
} from 'lib/fetchLearningContent'
import Image from 'next/image'
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

  return (
    <main>
      <LayoutCommonContent
        title={contentTitle}
        subtitle={contentDescription}
        className="container mx-auto py-48"
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
            title="Nyan Cat [original]"
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
