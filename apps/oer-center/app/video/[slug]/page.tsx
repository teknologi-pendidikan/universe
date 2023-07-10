import LayoutCommonContent from 'components/layout/CommonContentLayout'
import videoContentData from 'data/video.content.json'
import dynamic from 'next/dynamic'
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false })

type Video = {
  title: string
  slug: string
  author: string
  description: string
  date: string
  image: string
  url: string
}

interface Props {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return videoContentData.videolist.map((video) => ({
    params: {
      slug: video.slug,
    },
  }))
}

export default function VideoContentPage({ params }: Props) {
  const { slug } = params
  const video = videoContentData.videolist.find(
    (video) => video.slug === slug,
  ) as Video
  return (
    <main>
      <LayoutCommonContent
        title={video.title}
        subtitle={video.description}
        className="container mx-auto py-48"
        id="video-content"
      >
        <ReactPlayer
          url={video.url}
          controls={true}
          width="100%"
          height="100%"
        />
      </LayoutCommonContent>
    </main>
  )
}
