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
      className="container mx-auto px-4 my-10 max-w-screen-xl pt-12"
    >
      <div className="flex flex-row justify-around items-center text-brandblue-800">
        <div className="hidden lg:flex justify-between space-x-12 items-center">
          {LeftLink.map((link) => (
            <Link href={link.link} className="hover:underline">
              <p>{link.title}</p>
            </Link>
          ))}
        </div>
        <div className="md:col-span-2 justify-center items-center">
          <Link href="/">
            <Image src={LogoLOFI} alt="Logo LOFI" width={200} height={200} />
          </Link>
        </div>
        <div className="hidden lg:flex justify-between space-x-12 items-center">
          {RightLink.map((link) => (
            <Link href={link.link} className="hover:underline">
              <p>{link.title}</p>
            </Link>
          ))}
        </div>
      </div>
      <h1 className="text-center w-full font-serif pt-12 text-4xl">{title}</h1>
    </section>
  )
}
