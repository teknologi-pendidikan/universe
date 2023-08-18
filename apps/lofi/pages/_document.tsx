import Footer from 'components/Footer'
import Navbar from 'components/Navbar'
import { randomBytes } from 'crypto'
import { Head, Html, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  const nonce = randomBytes(128).toString('base64')
  const csp = `
      connect-src 'self' webpack://* https: data:;
      frame-src https:;
      img-src 'self' blob: https:;
      script-src 'self' 'unsafe-eval' 'unsafe-inline' 'nonce-${nonce}' 'strict-dynamic' https:;
      style-src 'self' 'unsafe-inline';
      worker-src 'self' blob:;`
  return (
    <Html lang="id">
      <Head nonce={nonce}>
        <meta
          name="description"
          content="Redaksi EDTECH-ID | Majalah dan Surat Kabar Teknologi Pendidikan"
        />
        <link rel="manifest" href="/manifest.webmanifest" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="robots" content="index, follow" />
        {/* favicon */}
        <link rel="icon" href="/icons/favicon.ico" />
        <link rel="icon" href="/icons/favicon-16x16.png" sizes="16x16" />
        <link rel="icon" href="/icons/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" href="/icons/favicon-48x48.png" sizes="48x48" />
        <link rel="icon" href="/icons/favicon-62x62.png" sizes="62x62" />
        <link rel="icon" href="/icons/favicon-192x192.png" sizes="192x192" />
        <link rel="icon" href="/icons/favicon-512x512.png" sizes="512x512" />
        {/* Content Security Policy Rules */}
        <meta httpEquiv="Content-Security-Policy" content={csp} />
        <Script
          id="Adsense-id"
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7675866095389123`}
          crossOrigin="anonymous"
          data-ad-client="ca-pub-7675866095389123"
          async
          strategy="lazyOnload"
          onError={(e) => {
            console.error('Script failed to load', e)
          }}
        />
      </Head>
      <body>
        <Navbar />
        <Main />
        <Footer />
        <NextScript nonce={nonce} />
      </body>
    </Html>
  )
}
