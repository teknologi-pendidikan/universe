'use client'

import { ContentNavigation, GlobalNavigation } from 'data/SiteNavigation.config'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NavigationBar() {
  const pathname = usePathname()
  return (
    <header
      id="component-layout-header"
      className="w-full shadow-md bg-white absolute top-0 inset-x-0"
    >
      <div
        id="global-navigation"
        className="flex justify-between items-center container mx-auto py-5"
      >
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <img
              src="/logo-horizontal-color.svg"
              alt="Logo EDTECH-ID"
              className="w-full h-8"
            />
          </Link>
        </div>
        <nav className="flex items-center justify-around text-lg space-x-8">
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
        className="py-5 flex justify-between item-start bg-brandblue"
      >
        <nav className="flex items-center justify-start text-xl text-white font-bold space-x-8 mx-auto container">
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
