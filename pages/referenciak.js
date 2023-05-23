import Image from 'next/image'
import { AiFillStar } from 'react-icons/ai'

export default function Referenciak() {
    return(
        <>
        <section className='flex flex-col justify-center items-center w-full overflow-hidden bg-white pb-12 pt-[75px]'>
            <div className='flex flex-col w-8/12 py-8'>
                <h1 className='text-center m-auto text-6xl font-black tracking-tighter py-2'>Referenciák</h1>
                <p  className='text-center text-xl w-1/2 m-auto py-2'>Akik már minket választottak</p>
            </div>
            <div className='flex flex-col w-8/12 py-8'>

                <div className='flex justify-start w-full h-auto py-20 border-t'>
                    <div className='w-1/2'>
                        <Image src="/nyitott-cella-1.jpg" height={500} width={1000} className=' rounded-xl'></Image>
                    </div>
                    <div className='flex flex-col justify-between w-1/2'>
                        <div>
                            <div className='flex items-center gap-4 pl-10 pb-10'><p className='font-light tracking-widest  bg-neutral-200 p-2 rounded-full'>2023.04.10.</p></div>
                            <div className='flex items-center gap-4 pl-10'><p className='font-black text-2xl'>Gyékényes</p><p className='text-xl'>- Nyitott cellás szigetelés</p></div>
                            <div className='flex gap-4 p-10'><p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>
                        </div>
                        
                        <button className=' self-start ml-10 p-2 w-auto border border-neutral-300  rounded-md hover:shadow-md transition-all '>Írj nekünk</button>
                    </div>

                </div>

                <div className='flex justify-start w-full h-auto py-20 border-t'>
                    <div className='w-1/2'>
                        <Image src="/nyitott-cella-2.jpg" height={500} width={1000} className=' rounded-xl'></Image>
                    </div>
                    <div className='flex flex-col justify-between w-1/2'>
                        <div>
                            <div className='flex items-center gap-4 pl-10 pb-10'><p className='font-light tracking-widest  bg-neutral-200 p-2 rounded-full'>2023.04.10.</p></div>
                            <div className='flex items-center gap-4 pl-10'><p className='font-black text-2xl'>Gyékényes</p><p className='text-xl'>- Nyitott cellás szigetelés</p></div>
                            <div className='flex gap-4 p-10'><p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>
                        </div>
                        
                        <button className=' self-start ml-10 p-2 w-auto border border-neutral-300  rounded-md hover:shadow-md transition-all '>Írj nekünk</button>
                    </div>

                </div>

                <div className='flex justify-start w-full h-auto py-20 border-t'>
                    <div className='w-1/2'>
                        <Image src="/nyitott-cella-3.jpg" height={500} width={1000} className=' rounded-xl'></Image>
                    </div>
                    <div className='flex flex-col justify-between w-1/2'>
                        <div>
                            <div className='flex items-center gap-4 pl-10 pb-10'><p className='font-light tracking-widest  bg-neutral-200 p-2 rounded-full'>2023.04.10.</p></div>
                            <div className='flex items-center gap-4 pl-10'><p className='font-black text-2xl'>Gyékényes</p><p className='text-xl'>- Nyitott cellás szigetelés</p></div>
                            <div className='flex gap-4 p-10'><p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>
                        </div>
                        
                        <button className=' self-start ml-10 p-2 w-auto border border-neutral-300  rounded-md hover:shadow-md transition-all '>Írj nekünk</button>
                    </div>

                </div>

                

            </div>

            <div className='flex flex-col items-center w-8/12 py-8'>
            <h1 className='text-xl uppercase tracking-widest py-4'>Vélemények:</h1>
            <div className='flex gap-8 w-full'>
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

            <button className='py-2 px-4 bg-gradient-to-r from-[#06A452] to-[#0DC666] text-white border-transparent rounded-md'>A legjobb szigetelést szeretném</button>
        </section>
        </>
    )
}
