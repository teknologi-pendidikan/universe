'use client'

import { ContentNavigation, GlobalNavigation } from 'data/SiteNavigation.config'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NavigationBar() {
  const pathname = usePathname()
  return (
    <header
      id="component-layout-header"
      className="absolute inset-x-0 top-0 w-full bg-white shadow-md"
    >
      <div
        id="global-navigation"
        className="container mx-auto flex items-center justify-between py-5"
      >
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <img
              src="/logo-horizontal-color.svg"
              alt="Logo EDTECH-ID"
              className="h-8 w-full"
            />
          </Link>
        </div>
        <nav className="flex items-center justify-around space-x-8 text-lg">
          {GlobalNavigation.map((item) => (
            <Link
              key={item.url}
              href={item.url}
              className={
                pathname === item.url
                  ? 'text-gray-800 underline underline-offset-8 transition duration-300 hover:text-gray-600'
                  : 'text-gray-800 transition duration-300 hover:text-gray-600'
              }
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
      <div
        id="content-navigation"
        className="item-start flex justify-between bg-brandblue py-5"
      >
        <nav className="container mx-auto flex items-center justify-start space-x-8 text-xl font-bold text-white">
          {ContentNavigation.map((item) => (
            <Link key={item.url} href={item.url}>
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
