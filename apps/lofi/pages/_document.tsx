import Footer from 'components/Footer'
import { Head, Html, Main, NextScript } from 'next/document'
import { Navbar } from 'ui'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Navbar />
        <Main />
        <Footer />
        <NextScript />
      </body>
    </Html>
  )
}
