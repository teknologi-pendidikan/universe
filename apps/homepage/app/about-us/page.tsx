import ICON_Adoption from 'assets/icon_adoption.svg'
import ICON_kolaborasi from 'assets/icon_kolaborasi.svg'
import ICON_opensource from 'assets/icon_opensource.svg'
import ICON_trend from 'assets/icon_trend.svg'
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
        className="container mx-auto h-[90vh] bg-gray-100 px-5 py-8 text-white lg:px-0"
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
        <div className="grid-cols-min grid grid-cols-2 rounded-lg bg-white p-8 text-gray-800 shadow-2xl shadow-brandblue-100">
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
        <div className="relative h-[90vh] w-full bg-gray-100">
          <Image
            src="/full-team.png"
            quality={100}
            width={1920}
            height={1080}
            alt="Founder EDTECH-ID"
            className="h-[90vh] w-full object-cover"
          />
          <div className="container absolute inset-0 top-36 mx-auto flex flex-col items-center justify-start space-y-4 text-brandblue-700">
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
      <section id="our-strategy" className="container mx-auto px-5 py-64">
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
        className="bg-gray-800 px-5 py-24 text-gray-100 lg:px-0"
        id="our-process"
      >
        <div className="container mx-auto flex flex-col items-center py-8">
          <h1 className="mb-14 text-6xl font-bold">How we do it?</h1>
          <p className="max-w-6xl text-xl lg:text-center">
            Kami menciptakan, memanfaatkan, dan mengelola teknologi yang
            tersedia di lingkungan pendidikan. Kami terbuka akan kolaborasi ide,
            proses serta pengembangan dalam segala lingkup untuk mencapai tujuan
            sederhana kami. Kami telah bereksperimen dengan berbagai hal untuk
            menciptakan berbagai berbagai teknologi.
          </p>
          <div className="mt-6 flex w-full flex-col items-center justify-around space-y-12 text-center lg:flex-row lg:space-y-0">
            <div className="flex flex-col items-center ">
              <Image
                className="pb-10"
                src={ICON_kolaborasi}
                alt=""
                width={190}
                height={190}
              />
              <p className="max-w-xs  text-4xl">
                Kolaborasi dengan teknolog muda
              </p>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <Image
                className="pb-10"
                src={ICON_trend}
                alt=""
                width={190}
                height={190}
              />
              <p className="max-w-xs  text-4xl">Designing trend-based issues</p>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <Image
                className="pb-10"
                src={ICON_opensource}
                alt=""
                width={190}
                height={190}
              />
              <p className="max-w-xs  text-4xl">Open Source Technology</p>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <Image
                className="pb-10"
                src={ICON_Adoption}
                alt=""
                width={190}
                height={190}
              />
              <p className="max-w-xs  text-4xl">User Adoption & Satisfaction</p>
            </div>
          </div>
        </div>
      </section>
      <section
        className="bg-gray-100 px-5 py-10 text-gray-700 lg:px-0"
        id="what-can-we-solve"
      >
        <div className="container mx-auto my-14 flex flex-col items-center">
          <p className="max-w-6xl text-xl leading-loose lg:text-center lg:text-4xl">
            Teknologi Pendidikan ID adalahorganisasi nirlaba (komunitas) yang
            bergerak di bidang pengembangan Pendidikan dan Pembelajaran dan
            tidak terafiliasi dengan lembaga mana pun, baik partai politik,
            organisasi kemahasiswaan, perseroan terbatas maupun institusi
            Pendidikan milik pemerintah lainnya; Kami bekerja sama dengan
            berbagai pihak untuk menciptakan solusi yang dapat digunakan oleh
            semua pihak.
          </p>
          <Link
            href="https://aplikasi.teknologipendidikan/sikarsa"
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
