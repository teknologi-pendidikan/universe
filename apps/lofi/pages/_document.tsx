import Footer from 'components/Footer'
import Navbar from 'components/Navbar'
import { randomBytes } from 'crypto'
import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  const nonce = randomBytes(128).toString('base64')
  const csp = `
      connect-src 'self' webpack://* https: data:;
      frame-src https://googleads.g.doubleclick.net https://www.google.com https://tpc.googlesyndication.com;
      img-src 'self' blob: https://pagead2.googlesyndication.com https://*.teknologipendidikan.or.id https://is3.cloudhost.id/teknologipendidikan/ https://drive.google.com https://*.googleusercontent.com https://www.netlify.com/img/;
      script-src 'self' 'unsafe-eval' 'unsafe-inline' 'nonce-${nonce}' 'strict-dynamic' https://www.googletagmanager.com/gtag/js https://netlify-rum.netlify.app/ https://pagead2.googlesyndication.com https://partner.googleadservices.com https://adservice.google.com https://tpc.googlesyndication.com;
      style-src 'self' 'unsafe-inline';
      worker-src 'self' blob:;`
  return (
    <Html lang="id">
      <Head nonce={nonce}>
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
        {/* Content Security Policy Rules */}
        <meta httpEquiv="Content-Security-Policy" content={csp} />
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
