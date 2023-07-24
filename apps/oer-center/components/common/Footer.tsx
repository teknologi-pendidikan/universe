import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="border border-t-2 border-gray-300">
      <div className="container mx-auto mb-8 mt-5 ">
        <div className="flex flex-col space-y-6">
          <div className="flex flex-col items-start justify-start">
            <p className="font-bold text-brandblue-700">
              Educational Technology OER Repository
            </p>
            <p>UPT Pusat Sumber Belajar, EDTECH-ID Institute Project</p>
            <p>Direktorat Program Akademik dan Kependidikan</p>
            <p>Teknologi Pendidikan ID (EDTECH-ID)</p>
          </div>
        </div>
      </div>
      <div className="container mx-auto pb-8 pt-1">
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
