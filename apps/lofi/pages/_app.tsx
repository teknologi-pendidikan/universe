import type { AppProps } from 'next/app'
import Script from 'next/script'
import { GoogleAnalytics, event } from 'nextjs-google-analytics'
import 'styles/globals.css'

type webVitals = {
  id: string
  name: string
  label: string
  value: number
}

export function reportWebVitals({ id, name, label, value }: webVitals) {
  event(name, {
    category: label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
    value: Math.round(name === 'CLS' ? value * 1000 : value),
    label: id,
    nonInteraction: true,
  })
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleAnalytics trackPageViews />
      <Script
        id="Adsense-id"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        crossOrigin="anonymous"
        data-ad-client="ca-pub-7675866095389123"
        async
        strategy="afterInteractive"
        onError={(e) => {
          console.error('Script failed to load', e)
        }}
      ></Script>
      <Component {...pageProps} />
    </>
  )
}
