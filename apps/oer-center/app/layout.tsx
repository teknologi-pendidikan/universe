import NavigationBar from 'components/common/NavigationBar'
import GoogleAnalytics from 'components/libs/GoogleAnalytics'
import GlobalSiteContent from 'data/site.content.json'
import type { Metadata } from 'next'
import React from 'react'

// These styles apply to every route in the application
import './globals.css'

export const metadata: Metadata = {
  title: GlobalSiteContent.globalContentData.title,
  description: GlobalSiteContent.globalContentData.productDescription,
  manifest: '/manifest.json',
  creator: GlobalSiteContent.globalContentData.creator,
  themeColor: '#FFD026',
  keywords: [
    'oer',
    'open educational resources',
    'edtech',
    'edtech-id',
    'teknologi pendidikan',
    'teknologi pendidikan id',
    'teknologi pendidikan indonesia',
  ],
  viewport: 'width=device-width, initial-scale=1.0',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: GlobalSiteContent.globalContentData.url,
    siteName: GlobalSiteContent.globalContentData.title,
    title: GlobalSiteContent.globalContentData.title,
    description: GlobalSiteContent.globalContentData.productDescription,
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: GlobalSiteContent.globalContentData.title,
      },
    ],
  },
  abstract: GlobalSiteContent.globalContentData.description,
  metadataBase: new URL('https://sumberbelajar.teknologipendidikan.sch.id'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <GoogleAnalytics GA_TRACKING_ID="G-TVTC8YPJ0H" />
      <body>
        <a
          href="#main-content"
          className="fixed -left-64 z-50 rounded-lg bg-gray-900 p-4 text-2xl font-bold text-white focus:left-4 focus:top-4"
        >
          Skip Navigation
        </a>
        <NavigationBar />
        {children}
      </body>
    </html>
  )
}
