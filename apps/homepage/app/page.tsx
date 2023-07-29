import ICON_Adoption from 'assets/icon_adoption.svg'
import ICON_kolaborasi from 'assets/icon_kolaborasi.svg'
import ICON_opensource from 'assets/icon_opensource.svg'
import ICON_trend from 'assets/icon_trend.svg'
import LOGO_github from 'assets/logo_github.png'
import LOGO_google from 'assets/logo_googleeducation.png'
import LOGO_imatepsi from 'assets/logo_imatepsi.png'
import LOGO_kemendikbud from 'assets/logo_kemdikbud.png'
import LOGO_microsoft from 'assets/logo_microsoft.png'
import LOGO_um from 'assets/logo_um.png'
import MUG_hilman from 'assets/mug_hilman.png'
import MUG_rengga from 'assets/mug_rengga.png'
import IMAGE_presentasi from 'assets/presentasi-1.jpg'
import Image from 'next/image'
import Link from 'next/link'

const partner = [
  {
    name: 'Kementerian Pendidikan, Kebudayaan, Riset dan Teknologi',
    logo: LOGO_kemendikbud,
  },
  {
    name: 'Universitas Negeri Malang',
    logo: LOGO_um,
  },
  {
    name: 'Ikatan Mahasiswa Teknologi Pendidikan Indonesia',
    logo: LOGO_imatepsi,
  },
  {
    name: 'Google for Education',
    logo: LOGO_google,
  },
  {
    name: 'Microsoft for Education',
    logo: LOGO_microsoft,
  },
  {
    name: 'Github for Schools',
    logo: LOGO_github,
  },
]

const peoples = [
  {
    name: 'Rengga Prakoso Nugroho',
    role: 'Direktur Pengembangan Teknologi dan Sistem Informasi',
    cover: MUG_rengga,
  },
  {
    name: 'Moch. Hilman Amirudin Nahri',
    role: 'Direktur Inovasi, Komunikasi, dan Kerjasama',
    cover: MUG_hilman,
  },
]

export default function Home() {
  return (
    <main>
      <section
        id="welcome-banner"
        className="container mx-auto h-[80vh]  px-5 text-white lg:px-0"
      >
        <div className="flex h-full flex-row items-center justify-between">
          <div>
            <p className="mb-8 max-w-2xl text-2xl text-gray-800 lg:mb-32">
              Kami adalah sekelompok kecil ahli teknologi pendidikan yang
              memiliki misi untuk membuat pendidikan di Indonesia terbuka dan
              dapat dirasakan oleh setiap anggota masyarakat.{' '}
            </p>
            <h1 className="mb-8 text-6xl font-bold lg:mb-24">
              <div className="flex flex-col items-start justify-center text-5xl lg:text-8xl">
                <span className="text-brandblue">Inovasi.</span>
                <span className="text-brandyellow">Teknologi.</span>
                <span className="text-brandgreen">Pembelajaran.</span>
              </div>
            </h1>
          </div>
          <Image
            src={IMAGE_presentasi}
            width={500}
            height={500}
            alt=""
            className=""
            unoptimized
          />
        </div>
      </section>
      <section className=" px-5 py-12 text-gray-800 lg:px-0" id="what-we-do">
        <div className="container mx-auto my-14 flex flex-col items-center">
          <h2 className="text-green mb-8 text-5xl font-bold lg:text-6xl">
            What we do?
          </h2>
          <p className="max-w-6xl text-center text-xl text-gray-800 lg:text-4xl">
            Memanfaatkan teknologi untuk menciptakan inovasi dalam memfasilitasi
            pembelajaran dan meningkatkan performa manusia.
          </p>
          <a
            href="#"
            className="mt-12 w-full rounded-full bg-gray-700 py-4 text-center text-lg text-white hover:bg-gray-900 lg:w-fit lg:px-24 lg:py-8"
          >
            Pelajari aksi kami
          </a>
        </div>
      </section>
      <section
        className="bg-brandyellow px-5 py-12 text-gray-800 lg:px-0"
        id="product-scale"
      >
        <div className="container mx-auto my-24 flex flex-col items-center">
          <h2 className="mb-24 text-6xl font-bold text-gray-800">
            The impact of our program
          </h2>
          <div className="mt-6 flex w-full flex-col items-center justify-around space-y-8 text-center lg:flex-row lg:items-baseline">
            <div className="flex flex-col items-center justify-center">
              <p className="mb-1 text-8xl font-bold text-gray-800">6</p>
              <p className="max-w-xs text-4xl text-gray-800">
                Kerjasama Kemahasiswaan
              </p>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <p className="mb-1 text-8xl font-bold text-gray-800">12</p>
              <p className="max-w-xs text-4xl text-gray-800">
                Peningkatan kompetensi
              </p>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <p className="mb-1 text-8xl font-bold text-gray-800">3</p>
              <p className="max-w-xs text-4xl text-gray-800">
                Partner industri teknologi
              </p>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <p className="mb-1 text-8xl font-bold text-gray-800">8</p>
              <p className="max-w-xs text-4xl text-gray-800">
                Aplikasi open source
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        className="bg-gray-800 px-5 py-24 text-gray-100 lg:px-0"
        id="our-process"
      >
        <div className="container mx-auto flex flex-col items-center py-8">
          <h2 className="mb-14 text-6xl font-bold">How we do it?</h2>
          <p className="max-w-6xl text-xl lg:text-center">
            Kami menciptakan, memanfaatkan, dan mengelola teknologi yang
            tersedia di lingkungan pendidikan. Kami terbuka akan kolaborasi ide,
            proses serta pengembangan dalam segala lingkup untuk mencapai tujuan
            sederhana kami.
          </p>
          <div className="mt-24 flex w-full flex-col items-center justify-around space-y-12 text-center lg:flex-row lg:space-y-0">
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
      <section className=" px-5 py-8 text-gray-800 lg:px-0" id="our-partner">
        <div className="container mx-auto flex flex-col items-center justify-center py-20">
          <h2 className="mb-14 text-6xl font-bold">Our Partner</h2>
          <div className="grid w-full grid-cols-2 gap-3 lg:grid-cols-3">
            {partner.map((item) => (
              <div key={item.name} className="text-center">
                <div className="flex flex-col items-center space-y-6 py-6">
                  <div className="">
                    <Image
                      className=""
                      src={item.logo}
                      alt=""
                      width={300}
                      height={300}
                    />
                  </div>
                  <p className="max-w-xs text-sm">{item.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
        className="mb-16 min-h-screen  px-5 py-8 text-gray-800 lg:px-0"
        id="our-team"
      >
        <div className="container mx-auto flex flex-col items-center justify-center py-20">
          <h2 className="mb-14 text-6xl font-bold">Meet the Team</h2>
          <p className="mb-32 max-w-6xl text-xl lg:text-center">
            Kami terdiri dari berbagai latar belakang yang berbeda, mulai dari
            mahasiswa, dosen, hingga profesional. Kami memiliki tujuan yang
            sama, yaitu menciptakan teknologi yang dapat digunakan oleh semua
            orang.
          </p>
          <div className="grid w-full grid-cols-1 lg:grid-cols-3 lg:gap-24">
            {peoples.map((item) => (
              <div key={item.name} className="text-center">
                <div className="flex flex-col items-center space-y-6 py-6">
                  <div className="">
                    <Image
                      className=""
                      src={item.cover}
                      alt=""
                      width={400}
                      height={400}
                      quality={100}
                    />
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <p className="text-2xl font-bold underline">{item.name}</p>
                    <p className="max-w-xs text-xl">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
        className="bg-gray-800 px-5 py-10 text-gray-100 lg:px-0"
        id="what-can-we-solve"
      >
        <div className="container mx-auto my-14 flex flex-col items-center">
          <h2 className="mb-8 text-6xl font-bold text-gray-100">
            What problems we could solve next?
          </h2>
          <p className="max-w-6xl text-xl lg:text-center lg:text-4xl">
            Layaknya era pendidikan dan kehidupan manusia, kita dituntut untuk
            bergerak secara adaptif dan kolaboratif dengan tujuan menciptakan
            kehidupan yang lebih baik bagi diri sendiri dan masyarakat luas.
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
