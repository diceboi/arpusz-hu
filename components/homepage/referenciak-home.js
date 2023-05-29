import { AiFillStar } from 'react-icons/ai'
import Link from 'next/link'
import MainCTA from '@/components/maincta'
import Velemenyek from '../velemenyek'


export default function ReferenciakHome() {
    return(
        <>
            <section className='flex flex-col justify-center items-center w-full overflow-hidden bg-white py-12'>
                <div className='flex flex-col w-11/12 lg:w-8/12 py-8'>
                    <h1 className='text-center m-auto text-4xl lg:text-6xl font-black tracking-tighter py-2'>Referenciák</h1>
                    <p  className='text-center text-xl w-11/12 lg:w-1/2 m-auto py-2'>Akik már minket választottak</p>
                </div>
                <div className='flex w-11/12 lg:w-8/12 items-center pt-8'>

                    <div className='grid grid-cols-1 lg:grid-cols-3 grid-rows-4 lg:grid-rows-3 gap-4 w-full h-auto'>
                    <div style={{backgroundImage: `url("/nyitott-cella-1.jpg")`}} className='col-span-1 row-span-1 lg:col-span-2 lg:row-span-3 bg-black h-[250px] lg:min-h-[500px] rounded-xl bg-cover bg-center'>
                        <div className='flex gap-2 justify-center bg-white bg-opacity-75 w-full h-auto p-2'><p className='font-black'>Gyékényes</p><p>Nyitott cellás szigetelés</p></div>
                    </div>
                    <div style={{backgroundImage: `url("/nyitott-cella-2.jpg")`}} className='col-span-1 row-span-1 lg:col-span-1 lg:row-span-3 bg-black h-[250px] lg:min-h-[500px] rounded-xl bg-cover bg-center' >
                        <div className='flex gap-2 justify-center bg-white bg-opacity-75 w-full h-auto p-2'><p className='font-black'>Gyékényes</p><p>Nyitott cellás szigetelés</p></div>
                    </div>
                    <div style={{backgroundImage: `url("/nyitott-cella-3.jpg")`}} className=' col-span-1 row-span-1 lg:col-span-1 lg:row-span-1 bg-black h-[250px] lg:min-h-[500px] rounded-xl bg-cover bg-center'>
                        <div className='flex gap-2 justify-center bg-white bg-opacity-75 w-full h-auto p-2'><p className='font-black'>Gyékényes</p><p>Nyitott cellás szigetelés</p></div>
                    </div>
                    <div style={{backgroundImage: `url("/zart-cella-1.jpg")`}} className='col-span-1 row-span-1 lg:col-span-1 lg:row-span-1 bg-black h-[250px] lg:min-h-[500px] rounded-xl bg-cover bg-center'>
                        <div className='flex gap-2 justify-center bg-white bg-opacity-75 w-full h-auto p-2'><p className='font-black'>Gyékényes</p><p>Nyitott cellás szigetelés</p></div>
                    </div>
                    </div>

                </div>

                <Velemenyek/>
            </section>
        </>
    )
}