import symbol_horizontal from 'assets/symbol-horizontal.svg'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

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
  const router = useRouter()
  return (
    <header
      id="navbar-wrapper"
      className="py-12 text-xl bg-gray-100 text-gray-800"
    >
      <div className="container mx-auto flex flex-row items-center justify-center lg:justify-between">
        <Image src={symbol_horizontal} alt="logo" width={200} height={50} />
        <nav className="hidden lg:block space-x-8 items-center">
          {NAVLINK.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={
                router.pathname === item.href
                  ? 'text-gray-800 hover:text-gray-600 transition duration-300 underline underline-offset-8'
                  : 'text-gray-800 hover:text-gray-600 transition duration-300'
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
