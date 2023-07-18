'use client'

import { ContentNavigation, GlobalNavigation } from 'data/SiteNavigation.config'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NavigationBar() {
  const pathname = usePathname()
  return (
    <header
      id="component-layout-header"
      className="top-0 z-10 w-full bg-white shadow-md lg:fixed"
    >
      <div
        id="global-navigation"
        className="container mx-auto flex flex-col items-center justify-between space-y-5 py-5 lg:flex-row  lg:space-y-0"
      >
        <div className="flex items-center">
          <div className="flex items-center">
            <Image
              src="/logo-horizontal-color.svg"
              alt="Logo EDTECH-ID"
              className="h-8 w-full"
              width={100}
              height={50}
            />
          </div>
        </div>
        <nav className="flex items-center justify-around space-x-8 text-lg">
          {GlobalNavigation.map((item) => (
            <Link
              key={item.url}
              href={item.url}
              className={
                pathname === item.url
                  ? 'text-gray-800 underline underline-offset-8 transition duration-300 hover:font-semibold hover:text-gray-600'
                  : 'text-gray-800 transition duration-300 hover:font-semibold hover:text-gray-600'
              }
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
      <div
        id="content-navigation"
        className="item-start flex justify-between bg-brandblue-600 py-5"
      >
        <nav className="text-md container mx-auto flex items-center justify-center space-x-8 px-5 font-bold text-white lg:justify-start lg:px-0 lg:text-xl">
          {ContentNavigation.map((item) => (
            <Link
              key={item.url}
              href={item.url}
              className={
                pathname === item.url
                  ? 'text-white underline underline-offset-8 transition duration-300 hover:text-brandblue-800'
                  : 'text-white transition duration-300 hover:text-brandblue-800'
              }
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
