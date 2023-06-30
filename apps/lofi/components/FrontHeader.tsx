import LogoLOFI from 'assets/logo-lofi.svg'
import Image from "next/image"

export default function FrontHeader() {
  return (
    <section
      id="frontheader"
      className="container mx-auto px-4 my-10 max-w-screen-xl"
    >
      <div className="grid grid-cols-3">
        <div className="flex justify-around items-center">
          <p>Riset</p>
          <p>Pendidikan</p>
          <p>Kebijakan</p>
        </div>
        <div className="flex justify-center items-center">
          <Image src={LogoLOFI} alt="Logo LOFI" width={200} height={200} />
        </div>
        <div className="flex justify-around items-center">
          <p>Event</p>
          <p>Institute</p>
          <p>Publikasi</p>
        </div>
      </div>
    </section>
  )
}
