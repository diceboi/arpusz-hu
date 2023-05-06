import '@/styles/globals.css'
import { Inter } from 'next/font/google'

import MainMenu from '@/components/mainmenu'
import { Main } from 'next/document'

const inter = Inter({ subsets: ['latin'] })

export default function MyApp({ Component, pageProps, className }) {
  return (
    <main className={inter.className}>
      <MainMenu className={className} />
      <Component {...pageProps}>
      </Component >
    </main>
  )
}