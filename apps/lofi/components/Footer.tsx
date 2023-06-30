import LogoLOFI from 'assets/logo-lofi.svg'
import Image from 'next/image'
export default function Footer() {
  return (
    <footer className="border border-t-2 border-gray-300">
      <div className="mx-auto container px-4 mb-8 mt-5 pt-4 max-w-screen-xl">
        <div className="flex flex-col space-y-6">
          <Image src={LogoLOFI} alt="Logo LOFI" width={200} height={200} />
          <div className="flex flex-col justify-start items-start">
            <p className="font-bold text-brandblue-700">Kantor Redaksi</p>
            <p>Direktorat Inovasi, Komunikasi, dan Kerjasama</p>
            <p>Subdirektorat Komunikasi dan Kerjasama</p>
            <p>Teknologi Pendidikan ID (EDTECH-ID)</p>
          </div>
        </div>
      </div>
        <div className="mx-auto container px-4 pb-8 pt-1 max-w-screen-xl">
          <Image
            src="https://www.netlify.com/img/global/badges/netlify-dark.svg"
            alt="Deploys by Netlify"
            width={100}
            height={100}
          />
      </div>
    </footer>
  )
}
