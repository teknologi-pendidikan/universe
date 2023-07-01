import Footer from 'components/Footer'
import Navbar from 'components/Navbar'
import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="id">
      <Head>
        <meta name="theme-color" content="#10528B" />
        <meta
          name="description"
          content="Redaksi EDTECH-ID | Majalah dan Surat Kabar Teknologi Pendidikan"
        />
        <link rel="manifest" href="/manifest.webmanifest" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="robots" content="index, follow" />
        {/* favicon */}
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <link rel="icon" href="/icons/favicon.ico" />
        <link rel="icon" href="/icons/favicon-16x16.png" sizes="16x16" />
        <link rel="icon" href="/icons/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" href="/icons/favicon-48x48.png" sizes="48x48" />
        <link rel="icon" href="/icons/favicon-62x62.png" sizes="62x62" />
        <link rel="icon" href="/icons/favicon-192x192.png" sizes="192x192" />
        <link rel="icon" href="/icons/favicon-512x512.png" sizes="512x512" />
      </Head>
      <body>
        <Navbar />
        <Main />
        <Footer />
        <NextScript />
      </body>
    </Html>
  )
}
