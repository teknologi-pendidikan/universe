import ICON_Adoption from 'assets/icon_adoption.svg'
import ICON_kolaborasi from 'assets/icon_kolaborasi.svg'
import ICON_opensource from 'assets/icon_opensource.svg'
import ICON_trend from 'assets/icon_trend.svg'
import Image from 'next/image'
import Link from 'next/link'

export default function AboutUs() {
  return (
    <main>
      <section
        id="big-about"
        className="container mx-auto h-[90vh] bg-gray-100 text-white px-5 py-8 lg:px-0"
      >
        <div className="flex flex-col items-center justify-center space-y-12 h-full w-full">
          <p className="max-w-screen-xl text-6xl text-gray-800 text-center leading-snug">
            Kami adalah sekelompok kecil ahli teknologi pendidikan yang memiliki
            misi untuk membuat pendidikan di Indonesia terbuka dan dapat
            dirasakan oleh setiap anggota masyarakat.
          </p>
          <p className="max-w-screen-lg text-3xl text-gray-800 text-center leading-snug">
            Kami memanfaatkan teknologi untuk menciptakan inovasi dalam
            memfasilitasi pembelajaran dan meningkatkan performa manusia.
          </p>
        </div>
      </section>
      <section id="principle" className="container mx-auto px-5 py-64">
        <div className="grid grid-cols-2 grid-cols-min p-8 bg-white shadow-brandblue-100 shadow-2xl text-gray-800 rounded-lg">
          <div className="flex flex-col items-start justify-center space-y-4 h-full px-12">
            <h2 className="text-4xl font-semibold leading-snug">
              Prinsip kami dalam memberikan kontribusi kepada masyarakat
            </h2>
            <p className="text-lg leading-relaxed font-normal">
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
        <div className="relative w-full h-[90vh] bg-gray-100">
          <Image
            src="/full-team.png"
            quality={100}
            width={1920}
            height={1080}
            alt="Founder EDTECH-ID"
            className="w-full h-[90vh] object-cover"
          />
          <div className="container mx-auto absolute top-36 text-brandblue-700 inset-0 flex flex-col items-center justify-start space-y-4">
            <h2 className="text-4xl font-semibold leading-snug text-center">
              Kami terdiri dari berbagai latar belakang yang berbeda - mulai
              dari mahasiswa, dosen, dan profesional, dari lembaga pendidikan
              hingga perusahaan teknologi.
            </h2>
            <p className="text-lg leading-relaxed font-normal text-center">
              Kami memiliki tujuan yang sama, yaitu menciptakan teknologi yang
              dapat digunakan untuk meningkatkan pendidikan dan pembelajaran.
            </p>
          </div>
        </div>
      </section>
      <section id="our-strategy" className="container mx-auto px-5 py-64">
        <div className="container mx-auto text-gray-700 max-w-screen-xl flex flex-col items-center justify-start space-y-12 py-4">
          <h2 className="text-6xl font-semibold leading-snug text-center">
            Kami tidak hanya membangun produk; Kami fokus pada pelaksanaan
            desain hingga evaluasi solusi. Kami membangun hal yang dapat
            diimplementasikan dan berkelanjutan.
          </h2>
          <p className="text-2xl leading-relaxed font-normal">
            Untuk mencapai tujuan tersebut, kami memiliki strategi yang terdiri
            dari 4 prinsip, yaitu:
          </p>
          <ol className="text-2xl list-decimal list-inside text-center space-y-1">
            <li className="">Kolaborasi dengan teknolog muda</li>
            <li className="">Mendesain solusi berbasis tren kebutuhan</li>
            <li className="">Menggunakan teknologi open source</li>
            <li className="">Mengedepankan adaptasi pengguna dan kepuasan</li>
          </ol>
        </div>
      </section>
      <section
        className="bg-gray-800 text-gray-100 py-24 px-5 lg:px-0"
        id="our-process"
      >
        <div className="container mx-auto flex flex-col items-center py-8">
          <h1 className="text-6xl font-bold mb-14">How we do it?</h1>
          <p className="max-w-6xl text-xl lg:text-center">
            Kami menciptakan, memanfaatkan, dan mengelola teknologi yang
            tersedia di lingkungan pendidikan. Kami terbuka akan kolaborasi ide,
            proses serta pengembangan dalam segala lingkup untuk mencapai tujuan
            sederhana kami. Kami telah bereksperimen dengan berbagai hal untuk
            menciptakan berbagai berbagai teknologi.
          </p>
          <div className="flex flex-col lg:flex-row mt-6 justify-around items-center w-full text-center lg:space-y-0 space-y-12">
            <div className="flex flex-col items-center ">
              <Image
                className="pb-10"
                src={ICON_kolaborasi}
                alt=""
                width={190}
                height={190}
              />
              <p className="text-4xl  max-w-xs">
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
              <p className="text-4xl  max-w-xs">Designing trend-based issues</p>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <Image
                className="pb-10"
                src={ICON_opensource}
                alt=""
                width={190}
                height={190}
              />
              <p className="text-4xl  max-w-xs">Open Source Technology</p>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <Image
                className="pb-10"
                src={ICON_Adoption}
                alt=""
                width={190}
                height={190}
              />
              <p className="text-4xl  max-w-xs">User Adoption & Satisfaction</p>
            </div>
          </div>
        </div>
      </section>
      <section
        className="bg-gray-100 text-gray-700 px-5 lg:px-0 py-10"
        id="what-can-we-solve"
      >
        <div className="container mx-auto my-14 flex flex-col items-center">
          <p className="max-w-6xl text-xl lg:text-4xl lg:text-center leading-loose">
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
            className="bg-gray-700 hover:bg-gray-900 text-white text-lg py-3 px-4 lg:px-24 rounded-full mt-12"
          >
            Berkolaborasi dengan kami
          </Link>
        </div>
      </section>
    </main>
  )
}
