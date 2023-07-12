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
      className="fixed inset-x-0 top-0 z-50 w-full bg-white shadow-md"
      onScroll={
        // hide global navigation when scrolling down
        () => {
          const globalNavigation = document.getElementById('global-navigation')
          if (globalNavigation) {
            if (window.scrollY > 0) {
              globalNavigation.classList.add('hidden')
            } else {
              globalNavigation.classList.remove('hidden')
            }
          }
        }
      }
    >
      <div
        id="global-navigation"
        className="container mx-auto flex items-center justify-between py-5"
      >
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo-horizontal-color.svg"
              alt="Logo EDTECH-ID"
              className="h-8 w-full"
              width={100}
              height={50}
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
