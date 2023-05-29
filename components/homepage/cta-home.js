import Image from 'next/image'
import Link from 'next/link'

export default function CtaHome() {
    return(
        <>
            <section className='w-full overflow-hidden'>

                <Link href="/kalkulator">
                <div className='flex w-11/12 lg:w-8/12 m-auto items-start flex-col p-4 my-4 bg-gradient-to-r from-[#06A452] to-[#8AECB9] base-tile relative overflow-hidden col-span-2 rounded-xl h-full min-h-[250px] hover:shadow-xl'>
                        <Image className='absolute right-5 bottom-0 w-[150px] h-[150px] lg:w-[200px] lg:h-[200px]' src='/hand.png' height={200} width={200}></Image>
                        <h2 className='text-4xl text-white font-normal z-[1]'>Számold ki</h2>
                        <h1 className='text-5xl text-white font-black z-[1]'>3 lépésben</h1>
                        <p className='text-lg text-white font-normal z-[1] w-1/2'>a te igényeidnek megfelelő púrhab szigetelést kalkulátorunkkal!</p>
                        
                </div>
                </Link>

            </section>
        </>
    )
}