import Image from 'next/image'
import Link from 'next/link'

export default function RunningEvents() {
  return (
    <section
      id="runningevents"
      className="container mx-auto mb-8 mt-5 max-w-screen-xl px-4"
    >
      <Link href="https://grow.teknologipendidikan.or.id/running" className="">
        <Image
          src="/runningevents.png"
          alt="Event dan Kegiatan oleh Teknologi Pendidikan ID"
          width={2496}
          height={640}
          className="h-36 w-full rounded-lg object-cover object-left-top transition duration-500 ease-in-out hover:scale-[103%] lg:h-80"
          unoptimized
        />
      </Link>
    </section>
  )
}
