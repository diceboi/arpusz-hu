import Image from 'next/image'
import Link from 'next/link'
import MainCTA from '../maincta'
import SecondaryCTA from '../secondarycta'

export default function Hero() {
    return(
        <>
            <section className='relative flex flex-col items-center justify-center w-full overflow-hidden m-auto pt-[100px] lg:pt-[75px] h-auto lg:h-screen bg-neutral-100'>
                <div className='flex flex-col justify-evenly w-1/3 h-1/2 place-self-center m-auto min-w-full lg:min-w-[650px] z-10'>
                    <div className='flex flex-col m-auto w-11/12 lg:w-full'>
                    <Image src='/arpusz-logo-header-01.png' width={500} height={200} className='w-52 lg:w-1/2 self-center -mb-8'></Image>
                    <div className='flex justify-between h-10 overflow-hidden'>
                        <div className='line'></div>
                        <div className='line'></div>
                        <div className='line'></div>
                        <div className='line'></div>
                        <div className='line'></div>
                        <div className='line'></div>
                        <div className='line'></div>
                        <div className='line'></div>
                        <div className='line'></div>
                        <div className='line'></div>
                        <div className='line'></div>
                        <div className='line'></div>
                        <div className='line'></div>
                        <div className='line'></div>
                        <div className='line'></div>
                        <div className='line'></div>
                        <div className='line'></div>
                        <div className='line'></div>
                        <div className='line'></div>
                        <div className='line'></div>
                        <div className='line'></div>
                        <div className='line'></div>
                        <div className='line'></div>
                        <div className='line'></div>
                        <div className='line'></div>
                        <div className='line'></div>
                        <div className='line'></div>
                        <div className='line'></div>
                    </div>
                    <div className='relative h-24 lg:h-32 w-full border-t border-b border-neutral-400 text-5xl lg:text-7xl font-black tracking-tighter lg:p-6 overflow-hidden'>
                        <h1 className='legzaras-animation absolute'>Légzárás</h1>
                        <h1 className='hoszigeteles-animation absolute'>Hőszigetelés</h1>
                        <h1 className='vizzaras-animation absolute'>Vízszigetelés</h1>
                        <h1 className='hangszigeteles-animation absolute opacity-0'>Hangszigetelés</h1>
                    </div>
                    <div className='flex justify-between h-10 overflow-hidden'>
                        <div className='line2'></div>
                        <div className='line2'></div>
                        <div className='line2'></div>
                        <div className='line2'></div>
                        <div className='line2'></div>
                        <div className='line2'></div>
                        <div className='line2'></div>
                        <div className='line2'></div>
                        <div className='line2'></div>
                        <div className='line2'></div>
                        <div className='line2'></div>
                        <div className='line2'></div>
                        <div className='line2'></div>
                        <div className='line2'></div>
                        <div className='line2'></div>
                        <div className='line2'></div>
                        <div className='line2'></div>
                        <div className='line2'></div>
                        <div className='line2'></div>
                        <div className='line2'></div>
                        <div className='line2'></div>
                        <div className='line2'></div>
                        <div className='line2'></div>
                        <div className='line2'></div>
                        <div className='line2'></div>
                        <div className='line2'></div>
                        <div className='line2'></div>
                        <div className='line2'></div>
                    </div>
                    </div> 
                    <h3 className='p-2 lg:p-4 m-4 text-center'>A Púrhab szigetelés az egyik leghatékonyabb módja módja annak, hogy javítsd otthonod kényelmét és csökkentsd az energiaszámlád. Próbáld ki most, és élvezd az azonnali kényelmet és megtakarítást!</h3>
                    <div className='flex items-center justify-center gap-4'>
                    <Link href="/kalkulator"><MainCTA>Árat kalkulálok</MainCTA></Link>
                    <Link href="/purhabrol-bovebben"><SecondaryCTA>Miért a púrhab?</SecondaryCTA></Link>
                    </div>
                </div>
                
                <div className='flex flex-wrap w-[90vw] gap-4 lg:gap-0 lg:w-8/12 p-4 my-6 rounded-md z-10 backdrop-blur-sm  border bg-neutral-100 bg-opacity-5 border-neutral-300'>
                    <div className='grid grid-cols-3 w-full lg:w-1/2 justify-center items-center'>
                    <div className='flex flex-col justify-between items-center gap-4'><Image src='/nogaps.svg' width={60} height={60} className='w-10 h-10 lg:w-16 lg:h-16 '></Image><p className='text-xs lg:text-lg'>Résmentes</p></div>
                    <div className='flex flex-col justify-between items-center gap-4'><Image src='/insulation_1.svg' width={60} height={60} className='w-10 h-10 lg:w-16 lg:h-16 '></Image><p className='text-xs lg:text-lg'>Kiválóan szigetel</p></div>
                    <div className='flex flex-col justify-between items-center gap-4'><Image src='/fast.svg' width={60} height={60} className='w-10 h-10 lg:w-16 lg:h-16 '></Image><p className='text-xs lg:text-lg'>Gyors</p></div>
                    </div>
                    <div className='grid grid-cols-3 w-full lg:w-1/2'>
                    <div className='flex flex-col justify-between items-center gap-4'><Image src='/budget_1.svg' width={60} height={60} className='w-10 h-10 lg:w-16 lg:h-16 '></Image><p className='text-xs lg:text-lg'>Pénztárcabarát</p></div>
                    <div className='flex flex-col justify-between items-center gap-4'><Image src='/noharm.svg' width={60} height={60} className='w-10 h-108 lg:w-16 lg:h-16 '></Image><p className='text-xs lg:text-lg'>Környezetbarát</p></div>
                    <div className='flex flex-col justify-between items-center gap-4'><Image src='/nofire.svg' width={60} height={60} className='w-10 h-10 lg:w-16 lg:h-16 '></Image><p className='text-xs lg:text-lg'>Biztonságos</p></div>
                    </div>

                </div>


                <div className='hidden lg:block absolute top-0 right-0 bg-[#06A452] w-[500px] h-[500px] rounded-full blur-3xl opacity-10 z-10'></div>
                <div className='hidden lg:block absolute bottom-0 left-0 bg-[#06A452] w-[500px] h-[500px] rounded-full blur-3xl opacity-10 z-10'></div>
                <Image src='/kezi-01.png' width={1000} height={1000} className='absolute top-0 right-0 w-8/12 lg:w-3/12 opacity-20'></Image>
                <Image src='/hab-02.png' width={1000} height={1000} className='absolute bottom-0 left-0 w-10/12 lg:w-5/12 opacity-50'></Image>
            </section>
        </>
    )
}

