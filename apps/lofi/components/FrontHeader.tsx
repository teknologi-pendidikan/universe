import LogoLOFI from 'assets/logo-lofi.svg'
import Image from "next/image"

export default function FrontHeader() {
  return (
    <section
      id="frontheader"
      className="container mx-auto px-4 my-10 max-w-screen-xl pt-12"
    >
      <div className="flex flex-row justify-around items-center">
        <div className="hidden lg:flex justify-between space-x-12 items-center">
          <p>Riset</p>
          <p>Pendidikan</p>
          <p>Kebijakan</p>
        </div>
        <div className="md:col-span-2 justify-center items-center">
          <Image src={LogoLOFI} alt="Logo LOFI" width={200} height={200} />
        </div>
        <div className="hidden lg:flex justify-between space-x-12 items-center">
          <p>Event</p>
          <p>Institute</p>
          <p>Publikasi</p>
        </div>
      </div>
      <h1 className="text-center w-full pt-12 text-2xl font-semibold">Redaksi EDTECH-ID | Majalah dan Surat Kabar Teknologi Pendidikan</h1>
    </section>
  )
}
