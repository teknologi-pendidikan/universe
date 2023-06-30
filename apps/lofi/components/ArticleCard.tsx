import Image from 'next/image'
import Link from 'next/link'

export default function ArticleCard({ slug, frontmatter }) {
  return (
    <div className="flex flex-col space-y-2 justify-start items-start border border-black-1 rounded-lg">
      {frontmatter.image ? (
        <Image
          src={frontmatter.image}
          alt={frontmatter.title}
          width={1280}
          height={720}
          className="w-full h-36 object-cover rounded-t-lg object-right-top"
        />
      ) : (
        <div className="w-full h-24 rounded-t-lg bg-gray-300" />
      )}
      <div className="px-4 pb-4 pt-2 w-full">
        <Link href={`/${slug}`}>
          <h2 className="text-base font-bold text-black hover:underline">
            {frontmatter.title.slice(0, 80)}
          </h2>
        </Link>
        <p className="text-sm text-gray-400 pt-2">{frontmatter.description.slice(0, 80)}</p>
      </div>
    </div>
  )
}
