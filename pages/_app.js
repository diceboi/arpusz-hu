import '../styles/globals.css';
import { Inter } from 'next/font/google';
import MainMenu from '../components/mainmenu';
import Footer from '../components/footer'
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] })

export default function MyApp({ Component, pageProps, className }) {
  return (
    <>
    <Head>
      <title>Arpusz.hu Púrhab szigetelés</title>
      <link rel="icon" href="/favicon.svg" />
    </Head>
    <MainMenu />
    <main className={inter.className}>
      <Component {...pageProps} className="w-screen overflow-hidden">
      </Component >
    </main>
    <Footer />
    </>
  )
}