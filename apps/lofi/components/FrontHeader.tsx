import LogoLOFI from 'assets/logo-lofi.svg'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  title?: string
}

const LeftLink = [
  {
    title: 'Opini',
    link: '/category/opini',
  },
  {
    title: 'Referensi Informasi',
    link: '/category/referensi',
  },
  {
    title: 'Prestasi',
    link: '/category/prestasi',
  },
]

const RightLink = [
  {
    title: 'Event',
    link: 'https://with.teknologipendidikan.or.id',
  },
  {
    title: 'Institute',
    link: 'https://institute.teknologipendidikan.or.id',
  },
  {
    title: 'Research Center',
    link: 'https://research.teknologipendidikan.or.id',
  },
]

export default function FrontHeader({
  title = 'Majalah dan Surat Kabar Teknologi Pendidikan',
}: Props) {
  return (
    <section
      id="frontheader"
      className="container mx-auto my-10 max-w-screen-xl px-4 pt-12"
    >
      <div className="text-brandblue-800 flex flex-row items-center justify-around">
        <div className="hidden items-center justify-between space-x-12 lg:flex">
          {LeftLink.map((link) => (
            <Link href={link.link} key={link.link} className="hover:underline">
              <p>{link.title}</p>
            </Link>
          ))}
        </div>
        <div className="items-center justify-center md:col-span-2">
          <Link href="/">
            <Image src={LogoLOFI} alt="Logo LOFI" width={200} height={200} />
          </Link>
        </div>
        <div className="hidden items-center justify-between space-x-12 lg:flex">
          {RightLink.map((link) => (
            <Link href={link.link} key={link.link} className="hover:underline">
              <p>{link.title}</p>
            </Link>
          ))}
        </div>
      </div>
      <h1 className="w-full pt-12 text-center font-serif text-4xl">{title}</h1>
    </section>
  )
}
