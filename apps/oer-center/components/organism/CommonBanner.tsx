import Link from 'next/link'

type BannerProps = {
  className?: string
  title: string
  description: string
  ctaLink: string
  ctaText: string
}

export default function Banner({
  className = 'bg-brandblue text-white',
  title = 'Are you a teacher in a disadvantaged, frontier, and outermost area?',
  description = 'We have a special collection of learning materials for your students!',
  ctaLink = '/outermost-project',
  ctaText = 'Explore the collection',
}: BannerProps) {
  return (
    <section className={`w-full py-14 ${className}`}>
      <div className="container mx-auto flex flex-col items-center justify-center space-y-6">
        <h2 className="text-center text-5xl font-bold">{title}</h2>
        <p className="text-center text-3xl font-bold">{description}</p>
        <Link
          className="rounded-lg bg-white p-4 text-xl font-bold text-gray-800 hover:bg-gray-100 hover:underline"
          href={ctaLink}
        >
          {ctaText}
        </Link>
      </div>
    </section>
  )
}
