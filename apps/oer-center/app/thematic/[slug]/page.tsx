'use client'

import SectionLayout from 'components/layout/CommonSectionLayout'
import PageThematicLayout from 'components/layout/PageThematicLayout'
import { CommonCard } from 'components/organism/CommonResourcesCard'
import thematicData from 'data/thematic.content.json'
import videoContentData from 'data/video.content.json'

// thematic type
type Thematic = {
  title: string
  author: string
  description: string
  date: string
  image: string
  slug: string
  thematicvideolist: any[]
}

export async function generateStaticParams() {
  return thematicData.thematiclist.map((thematic) => ({
    params: {
      slug: thematic.slug,
    },
  }))
}

async function getThematicData(params: { slug: string }) {
  const thematic = thematicData.thematiclist.find(
    (thematic) => thematic.slug === params.slug,
  ) as Thematic
  return {
    thematic,
  }
}

export default async function ThematicContentPage({
  params,
}: {
  params: { slug: string }
}) {
  const data = await getThematicData(params)
  return (
    <main>
      <PageThematicLayout
        title={data.thematic.title}
        subtitle={data.thematic.description}
        className="container mx-auto py-48"
        id="thematic-content"
      >
        <SectionLayout
          id="lecture-videos"
          title="Thematic Resources"
          subtitle="Resources"
        >
          <div className="grid auto-cols-auto grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {data.thematic.thematicvideolist.map((video) => (
              <CommonCard
                key={video}
                slug={video}
                title={`${
                  videoContentData.videolist.find(
                    (videoContent) => videoContent.slug === video,
                  )?.title
                }`}
                author={`${
                  videoContentData.videolist.find(
                    (videoContent) => videoContent.slug === video,
                  )?.author
                }`}
                image={`${
                  videoContentData.videolist.find(
                    (videoContent) => videoContent.slug === video,
                  )?.image
                }`}
              />
            ))}
          </div>
        </SectionLayout>
      </PageThematicLayout>
    </main>
  )
}
