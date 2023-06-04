import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';

import MainMenu from '@/components/mainmenu'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export default function MyApp({ Component, pageProps, }: AppProps) {
  return (
    <>
    <main className={inter.className}>
      <MainMenu />
      <Component {...pageProps} >
      </Component >
      <Analytics />
      <Footer />
    </main>
    </>
  )
}