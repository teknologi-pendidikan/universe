import NavigationBar from 'components/common/NavigationBar'
import type { Metadata } from 'next'
import React from 'react'

// These styles apply to every route in the application
import './globals.css'

export const metadata: Metadata = {
  title: 'OER Center - EDTECH-ID',
  description:
    'Open Educational Resource Center is Open Educational Resources managed and operated by Teknologi Pendidikan ID. This OER mainly focused on professional development in scope of educational technology proficiency.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body>
        <NavigationBar />
        {children}
      </body>
    </html>
  )
}