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
      <link rel="icon" href="/favicon.svg" />       
    </Head>
    <Script id='google-analytics' async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
      <Script id='google-analytics-2' dangerouslySetInnerHTML={{
        __html:`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
        `,
        }} 
      />
      <Script 
        id='hotjar'
        dangerouslySetInnerHTML={{
          __html: `
          (function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:3258159,hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `
        }}
      
      />
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