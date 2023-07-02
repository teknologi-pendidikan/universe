import Footer from 'components/organism.footer'
import Navbar from 'components/organism.navbar'
import 'styles/globals.css'

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
