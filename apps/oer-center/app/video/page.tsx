import SectionLayout from 'components/layout/CommonSectionLayout'
import { CommonCard } from 'components/organism/CommonResourcesCard'
import contentVideoData from 'data/video.content.json'

const youtubeIdRegex =
  /(http:|https:)?(\/\/)?(www\.)?(youtube.com|youtu.be)\/(watch|embed)?(\?v=|\/)?(\S+)?/

export default function Page() {
  // get youtube id from url
  const getYoutubeId = (url: string) => {
    const match = url.match(youtubeIdRegex)
    return match && match[7].length === 11 ? match[7] : false
  }

  return (
    <main>
      <SectionLayout
        id="lecture-videos"
        className="container mx-auto py-48"
        title="Lecture Videos"
        subtitle="Open Educational Lecture Videos, curated by EDTECH-ID"
      >
        <div className="flex flex-col items-start justify-start space-y-8">
          <div className="grid auto-cols-auto grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {contentVideoData.videolist.map((video) => (
              <CommonCard
                key={video.slug}
                slug={`${video.slug}`}
                title={video.title}
                author={video.author}
                image={video.url}
              />
            ))}
          </div>
        </div>
      </SectionLayout>
    </main>
  )
}
