import { AiFillStar } from 'react-icons/ai'
import Link from 'next/link'
import MainCTA from '@/components/maincta'


export default function ReferenciakHome() {
    return(
        <>
            <section className='flex flex-col justify-center items-center w-full overflow-hidden bg-white py-12'>
                <div className='flex flex-col w-11/12 lg:w-8/12 py-8'>
                    <h1 className='text-center m-auto text-4xl lg:text-6xl font-black tracking-tighter py-2'>Referenciák</h1>
                    <p  className='text-center text-xl w-11/12 lg:w-1/2 m-auto py-2'>Akik már minket választottak</p>
                </div>
                <div className='flex w-11/12 lg:w-8/12 items-center py-8'>

                    <div className='grid grid-cols-1 grid-rows-4 lg:grid-cols-3 lg:grid-rows-4 gap-4 w-full h-full'>
                    <div style={{backgroundImage: `url("/nyitott-cella-1.jpg")`}} className='flex flex-col justify-end col-span-1 row-span-1 lg:col-span-2 lg:row-span-2 bg-black h-[250px] lg:min-h-[500px] rounded-xl bg-cover bg-center'>
                        <div className='flex gap-2 justify-center bg-white bg-opacity-75 w-full h-auto p-2'><p className='font-black'>Gyékényes</p><p>Nyitott cellás szigetelés</p></div>
                    </div>
                    <div style={{backgroundImage: `url("/nyitott-cella-2.jpg")`}} className='flex flex-col justify-end col-span-1 lg:row-span-4 bg-black h-[250px] lg:min-h-[500px] rounded-xl bg-cover bg-center' >
                        <div className='flex gap-2 justify-center bg-white bg-opacity-75 w-full h-auto p-2'><p className='font-black'>Gyékényes</p><p>Nyitott cellás szigetelés</p></div>
                    </div>
                    <div style={{backgroundImage: `url("/nyitott-cella-3.jpg")`}} className='flex flex-col justify-end col-span-1 lg:row-span-2 bg-black h-[250px] lg:min-h-[500px] rounded-xl bg-cover bg-center'>
                        <div className='flex gap-2 justify-center bg-white bg-opacity-75 w-full h-auto p-2'><p className='font-black'>Gyékényes</p><p>Nyitott cellás szigetelés</p></div>
                    </div>
                    <div style={{backgroundImage: `url("/zart-cella-1.jpg")`}} className='flex flex-col justify-end col-span-1 lg:row-span-2 bg-black h-[250px] lg:min-h-[500px] rounded-xl bg-cover bg-center'>
                        <div className='flex gap-2 justify-center bg-white bg-opacity-75 w-full h-auto p-2'><p className='font-black'>Gyékényes</p><p>Nyitott cellás szigetelés</p></div>
                    </div>
                    </div>

                </div>

                <div className='flex flex-col items-center w-11/12 lg:w-8/12 py-8'>
                <h1 className='text-xl uppercase tracking-widest py-4'>Vélemények:</h1>
                <div className='flex gap-8 w-full overflow-x-auto lg:overflow-x-visible'>
                    <div className='flex flex-col justify-center items-center gap-4 p-4 border rounded-xl'>
                    <div className='flex'>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                    </div>
                    <div>
                        <p>Nagyon elégedett vagyok a púrhab szigeteléssel! Azonnal észrevettem a különbséget a hőmérsékletben, és a fűtésszámlám is jelentősen csökkent. Köszönöm a szakszerű és gyors munkát!</p>
                    </div>
                    <div className='flex gap-2'>
                        <p className='font-bold'>József</p>
                        <p>Somogyudvarhely</p>
                    </div>
                    </div>

                    <div className='flex flex-col justify-center items-center gap-4 p-4 border rounded-xl'>
                    <div className='flex'>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                    </div>
                    <div>
                        <p>Nagyon elégedett vagyok a púrhab szigeteléssel! Azonnal észrevettem a különbséget a hőmérsékletben, és a fűtésszámlám is jelentősen csökkent. Köszönöm a szakszerű és gyors munkát!</p>
                    </div>
                    <div className='flex gap-2'>
                        <p className='font-bold'>József</p>
                        <p>Somogyudvarhely</p>
                    </div>
                    </div>

                    <div className='flex flex-col justify-center items-center gap-4 p-4 border rounded-xl'>
                    <div className='flex'>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                    </div>
                    <div>
                        <p>Nagyon elégedett vagyok a púrhab szigeteléssel! Azonnal észrevettem a különbséget a hőmérsékletben, és a fűtésszámlám is jelentősen csökkent. Köszönöm a szakszerű és gyors munkát!</p>
                    </div>
                    <div className='flex gap-2'>
                        <p className='font-bold'>József</p>
                        <p>Somogyudvarhely</p>
                    </div>
                    </div>  

                    <div className='flex flex-col justify-center items-center gap-4 p-4 border rounded-xl'>
                    <div className='flex'>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                    </div>
                    <div>
                        <p>Nagyon elégedett vagyok a púrhab szigeteléssel! Azonnal észrevettem a különbséget a hőmérsékletben, és a fűtésszámlám is jelentősen csökkent. Köszönöm a szakszerű és gyors munkát!</p>
                    </div>
                    <div className='flex gap-2'>
                        <p className='font-bold'>József</p>
                        <p>Somogyudvarhely</p>
                    </div>
                    </div>  
                </div>
                </div>

                <Link href="/kalkulator"><MainCTA>Tovább a kalkulátorhoz</MainCTA></Link>
            </section>
        </>
    )
}