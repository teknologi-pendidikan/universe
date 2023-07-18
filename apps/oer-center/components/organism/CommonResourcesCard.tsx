import { getGoogleDriveFileId, getYoutubeVideoId } from 'lib/contentTypeChecker'
import Image from 'next/image'
import Link from 'next/link'

type CardProps = {
  slug: string
  title: string
  author: string
  image: string
  type?: string
}

// create a type extends from cardprops
type ThematicCardProps = {
  slug: string
  title: string
  description: string
  image: string
}

export function CommonCard({
  slug = 'ai-and-humans',
  title = 'Jembatan Kecerdasan Buatan dan Manusia',
  author = 'Dr. Henry Praherdhiono',
  image = '/placeholder.jpg',
  type = 'video',
}: CardProps) {
  return (
    <Link
      className="flex flex-col items-start justify-start space-y-2 rounded-lg border border-gray-300 hover:border-gray-700 hover:shadow-md"
      href={`${slug}`}
    >
      {type === 'video' && (
        <Image
          className="aspect-video w-full rounded-t-lg object-cover object-center"
          src={`https://img.youtube.com/vi/${getYoutubeVideoId(
            image,
          )}/hqdefault.jpg`}
          width={500}
          height={200}
          alt=""
        />
      )}

      {type === 'image' && (
        <Image
          className="aspect-[3/1] w-full rounded-t-lg object-cover object-right-top"
          src={`https://drive.google.com/uc?export=view&id=${getGoogleDriveFileId(
            image,
          )}`}
          width={500}
          height={200}
          alt=""
        />
      )}
      <div className="flex w-full flex-col items-start justify-center space-y-1 p-3">
        <h3 className="text-2xl font-bold text-gray-800 hover:underline">
          {title}
        </h3>
        <p className="text-sm text-gray-600">Created by {author}</p>
      </div>
    </Link>
  )
}

export function ThematicCard({
  slug = 'pkg-kemdikbud-2023',
  title = 'Pengembangan Kompetensi Guru dan Sekolah Penggerak',
  description = 'Panduan dan materi untuk pengembangan kompetensi guru dan sekolah penggerak tahun 2023',
  image = '/placeholder.jpg',
}: ThematicCardProps) {
  return (
    <Link
      className="flex flex-col items-start justify-start space-y-2 rounded-lg border border-gray-300"
      href={`/thematic/${slug}`}
    >
      <Image
        className="aspect-[3/1] w-full rounded-t-lg object-cover object-right-top"
        src={image}
        alt=""
        width={500}
        height={200}
      />
      <div className="flex w-full flex-col items-start justify-center space-y-1 p-3">
        <h3 className="text-2xl font-bold text-gray-800 hover:underline">
          {title}
        </h3>
        <p className="line-clamp-3 text-base text-gray-800">{description}</p>
      </div>
    </Link>
  )
}
