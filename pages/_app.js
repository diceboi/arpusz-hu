import '../styles/globals.css';
import { Inter } from 'next/font/google';
import MainMenu from '../components/mainmenu';
import Footer from '../components/footer'
import Head from 'next/head';
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

const inter = Inter({ subsets: ['latin'] })

export default function MyApp({ Component, pageProps, className }) {
  return (
    <>
    
    <Head>
      <title>Arpusz.hu Púrhab szigetelés</title>
      <link rel="icon" href="/favicon.svg" />
    </Head>
    <MainMenu />
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.RECAPTCH_SITE_KEY}
      scriptProps={{
        async: false,
        defer: false,
        appendTo: "head",
        nonce: undefined,
      }}
    >
    </GoogleReCaptchaProvider>
    <main className={inter.className}>
      <Component {...pageProps} className="w-screen overflow-hidden">
      </Component >
    </main>
    <Footer />
    
    </>
  )
}