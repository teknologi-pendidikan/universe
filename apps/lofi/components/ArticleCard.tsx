import Image from 'next/image'
import Link from 'next/link'

type Props = {
  slug: string
  frontmatter: {
    title: string
    description: string
    image: string
  }
}

export default function ArticleCard({ slug, frontmatter }: Props) {
  return (
    <div className="border-black-1 flex flex-col items-start justify-start space-y-2 rounded-lg border">
      {frontmatter.image ? (
        <Image
          src={frontmatter.image}
          alt={frontmatter.title}
          width={1280}
          height={720}
          className="h-36 w-full rounded-t-lg object-cover object-right-top"
        />
      ) : (
        <div className="h-24 w-full rounded-t-lg bg-gray-300" />
      )}
      <div className="w-full px-4 pb-4 pt-2">
        <Link href={`/${slug}`}>
          <h3 className="text-base font-bold text-black hover:underline">
            {frontmatter.title.slice(0, 80)}
          </h3>
        </Link>
        <p className="line-clamp-2 pt-2 text-sm text-gray-800">
          {frontmatter.description}
        </p>
      </div>
    </div>
  )
}
