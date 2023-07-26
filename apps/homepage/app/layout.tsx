import Footer from 'components/organism.footer'
import Navbar from 'components/organism.navbar'
import { randomUUID } from 'crypto'
import GlobalSiteContent from 'data/site.content.json'
import type { Metadata } from 'next'
import Script from 'next/script'
import React from 'react'
import { Organization, WithContext } from 'schema-dts'

// These styles apply to every route in the application
import './globals.css'

export const metadata: Metadata = {
  title: GlobalSiteContent.globalContentData.title,
  description: GlobalSiteContent.globalContentData.description,
  manifest: '/manifest.json',
  creator: GlobalSiteContent.globalContentData.creator,
  themeColor: '#FFD026',
  keywords: [
    'teknologi pendidikan',
    'teknologi pendidikan id',
    'teknologi pendidikan indonesia',
    'teknologi pendidikan indonesia id',
    'teknologi pendidikan indonesia institute',
    'teknologi pendidikan institute',
    'edtech id',
  ],
  viewport: 'width=device-width, initial-scale=1.0',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: GlobalSiteContent.globalContentData.url,
    siteName: GlobalSiteContent.globalContentData.title,
    title: GlobalSiteContent.globalContentData.title,
    description: GlobalSiteContent.globalContentData.description,
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
  const jsonLd: WithContext<Organization> = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Teknologi Pendidikan ID',
    image: 'https://teknologipendidikan.sch.id/images/icon-512x512.png',
    description: GlobalSiteContent.globalContentData.description,
    url: GlobalSiteContent.globalContentData.url,
    subOrganization: [
      {
        '@type': 'Organization',
        name: 'EDTECH-ID Institute',
        url: 'https://institute.teknologipendidikan.or.id',
        logo: 'https://teknologipendidikan.id/images/logo-512x512.png',
      },
      {
        '@type': 'Organization',
        name: 'UPT Pusat Sumber Belajar',
        url: 'https://sumberbelajar.teknologipendidikan.sch.id',
        logo: 'https://sumberbelajar.teknologipendidikan.sch.id/images/icon-512x512.png',
      },
    ],
    slogan: 'Inovasi. Teknologi. Pembelajaran.',
    sameAs: [
      'https://www.facebook.com/teknologipendidikan.or.id',
      'https://www.instagram.com/teknologipendidikan.or.id',
      'https://www.youtube.com/@teknologi-pendidikan',
      'https://twitter.com/haloedtechid',
      'https://www.linkedin.com/company/teknologipendidikan',
    ],
  }

  return (
    <html lang="id">
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        key={`json-ld-${jsonLd['@type']}`}
        id={`json-ld-${jsonLd['@type']}-${randomUUID()}`}
      />
      <body className="bg-gray-100">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
