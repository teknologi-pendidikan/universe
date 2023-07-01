import Image from 'next/image'
import Link from 'next/link'

export default function RunningEvents() {
  return (
    <section
      id="runningevents"
      className="mx-auto container px-4 mb-8 mt-5 max-w-screen-xl"
    >
      <Link href="https://grow.teknologipendidikan.or.id/running" className="">
        <Image
          src="/runningevents.png"
          alt="Event dan Kegiatan oleh Teknologi Pendidikan ID"
          width={2496}
          height={640}
          className="w-full object-cover h-36 lg:h-80 rounded-lg hover:scale-[103%] transition ease-in-out duration-500 object-left-top"
          unoptimized
        />
      </Link>
    </section>
  )
}
