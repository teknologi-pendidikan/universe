import Image from 'next/image'
import Link from 'next/link'

export function ThematicCard() {
  return (
    <Link
      className="flex flex-col items-start justify-start space-y-2 rounded-lg border border-gray-300"
      href="/"
    >
      <Image
        className="h-44 w-full rounded-t-lg object-cover object-right-top"
        src="/placeholder.jpg"
        alt="thematic"
      />
      <div className="flex w-full flex-col items-start justify-center space-y-1 p-3">
        <h3 className="text-2xl font-bold text-gray-800 hover:underline">
          Judul Sumber Belajar
        </h3>
        <p className="text-sm text-gray-600">Dibuat oleh nama pengguna</p>
        <p className="text-base text-gray-800">
          Deskripsi singkat sumber belajar
        </p>
        <p className="text-sm text-gray-600">tanggal 20 Agustus 2023</p>
      </div>
    </Link>
  )
}
