'use client'

import symbol_horizontal from 'assets/symbol-horizontal.svg'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAVLINK = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/about-us',
    label: 'Tentang Kami',
  },
  {
    href: '/our-works',
    label: 'Ciptaan Kami',
  },
  {
    href: '/career',
    label: 'Career',
  },
]

function Navbar() {
  const router = usePathname()
  return (
    <header
      id="navbar-wrapper"
      className="py-12 text-xl text-gray-800"
    >
      <div className="container mx-auto flex flex-row items-center justify-center lg:justify-between">
        <Image src={symbol_horizontal} alt="logo" width={200} height={50} />
        <nav className="hidden items-center space-x-8 lg:block">
          {NAVLINK.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={
                router === item.href
                  ? 'text-gray-800 underline underline-offset-8 transition duration-300 hover:text-gray-600'
                  : 'text-gray-800 transition duration-300 hover:text-gray-600'
              }
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Navbar
