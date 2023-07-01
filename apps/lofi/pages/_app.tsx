import type { AppProps } from 'next/app'
import { GoogleAnalytics, event } from 'nextjs-google-analytics'
import 'styles/globals.css'

export function reportWebVitals({ id, name, label, value }) {
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
      <Component {...pageProps} />
    </>
  )
}
