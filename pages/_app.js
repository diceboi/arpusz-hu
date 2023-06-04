import '@/styles/globals.css'
import { Inter } from 'next/font/google'

import MainMenu from '@/components/mainmenu'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export default function MyApp({ Component, pageProps, className }) {
  return (
    <main className={inter.className}>
      <MainMenu />
      <Component {...pageProps} className="w-screen overflow-hidden">
      </Component >
      <Footer />
    </main>
  )
}