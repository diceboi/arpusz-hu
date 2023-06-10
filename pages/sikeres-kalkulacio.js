import { useRouter } from 'next/router'
import { TiArrowSync } from 'react-icons/ti'
import Velemenyek from '../components/velemenyek'
import Link from 'next/link'
import MainCTA from '../components/maincta'

export default function SikeresKalkulacio() {

    const router = useRouter();
    const { nettoar, bruttoar } = router.query;

    return(
        <>
            <section className='flex flex-col justify-center items-center w-full overflow-hidden bg-white pb-12 pt-[75px]'>

                <div className='flex flex-col w-11/12 lg:w-8/12 py-8'>
                    <h1 className='text-center m-auto text-4xl lg:text-6xl font-black tracking-tighter py-2'>Sikeres kalkuláció</h1>
                    <p  className='text-center lg:text-lg w-11/12 lg:w-1/2 m-auto py-2 uppercase tracking-widest text-neutral-400 font-bold'>Egy lépéssel közelebb kerültél az energiatakarékosághoz</p>
                </div>

                <div className='w-[360px] lg:w-[1024px] border rounded-xl border-neutral-200 h-auto lg:h-[50vh] my-8 mx-auto shadow-xl overflow-hidden'>

                    <div className='flex justify-center items-center w-[360px] h-full lg:w-[1024px] mr-[664px] lg:mr-0 py-10'>
                        <div className='flex flex-col items-center justify-evenly h-full w-[360px] lg:w-full'>
                            
                            <div className='flex flex-col items-center gap-4 h-auto'>
                                <h1 className='top-0 text-md lg:text-xl text-center uppercase tracking-widest'>A te púrhab szigetelésed megközelítő ára:</h1>
                                
                                <div className='flex items-baseline gap-4 p-4 rounded-xl justify-center bg-[#06a452] text-white shadow-xl w-11/12'>
                                <p className='text-sm lg:text-md uppercase'>nettó</p><h1 id='vegsoar' className='text-2xl lg:text-5xl font-black'>{nettoar}</h1><p>Ft + ÁFA</p>
                                </div>
                                <div className='flex gap-2 items-baseline'>
                                <p className='text-sm lg:text-md uppercase'>bruttó</p><h3 id='vatprice' className='text-sm lg:text-xl font-bold'>{bruttoar}</h3><p>Ft</p>
                                </div>
                                <div className='flex gap-2 items-center justify-center'>
                                <MainCTA><Link href="/kalkulator" className='flex justify-center items-center'><TiArrowSync className=' w-8 h-8'/> Újrakalkulálás</Link></MainCTA>
                                </div>
                                
                            </div>

                            <p className='text-sm w-11/12 text-center lg:w-full'>A kalkulált ár nem minősül árajánlattételnek. Kizárólag tájékoztatás jellegű célokat szolgál.</p>

                        </div>
                    </div>

                </div>

            </section>
            <Velemenyek/>
        </>
    )
}