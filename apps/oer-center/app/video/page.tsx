import SectionLayout from 'components/layout/CommonSectionLayout'
import { CommonCard } from 'components/organism/CommonResourcesCard'
import contentVideoData from 'data/video.content.json'

export default function Page() {
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