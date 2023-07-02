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
import IMAGE_presentasi from 'assets/presentasi-1.png'
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
        className="container mx-auto h-[80vh] bg-gray-100 text-white px-5 lg:px-0"
      >
        <p className="max-w-2xl text-2xl mb-8 lg:mb-32 mt-24 text-gray-800">
          Kami adalah sekelompok kecil ahli teknologi pendidikan yang memiliki
          misi untuk membuat pendidikan di Indonesia terbuka dan dapat dirasakan
          oleh setiap anggota masyarakat.{' '}
        </p>
        <h1 className="text-6xl font-bold mb-8 lg:mb-24">
          <div className="flex flex-col items-start lg:text-8xl text-5xl justify-center">
            <span className="text-brandblue">Inovasi.</span>
            <span className="text-brandyellow">Teknologi.</span>
            <span className="text-brandgreen">Pembelajaran.</span>
          </div>
        </h1>
      </section>
      <section id="presentationImage" className="px-5 lg:px-0">
        <div className="w-full">
          <Image
            src={IMAGE_presentasi}
            alt=""
            className="w-max-screen w-full object-fill"
          />
        </div>
      </section>
      <section
        className="bg-gray-100 text-gray-800 py-12 px-5 lg:px-0"
        id="what-we-do"
      >
        <div className="container mx-auto my-14 flex flex-col items-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-8 text-green">
            What we do?
          </h1>
          <p className="max-w-6xl text-xl lg:text-4xl text-gray-800 text-center">
            Memanfaatkan teknologi untuk menciptakan inovasi dalam memfasilitasi
            pembelajaran dan meningkatkan performa manusia.
          </p>
          <a
            href="#"
            className="bg-gray-700 hover:bg-gray-900 text-white text-lg w-full py-4 text-center lg:w-fit lg:py-8 lg:px-24 rounded-full mt-12"
          >
            Pelajari aksi kami
          </a>
        </div>
      </section>
      <section
        className="bg-brandyellow text-gray-800 py-12 px-5 lg:px-0"
        id="product-scale"
      >
        <div className="container mx-auto my-24 flex flex-col items-center">
          <h1 className="text-6xl font-bold mb-24 text-gray-800">
            The impact of our program
          </h1>
          <div className="flex flex-col lg:flex-row mt-6 justify-around items-center w-full text-center space-y-8">
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-8xl font-bold mb-1 text-gray-800">6</h1>
              <p className="text-4xl text-gray-800 max-w-xs">
                Kerjasama Kemahasiswaan
              </p>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <h1 className="text-8xl font-bold mb-1 text-gray-800">12</h1>
              <p className="text-4xl text-gray-800 max-w-xs">
                Peningkatan kompetensi
              </p>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <h1 className="text-8xl font-bold mb-1 text-gray-800">3</h1>
              <p className="text-4xl text-gray-800 max-w-xs">
                Partner industri teknologi
              </p>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <h1 className="text-8xl font-bold mb-1 text-gray-800">8</h1>
              <p className="text-4xl text-gray-800 max-w-xs">
                Aplikasi open source
              </p>
            </div>
          </div>
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
        className="bg-gray-100 text-gray-800 py-8 px-5 lg:px-0"
        id="our-partner"
      >
        <div className="container py-20 mx-auto flex flex-col items-center justify-center">
          <h1 className="text-6xl font-bold mb-14">Our Partner</h1>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 w-full">
            {partner.map((item) => (
              <div key={item.name} className="text-center">
                <div className="flex flex-col items-center py-6 space-y-6">
                  <div className="">
                    <Image
                      className=""
                      src={item.logo}
                      alt=""
                      width={300}
                      height={300}
                    />
                  </div>
                  <p className="text-sm max-w-xs">{item.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
        className="bg-gray-100 min-h-screen text-gray-800 py-8 mb-16 px-5 lg:px-0"
        id="our-team"
      >
        <div className="container py-20 mx-auto flex flex-col items-center justify-center">
          <h1 className="text-6xl font-bold mb-14">Meet the Team</h1>
          <p className="max-w-6xl text-xl lg:text-center mb-32">
            Kami terdiri dari berbagai latar belakang yang berbeda, mulai dari
            mahasiswa, dosen, hingga profesional. Kami memiliki tujuan yang
            sama, yaitu menciptakan teknologi yang dapat digunakan oleh semua
            orang.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-24 w-full">
            {peoples.map((item) => (
              <div key={item.name} className="text-center">
                <div className="flex flex-col items-center py-6 space-y-6">
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
                    <p className="text-2xl underline font-bold">{item.name}</p>
                    <p className="text-xl max-w-xs">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
        className="bg-gray-800 text-gray-100 px-5 lg:px-0 py-10"
        id="what-can-we-solve"
      >
        <div className="container mx-auto my-14 flex flex-col items-center">
          <h1 className="text-6xl font-bold mb-8 text-gray-100">
            What problems we could solve next?
          </h1>
          <p className="max-w-6xl text-xl lg:text-4xl lg:text-center">
            Layaknya era pendidikan dan kehidupan manusia, kita dituntut untuk
            bergerak secara adaptif dan kolaboratif dengan tujuan menciptakan
            kehidupan yang lebih baik bagi diri sendiri dan masyarakat luas.
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
