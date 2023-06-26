import Image from 'next/image'
import Link from 'next/link'
import MainCTA from '../maincta'
import SecondaryCTA from '../secondarycta'

export default function Hero() {
    return(
        <>
            <section className='relative flex flex-col w-full overflow-hidden m-auto pt-[100px] lg:pt-[75px] h-auto lg:h-screen bg-neutral-100'>
                <div className='flex flex-col justify-evenly w-1/3 place-self-center m-auto min-w-full lg:min-w-[650px] z-10'>
                    <div className='flex flex-col m-auto w-11/12 lg:w-full'>
                    <Image src='/arpusz-logo-header-01.webp' alt='arpusz-logo' width={500} height={200} className='w-52 lg:w-1/2 self-center -mb-8'></Image>
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
                    <p className='p-2 lg:p-4 m-4 text-center text-lg font-medium leading-7'>A Púrhab szigetelés az egyik leghatékonyabb módja módja annak, hogy javítsd otthonod kényelmét és csökkentsd az energiaszámlád. <span className='text-[#06a452]'>Próbáld ki most, és élvezd az azonnali kényelmet és megtakarítást!</span></p>
                    <div className='flex items-center justify-center gap-4 pt-4'>
                    <Link href="/kalkulator"><MainCTA>Árat kalkulálok</MainCTA></Link>
                    <Link href="/purhabrol-bovebben"><SecondaryCTA>Miért a púrhab?</SecondaryCTA></Link>
                    </div>
                </div>
                
                <div className='flex justify-center w-full h-auto bg-white z-10 border-y border-neutral-300 mt-8'>
                <div className='flex flex-wrap gap-4 w-full lg:gap-0 lg:w-8/12 py-4 rounded-md'>
                    <div className='grid grid-cols-2 w-full lg:w-1/3 justify-center'>
                        <div className='flex flex-col justify-between items-center gap-4 lg:border-x border-neutral-300 px-4 text-center'><Image src='/nogaps.svg' alt='résmentes' width={60} height={60} className='w-10 h-10 lg:w-12 lg:h-12 '></Image><p className='text-xs uppercase tracking-widest'>Résmentes</p></div>
                        <div className='flex flex-col justify-between items-center gap-4 lg:border-r border-neutral-300 px-4 text-center'><Image src='/insulation_1.svg' alt='jól-szigetel' width={60} height={60} className='w-10 h-10 lg:w-12 lg:h-12 '></Image><p className='text-xs uppercase tracking-widest'>Kiválóan szigetel</p></div>
                    </div>
                    <div className='grid grid-cols-2 w-full lg:w-1/3'> 
                        <div className='flex flex-col justify-between items-center gap-4 lg:border-r border-neutral-300 px-4 text-center'><Image src='/fast.svg' alt='gyors' width={60} height={60} className='w-10 h-10 lg:w-12 lg:h-12 '></Image><p className='text-xs uppercase tracking-widest'>Gyors</p></div>           
                        <div className='flex flex-col justify-between items-center gap-4 lg:border-r border-neutral-300 px-4 text-center'><Image src='/budget_1.svg' alt='pénztárcabarát' width={60} height={60} className='w-10 h-10 lg:w-12 lg:h-12 '></Image><p className='text-xs uppercase tracking-widest'>Pénztárcabarát</p></div>
                    </div>
                    <div className='grid grid-cols-2 w-full lg:w-1/3'>    
                        <div className='flex flex-col justify-between items-center gap-4 lg:border-r border-neutral-300 px-4 text-center'><Image src='/noharm.svg' alt='nem-káros' width={60} height={60} className='w-10 h-108 lg:w-12 lg:h-12 '></Image><p className='text-xs uppercase tracking-widest'>Környezetbarát</p></div>
                        <div className='flex flex-col justify-between items-center gap-4 lg:border-r border-neutral-300 px-4 text-center'><Image src='/nofire.svg' alt='biztonságos' width={60} height={60} className='w-10 h-10 lg:w-12 lg:h-12 '></Image><p className='text-xs uppercase tracking-widest'>Biztonságos</p></div>
                    </div>
                </div>
                </div>


                <div className='hidden lg:block absolute top-0 right-0 bg-[#06A452] w-[500px] h-[500px] rounded-full blur-3xl opacity-10 z-10'></div>
                <div className='hidden lg:block absolute bottom-0 left-0 bg-[#06A452] w-[500px] h-[500px] rounded-full blur-3xl opacity-10 z-10'></div>
                <Image src='/kezi-01.webp' alt='szigetelő-pisztoly' width={500} height={500} className='absolute top-0 right-0 w-8/12 lg:w-3/12 opacity-20'></Image>
                <Image src='/hab-02.webp' alt='púrhab' width={500} height={500} className='absolute bottom-0 left-0 w-10/12 lg:w-5/12 opacity-50'></Image>
            </section>
        </>
    )
}

