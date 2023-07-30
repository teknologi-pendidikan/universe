import Works from 'data/site.works.json'
import Image from 'next/image'
import Link from 'next/link'

export default function OurWorks() {
  return (
    <main>
      <section
        id="header"
        className="container mx-auto flex items-center justify-center px-5 pb-28 pt-12 text-white lg:px-0"
      >
        <h1 className="text-3xl font-semibold text-gray-700 lg:text-6xl">
          Our Work & Impact
        </h1>
      </section>
      {Works.map((work, index: number) => (
        <section
          key={index}
          id={work.name}
          className={
            index % 2 === 0
              ? `flex flex-col items-center justify-center bg-brandgreen text-white lg:min-h-min lg:flex-row-reverse`
              : `flex flex-col items-center justify-center bg-brandblue text-white lg:min-h-min lg:flex-row`
          }
        >
          <div className="lg:w-1/2">
            <Image
              src={`/${work.image}`}
              alt=""
              width={1000}
              height={1000}
              className="aspect-square h-screen w-full object-cover object-right-top"
            />
          </div>
          <div
            className={`flex flex-col items-start justify-center space-y-8 px-5 py-8 lg:h-screen lg:w-1/2 lg:space-y-14 lg:px-16`}
          >
            <Image
              src={`/${work.logo}`}
              alt={work.name}
              width={250}
              height={250}
            />
            <p className="text-xl font-normal leading-snug lg:text-5xl">
              {work.description}
            </p>
            <div className="flex flex-row items-center justify-start space-x-4">
              <Link
                href={work.link}
                className="rounded-full bg-white px-8 py-3 text-lg font-semibold text-black  hover:bg-gray-200"
              >
                Kunjungi {work.name}
              </Link>
            </div>
          </div>
        </section>
      ))}
    </main>
  )
}
