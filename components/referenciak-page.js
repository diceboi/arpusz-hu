import Image from 'next/image'
import { AiFillStar } from 'react-icons/ai'
import Velemenyek from './velemenyek'

export default function ReferenciakPage() {
    return(
        <>
            <section className='flex flex-col justify-center items-center w-full overflow-hidden bg-white pb-12 pt-[75px]'>
                <div className='flex flex-col w-11/12 lg:w-8/12 py-8'>
                    <h1 className='text-center m-auto text-4xl lg:text-6xl font-black tracking-tighter py-2'>Referenciák</h1>
                    <p  className='text-center text-xl w-11/12 lg:w-1/2 m-auto py-2'>Akik már minket választottak</p>
                </div>
                <div className='flex flex-col w-11/12 lg:w-8/12 py-8'>

                    <div className='flex flex-col lg:flex-row justify-center items-center lg:items-start lg:justify-start w-full h-auto py-20 border-t'>
                        <div className='w-11/12 lg:w-1/2'>
                            <Image src="/nyitott-cella-1.jpg" height={500} width={1000} className=' rounded-xl'></Image>
                        </div>
                        <div className='flex flex-col w-11/12 lg:w-1/2'>
                            <div>
                                <div className='flex items-stretch lg:justify-start gap-4 lg:pl-10 pt-5 lg:pt-0 lg:pb-4'><p className='font-light tracking-widest bg-neutral-200 p-2 rounded-full'>2023.04.10.</p></div>
                                <div className='flex items-center gap-4 pt-4 lg:pl-10'><p className='font-black text-2xl'>Gyékényes</p><p className='text-xl'>- Nyitott cellás</p></div>
                                <div className='flex gap-4 py-4 lg:p-10'><p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>
                            </div>
                            
                            <button className=' self-start lg:ml-10 p-2 w-auto border border-neutral-300  rounded-md hover:shadow-md transition-all '>Írj nekünk</button>
                        </div>

                    </div>

                    <div className='flex flex-col lg:flex-row justify-center items-center lg:items-start lg:justify-start w-full h-auto py-20 border-t'>
                        <div className='w-11/12 lg:w-1/2'>
                            <Image src="/nyitott-cella-2.jpg" height={500} width={1000} className=' rounded-xl'></Image>
                        </div>
                        <div className='flex flex-col w-11/12 lg:w-1/2'>
                            <div>
                                <div className='flex items-stretch lg:justify-start gap-4 lg:pl-10 pt-5 lg:pt-0 lg:pb-4'><p className='font-light tracking-widest  bg-neutral-200 p-2 rounded-full'>2023.04.10.</p></div>
                                <div className='flex items-center gap-4 pt-4 lg:pl-10'><p className='font-black text-2xl'>Gyékényes</p><p className='text-xl'>- Nyitott cellás szigetelés</p></div>
                                <div className='flex gap-4 py-4 lg:p-10'><p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>
                            </div>
                            
                            <button className=' self-start lg:ml-10 p-2 w-auto border border-neutral-300  rounded-md hover:shadow-md transition-all '>Írj nekünk</button>
                        </div>

                    </div>

                    <div className='flex flex-col lg:flex-row justify-center items-center lg:items-start lg:justify-start w-full h-auto py-20 border-t'>
                        <div className='w-11/12 lg:w-1/2'>
                            <Image src="/nyitott-cella-3.jpg" height={500} width={1000} className=' rounded-xl'></Image>
                        </div>
                        <div className='flex flex-col w-11/12 lg:w-1/2'>
                            <div>
                                <div className='flex items-stretch lg:justify-start gap-4 lg:pl-10 pt-5 lg:pt-0 lg:pb-4'><p className='font-light tracking-widest  bg-neutral-200 p-2 rounded-full'>2023.04.10.</p></div>
                                <div className='flex items-center gap-4 pt-4 lg:pl-10'><p className='font-black text-2xl'>Gyékényes</p><p className='text-xl'>- Nyitott cellás szigetelés</p></div>
                                <div className='flex gap-4 py-4 lg:p-10'><p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>
                            </div>
                            
                            <button className=' self-start lg:ml-10 p-2 w-auto border border-neutral-300  rounded-md hover:shadow-md transition-all '>Írj nekünk</button>
                        </div>

                    </div>

                    

                </div>

                <Velemenyek/>
            </section>
        </>
    )
}

