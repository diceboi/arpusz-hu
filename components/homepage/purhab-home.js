import Image from 'next/image'
import Link from 'next/link'
import MainCTA from '../maincta'
import SecondaryCTA from '../secondarycta'
import {FaCrown} from 'react-icons/fa'


export default function Purhab() {
    return(
        <>
            <section className='flex flex-col justify-center items-center w-full overflow-hidden h-auto lg:h-screen bg-white py-12'>
                <div className='flex flex-col w-[90vw] lg:w-8/12 py-4 lg:py-8'>
                <h1 className='text-center m-auto text-6xl lg:text-8xl font-black text-white px-4 tracking-tighter bg-gradient-to-r from-[#06A452] to-[#0DC666] py-2'>Púrhab</h1>
                    <h1 className='text-center m-auto text-4xl lg:text-6xl font-black tracking-tighter py-2'>A legjobb szigetelő</h1>
                    <p  className='text-center lg:text-lg w-11/12 lg:w-1/2 m-auto py-2 uppercase tracking-widest text-neutral-400 font-bold'>Miért a púrhab a szigetelőanyagok etalonja? </p>
                </div>
                <div className='flex flex-col lg:flex-row w-full lg:w-8/12 items-center p-2 lg:py-8'>

                    <div className='relative flex flex-col items-center w-full lg:w-1/2 '>
                    
                    <div className='absolute bottom-0 left-0 bg-[#06A452] w-full h-full rounded-full blur-3xl opacity-10 z-0'></div>
                    
                    <div className='relative flex w-11/12 lg:w-8/12 bg-white shadow-xl rounded-xl z-[4] ease-in-animation'>
                        <FaCrown className='absolute w-14 h-14 text-[#06A452] -top-11 -left-5 -rotate-12'/>
                        <div className='w-1/3 p-4'><Image className='rounded-lg' src='/purhab.jpg' height={500} width={400}></Image></div>
                        <div className='flex flex-col justify-between'>
                        <h2 className='pt-4 uppercase font-bold text-xl'>Zárt cellás púrhab</h2>
                        <div className='py-4'>
                            <p className='text-md'>U-érték (λ):</p>
                            <div className='flex items-baseline gap-2'>
                            <p className='text-xl font-black'>~ 0.023</p>
                            <p className='text-sm'>W/m²K</p>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className='-mt-4 flex w-10/12 lg:w-7/12 bg-white border border-neutral-200 rounded-xl z-[3] blur-[1px] opacity-60 ease-in-animation-1s'>
                        <div className='w-1/3 p-4'><Image src='/eps.png' height={400} width={400}></Image></div>
                        <div className='flex flex-col justify-between '>
                        <h2 className='pt-3 uppercase font-bold text-lg'>Polisztirol (EPS)</h2>
                        <div className='py-3'>
                            <p className='text-sm'>U-érték (λ):</p>
                            <div className='flex items-baseline gap-2'>
                            <p className='text-lg font-black'>~ 0.040</p>
                            <p className='text-sm'>W/m²K</p>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className='-mt-4 flex w-9/12 lg:w-6/12 bg-white border border-neutral-200 rounded-xl z-[2] blur-[1px] opacity-40 ease-in-animation-2s'>
                        <div className='w-1/3 p-4'><Image src='/kozetgyapot.png' height={400} width={400}></Image></div>
                        <div className='flex flex-col justify-between '>
                        <h2 className='pt-3 uppercase font-bold text-md'>Kőzetgyapot</h2>
                        <div className='py-3'>
                            <p className='text-xs'>U-érték (λ):</p>
                            <div className='flex items-baseline gap-2'>
                            <p className='text-md font-black'>~ 0.044</p>
                            <p className='text-xs'>W/m²K</p>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className='-mt-4 flex w-8/12 lg:w-5/12 bg-white border border-neutral-200 rounded-xl z-[1] blur-[1px] opacity-20 ease-in-animation-3s'>
                        <div className='w-1/3 p-4'><Image src='/kozetgyapot.png' height={400} width={400}></Image></div>
                        <div className='flex flex-col justify-between '>
                        <h2 className='pt-3 uppercase font-bold text-md'>Üveggyapot</h2>
                        <div className='py-3'>
                            <p className='text-xs'>U-érték (λ):</p>
                            <div className='flex items-baseline gap-2'>
                            <p className='text-md font-black'>~ 0.058</p>
                            <p className='text-xs'>W/m²K</p>
                            </div>
                        </div>
                        </div>
                    </div>

                    </div>

                    <div className='flex flex-col w-11/12 lg:w-1/3 my-4 text-center gap-8'>
                    <p className=' text-left lg:text-center'>U-érték, Watt per négyzetméterkelvin, porózusság... Ezek mind olyan fogalmak amikről egy laikusnak nem sok minden jut az eszébe, viszont szigetelés szempontjából nagyon fontosak. Hogy ne kelljen tovább keress, összeszedtük neked minden információt, ami megmutatja, hogy miért kiemelkedő a szórt púrhab a többi szigetelőanyaghoz képest.
                    </p>
                    <Link href="/purhabrol-bovebben"><SecondaryCTA>A púrhabról bővebben</SecondaryCTA></Link>
                    </div>
                </div>
                <Link href="/kalkulator"><MainCTA>A legjobb szigetelés szeterném</MainCTA></Link>
            </section>
        </>
    )
}