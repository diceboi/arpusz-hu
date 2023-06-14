import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import { AiFillStar } from 'react-icons/ai'
import { BiChevronDown } from 'react-icons/bi'
import SzolgaltatasokHome from '../components/homepage/szolgaltatasok-home'
import CtaHome from '../components/homepage/cta-home'
import SecondaryCTA from '../components/secondarycta'


export default function Szolgaltatasok() {
    return (
    <>
    <Head>
      <title>Szolgáltatások - Púrhab Szigetelés - Arpusz.hu</title>
        <meta name="description" content="Tetők, Tetőterek, Lapostetők, Lábazatok, Pincék... tökéletes hő, hang és vízszigetelése púrhabbal. Kalkulálj árat online!" key="desc" />
        <meta property="og:Hő, hang és vízszigetelés púrhabbal - Arpusz.hu" content="Tetők, Tetőterek, Lapostetők, Lábazatok, Pincék... tökéletes hő, hang és vízszigetelése púrhabbal. Kalkulálj árat online!" />
        <meta
          property="og:Hő, hang és vízszigetelés púrhabbal - Arpusz.hu"
          content="Tetők, Tetőterek, Lapostetők, Lábazatok, Pincék... tökéletes hő, hang és vízszigetelése púrhabbal. Kalkulálj árat még ma, online!"
        />
        <meta
          property="og:image"
          content="/arpusz-logo-header-01.png"
        />
    </Head>
    <section className='flex flex-col justify-center items-center w-full max-h-fit pb-12 pt-[75px]'>

      <div className='flex flex-col justify-center items-center w-11/12 lg:w-8/12 py-8'>
        <h1 className='text-center m-auto text-4xl lg:text-6xl font-black tracking-tighter py-2'>Szolgáltatások</h1>
        <p  className='text-center lg:text-lg w-11/12 lg:w-1/2 m-auto py-2 uppercase tracking-widest text-neutral-400 font-bold'>Vállalkozásunk szórt púrhab szigeteléssel foglalkozik</p>
      </div>

      <div className='flex justify-center items-center w-full h-auto lg:h-[60vh] bg-neutral-100 py-16 lg:py-8'>
        <div className='flex flex-col gap-8 lg:flex-row justify-center items-center w-11/12 lg:w-8/12'>
          <div className="lg:w-1/2 w-full h-[200px] lg:h-[400px] rounded-xl bg-[url('/csaladi-haz.jpg')] bg-cover bg-center"></div>
          <div className='flex flex-col gap-4 lg:w-1/2 w-full justify-center items-start'>
            <Image src='/csaladi-haz-icon.svg' height={50} width={50}></Image>
            <h2 className='text-3xl font-black'>Családi házak szigetelése</h2>
            <p>A családi házak szórt púrhabbal történő szigetelése hatékony hőszigetelést biztosít neked, így kevesebbet kell majd költened fűtésre és hűtésre. Sőt, hangszigetelő tulajdonságának hála csendesebb otthont is teremt!</p> 
          </div>
        </div>
      </div>

      <div className='flex justify-center items-center w-full h-auto lg:h-[60vh] bg-white py-16 lg:py-8'>
        <div className='flex flex-col gap-8 lg:flex-row-reverse justify-center items-center w-11/12 lg:w-8/12'>
          <div className="lg:w-1/2 w-full h-[200px] lg:h-[400px] rounded-xl bg-[url('/panelhaz.jpg')] bg-cover bg-center"></div>
          <div className='flex flex-col gap-4 lg:w-1/2 w-full justify-center items-start'>
            <Image src='/panelhaz-icon.svg' height={50} width={50}></Image>
            <h2 className='text-3xl font-black'>Panelházak szigetelése</h2>
            <p>Lapostetők és pincehelységek szigetelésére is tökéletesen alkalmas, így száraz és konfortos környezetben élhetnek az ott lakók.</p> 
          </div>
        </div>
      </div>

      <div className='flex justify-center items-center w-full h-auto lg:h-[60vh] bg-neutral-100 py-16 lg:py-8'>
        <div className='flex flex-col gap-8 lg:flex-row justify-center items-center w-11/12 lg:w-8/12'>
          <div className="lg:w-1/2 w-full h-[200px] lg:h-[400px] rounded-xl bg-[url('/uzem.jpg')] bg-cover bg-center"></div>
          <div className='flex flex-col gap-4 lg:w-1/2 w-full justify-center items-start'>
            <Image src='/uzem-icon.svg' height={50} width={50}></Image>
            <h2 className='text-3xl font-black'>Üzemek szigetelése</h2>
            <p>Küzdesz az elszállt energiaárakkal? A nagy légköbméterek klimatizálásának titka a jó szigetelés. Hatékonyságban pedig a púrhab verhetetlen.</p> 
          </div>
        </div>
      </div>

      <div className='flex justify-center items-center w-full h-auto lg:h-[60vh] bg-white py-16 lg:py-8'>
        <div className='flex flex-col gap-8 lg:flex-row-reverse justify-center items-center w-11/12 lg:w-8/12'>
          <div className="lg:w-1/2 w-full h-[200px] lg:h-[400px] rounded-xl bg-[url('/csarnok.jpg')] bg-cover bg-center"></div>
          <div className='flex flex-col gap-4 lg:w-1/2 w-full justify-center items-start'>
            <Image src='/csarnok-icon.svg' height={50} width={50}></Image>
            <h2 className='text-3xl font-black'>Csarnokok szigetelése</h2>
            <p>Hő és vízszigetelés egyben? Zárt cellás púrhabunk tökéletesen alkalmas csarnokok belső falainak és tetőszerkezetének szigetelésére. Ezt hívják úgy, hogy két legyet egy csapásra.</p> 
          </div>
        </div>
      </div>

      <div className='flex justify-center items-center w-full h-auto lg:h-[60vh] bg-neutral-100 py-16 lg:py-8'>
        <div className='flex flex-col gap-8 lg:flex-row justify-center items-center w-11/12 lg:w-8/12'>
          <div className="lg:w-1/2 w-full h-[200px] lg:h-[400px] rounded-xl bg-[url('/tartalyok.jpg')] bg-cover bg-center"></div>
          <div className='flex flex-col gap-4 lg:w-1/2 w-full justify-center items-start'>
            <Image src='/tartalyok-icon.svg' height={50} width={50}></Image>
            <h2 className='text-3xl font-black'>Tartályok szigetelése</h2>
            <p>Legyen az egy padláson elhelyezett puffer tartály, vagy egy ipari borhűtő tartály, a púrhab kiváló hatékonysága, és azon tulajdonsága, hogy mindenen megtapad, lehetőséget ad az ilyen és ehhez hasonló tartályok szigetelésére is.</p> 
          </div>
        </div>
      </div>

      <div className='flex justify-center items-center w-full h-auto lg:h-[60vh] bg-white py-16 lg:py-8'>
        <div className='flex flex-col gap-8 lg:flex-row-reverse justify-center items-center w-11/12 lg:w-8/12'>
          <div className="lg:w-1/2 w-full h-[200px] lg:h-[400px] rounded-xl bg-[url('/hutoipar.jpg')] bg-cover bg-center"></div>
          <div className='flex flex-col gap-4 lg:w-1/2 w-full justify-center items-start'>
            <Image src='/hutoipar-icon.svg' height={50} width={50}></Image>
            <h2 className='text-3xl font-black'>Hűtőipar</h2>
            <p>Hűtőkontéreket belső felületeinek szigetelésére is lehetőség van, ha szeretnéd csökkenteni a fentartási költségeidet.</p> 
          </div>
        </div>
      </div>

      <div className='flex justify-center items-center w-full h-auto lg:h-[60vh] bg-neutral-100 py-16 lg:py-8'>
        <div className='flex flex-col gap-8 lg:flex-row justify-center items-center w-11/12 lg:w-8/12'>
          <div className="lg:w-1/2 w-full h-[200px] lg:h-[400px] rounded-xl bg-[url('/csorendszer.jpg')] bg-cover bg-center"></div>
          <div className='flex flex-col gap-4 lg:w-1/2 w-full justify-center items-start'>
            <Image src='/csorendszer-icon.svg' height={50} width={50}></Image>
            <h2 className='text-3xl font-black'>Csőszigetelés</h2>
            <p>A csőrendszerek szigeteletlensége jelentős veszteséget jelenthet bármilyen keringető rendszerben. Erre a problémára is megoldást kínál a szúrt poliuretán hab.</p> 
          </div>
        </div>
      </div>

      <div className='flex justify-center items-center w-full h-auto lg:h-[60vh] bg-white py-16 lg:py-8'>
        <div className='flex flex-col gap-8 lg:flex-row-reverse justify-center items-center w-11/12 lg:w-8/12'>
          <div className="lg:w-1/2 w-full h-[200px] lg:h-[400px] rounded-xl bg-[url('/mobilgarazs.jpg')] bg-cover bg-center"></div>
          <div className='flex flex-col gap-4 lg:w-1/2 w-full justify-center items-start'>
            <Image src='/garazs-icon.svg' height={50} width={50}></Image>
            <h2 className='text-3xl font-black'>Mobilgarázsok szigetelése</h2>
            <p>Senki sem szereti téli reggeleken a szélvédőről és az ablakokról kapargatni a jeget indulás előtt. Kerüld ki ezeket a felesleges köröket, és fordítsd azt az extra 20 percet magadra, vagy családodra. Szigeteld púrhabbal a garázst.</p> 
          </div>
        </div>
      </div>

      <div className='flex justify-center items-center w-full h-auto lg:h-[60vh] bg-neutral-100 py-16 lg:py-8'>
        <div className='flex flex-col gap-8 lg:flex-row justify-center items-center w-11/12 lg:w-8/12'>
          <div className="lg:w-1/2 w-full h-[200px] lg:h-[400px] rounded-xl bg-[url('/pince.jpg')] bg-cover bg-center"></div>
          <div className='flex flex-col gap-4 lg:w-1/2 w-full justify-center items-start'>
            <Image src='/pince-icon.svg' height={50} width={50}></Image>
            <h2 className='text-3xl font-black'>Pincék szigetelése</h2>
            <p>Az erősen nedvességnek kitett pincékben kiváló megoldást nyújt a zárt cellás púrhab, ami akár már 3cm vastagság felett teljesen vízszigetel.</p> 
          </div>
        </div>
      </div>

      <CtaHome/>

    </section>

    
    </>
    )
}