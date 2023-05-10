import '@/styles/globals.css'
import { Inter } from 'next/font/google'

import MainMenu from '@/components/mainmenu'

const inter = Inter({ subsets: ['latin'] })

export default function MyApp({ Component, pageProps, className }) {
  return (
    <main className={inter.className}>
      <MainMenu />
      <Component {...pageProps}>
      </Component >
    </main>
  )
}