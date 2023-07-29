import GlobalSiteContent from 'data/site.content.json'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: `Tentang Kami | ${GlobalSiteContent.globalContentData.title}`,
}

export default function AboutUs() {
  return (
    <main>
      <section
        id="big-about"
        className="container mx-auto h-[90vh]  px-5 py-8 text-white lg:px-0"
      >
        <div className="flex h-full w-full flex-col items-center justify-center space-y-12">
          <p className="max-w-screen-xl text-center text-6xl leading-snug text-gray-800">
            Kami adalah sekelompok kecil ahli teknologi pendidikan yang memiliki
            misi untuk membuat pendidikan di Indonesia terbuka dan dapat
            dirasakan oleh setiap anggota masyarakat.
          </p>
          <p className="max-w-screen-lg text-center text-3xl leading-snug text-gray-800">
            Kami memanfaatkan teknologi untuk menciptakan inovasi dalam
            memfasilitasi pembelajaran dan meningkatkan performa manusia.
          </p>
        </div>
      </section>
      <section id="principle" className="container mx-auto px-5 py-64">
        <div className="grid-cols-min grid grid-cols-2 rounded-lg bg-white p-8 text-gray-800 outline outline-1">
          <div className="flex h-full flex-col items-start justify-center space-y-4 px-12">
            <h2 className="text-4xl font-semibold leading-snug">
              Prinsip kami dalam memberikan kontribusi kepada masyarakat
            </h2>
            <p className="text-lg font-normal leading-relaxed">
              Sebagai lembaga yang belajar dan membelajarkan ilmu pengetahuan,
              Inovasi menjadi orientasi kami dalam bergerak dan memberikan
              pelayanan. Melalui teknologi, kami membuka cakrawala baru bagi
              setiap individu yang belajar dan terus belajar. Sehingga
              terjadilah proses pembelajaran sepanjang hayat bagi para
              pebelajar.
            </p>
          </div>
          <Image
            src="/panita-festiva.jpg"
            width={500}
            height={500}
            alt="Panitia TEP Festiva 1.0"
            className="w-full rounded-lg"
          />
        </div>
      </section>
      <section id="team" className="py-24">
        <div className="relative h-[90vh] w-full ">
          <Image
            src="/full-team.png"
            quality={100}
            width={1920}
            height={1080}
            alt="Founder EDTECH-ID"
            className="h-[90vh] w-full object-cover"
          />
          <div className="container absolute inset-0 top-36 mx-auto flex flex-col items-center justify-start space-y-4 text-gray-700">
            <h2 className="text-center text-4xl font-semibold leading-snug">
              Kami terdiri dari berbagai latar belakang yang berbeda - mulai
              dari mahasiswa, dosen, dan profesional, dari lembaga pendidikan
              hingga perusahaan teknologi.
            </h2>
            <p className="text-center text-lg font-normal leading-relaxed">
              Kami memiliki tujuan yang sama, yaitu menciptakan teknologi yang
              dapat digunakan untuk meningkatkan pendidikan dan pembelajaran.
            </p>
          </div>
        </div>
      </section>
      <section
        id="our-strategy"
        className="container mx-auto flex h-screen items-center justify-center px-5"
      >
        <div className="container mx-auto flex max-w-screen-xl flex-col items-center justify-start space-y-12 py-4 text-gray-700">
          <h2 className="text-center text-6xl font-semibold leading-snug">
            Kami tidak hanya membangun produk; Kami fokus pada pelaksanaan
            desain hingga evaluasi solusi. Kami membangun hal yang dapat
            diimplementasikan dan berkelanjutan.
          </h2>
          <p className="text-2xl font-normal leading-relaxed">
            Untuk mencapai tujuan tersebut, kami memiliki strategi yang terdiri
            dari 4 prinsip, yaitu:
          </p>
          <ol className="list-inside list-decimal space-y-1 text-center text-2xl">
            <li className="">Kolaborasi dengan teknolog muda</li>
            <li className="">Mendesain solusi berbasis tren kebutuhan</li>
            <li className="">Menggunakan teknologi open source</li>
            <li className="">Mengedepankan adaptasi pengguna dan kepuasan</li>
          </ol>
        </div>
      </section>
      <section
        className=" flex h-screen items-center justify-center px-5 py-10 text-gray-700 lg:px-0"
        id="what-can-we-solve"
      >
        <div className="container mx-auto my-14 flex flex-col items-center space-y-12">
          <p className="max-w-6xl text-xl leading-loose lg:text-center lg:text-3xl">
            Teknologi Pendidikan ID adalah organisasi nirlaba (komunitas) yang
            bergerak di bidang pengembangan Pendidikan dan Pembelajaran. Kami
            bekerja sama dengan berbagai pihak untuk menciptakan solusi yang
            dapat digunakan oleh semua pihak.
          </p>
          <p className="max-w-6xl text-lg leading-loose lg:text-center lg:text-2xl">
            {' '}
            Teknologi Pendidikan ID beroperasi di bawah naungan PT. Inovasi
            Teknologi Pembelajaran, sebuah perusahaan yang bergerak di bidang
            pengembangan pendidikan dan pembelajaran.
          </p>
          <Link
            href="https://aplikasi.teknologipendidikan.or.id/sikarsa"
            passHref
            className="mt-12 rounded-full bg-gray-700 px-4 py-3 text-lg text-white hover:bg-gray-900 lg:px-24"
          >
            Berkolaborasi dengan kami
          </Link>
        </div>
      </section>
    </main>
  )
}
