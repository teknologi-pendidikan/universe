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
        url: 'https://sumberbelajar.teknologipendidikan.sch.id/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: GlobalSiteContent.globalContentData.title,
      },
    ],
  },
  abstract: GlobalSiteContent.globalContentData.description,
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
        <NavigationBar />
        {children}
      </body>
    </html>
  )
}
