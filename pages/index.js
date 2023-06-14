import Image from 'next/image'
import { Inter } from 'next/font/google'
import { AiFillStar } from 'react-icons/ai'
import { BiChevronDown } from 'react-icons/bi'
import { FaRegEnvelope } from 'react-icons/fa'
import Link from 'next/link'
import Head from 'next/head'
import SecondaryCTA from '../components/secondarycta'
import Hero from '../components/homepage/hero-home'
import Purhab from '../components/homepage/purhab-home'
import SzolgaltatasokHome from '../components/homepage/szolgaltatasok-home'
import Lepesek from '../components/homepage/lepesek-home'
import ReferenciakHome from '../components/homepage/referenciak-home'
import GyikHome from '../components/homepage/gyik-home'
import BlogHome from '../components/homepage/blog-home'
import CtaHome from '../components/homepage/cta-home'
import Velemenyek from '../components/velemenyek'

export default function Home() {
  return (
    <>
    <Head>
      <title>Púrhab Szigetelés - Online Árkalkuláció - Arpusz.hu</title>
        <meta name="description" content="Lépj át a 21. századba a bizonyítottan legjobb, széles körben is használt púrhab szigeteléssel. Legyen szó tető szigetelésről, aljzat vagy lábazat szigetelésről, a púrhab minden problémára a legjobb orvosság!" key="desc" />
        <meta
          property="og:Hő, hang és vízszigetelés púrhabbal - Arpusz.hu"
          content="Tetők, Tetőterek, Lapostetők, Lábazatok, Pincék... tökéletes hő, hang és vízszigetelése púrhabbal. Kalkulálj árat még ma, online!"
        />
        <meta
          property="og:image"
          content="/arpusz-logo-header-01.png"
        />
    </Head>
    <Hero/>
    <Purhab/>
    <SzolgaltatasokHome/>
    <Lepesek/>
    <ReferenciakHome/>
    <Link className='flex justify-center pb-4' href="/referenciak"><SecondaryCTA>Még több referencia</SecondaryCTA></Link>
    <Velemenyek/>
    <GyikHome/>
    <BlogHome/>
    <CtaHome/>    
    </>
  )
}