import '../styles/globals.css';
import { Inter } from 'next/font/google';
import MainMenu from '../components/mainmenu';
import Footer from '../components/footer'
import Head from 'next/head';
import Script from 'next/script';
import { ReCaptchaProvider } from "next-recaptcha-v3";

const inter = Inter({ subsets: ['latin'] })

export default function MyApp({ Component, pageProps, className }) {
  return (
    <>
    <ReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}>
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
    </ReCaptchaProvider>
    </>
  )
}