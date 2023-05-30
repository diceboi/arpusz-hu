import { AiFillStar } from 'react-icons/ai'
import { RiMapPinLine } from 'react-icons/ri'
import Link from 'next/link'
import MainCTA from '@/components/maincta'
import Velemenyek from '../velemenyek'
import SecondaryCTA from '../secondarycta'



export default function ReferenciakHome() {
    return(
        <>
            <section className='flex flex-col justify-center items-center w-full overflow-hidden bg-white py-12'>
                <div className='flex flex-col w-11/12 lg:w-8/12 py-8'>
                    <h1 className='text-center m-auto text-4xl lg:text-6xl font-black tracking-tighter py-2'>Referenciák</h1>
                    <p  className='text-center text-xl w-11/12 lg:w-1/2 m-auto py-2'>Akik már minket választottak</p>
                </div>
                <div className='flex w-11/12 lg:w-8/12 items-center py-8'>

                    <div className='grid grid-cols-1 lg:grid-cols-3 grid-rows-4 lg:grid-rows-3 gap-4 w-full h-auto'>
                    <div style={{backgroundImage: `url("/zart-cella-7.jpg")`}} className='col-span-1 row-span-1 lg:col-span-2 lg:row-span-3 bg-black h-[250px] lg:min-h-[500px] rounded-xl bg-cover bg-center'>
                        <div className='flex gap-2 justify-between items-start bg-black bg-opacity-75 rounded-xl text-white  w-full h-auto p-2'><p className='font-black'>Zárt cellás hajószigetelés</p><p className='flex gap-1 items-center'><RiMapPinLine/>Százhalombatta</p></div>
                    </div>
                    <div style={{backgroundImage: `url("/nyitott-cella-5.jpg")`}} className='col-span-1 row-span-1 lg:col-span-1 lg:row-span-3 bg-black h-[250px] lg:min-h-[500px] rounded-xl bg-cover bg-center' >
                        <div className='flex gap-2 justify-between items-start  bg-black bg-opacity-75 rounded-xl text-white  w-full h-auto p-2'><p className='font-black'>Nyitott cellás tetőszigetelés</p><p className='flex gap-1 items-center justify-start'><RiMapPinLine/>Szolnok</p></div>
                    </div>
                    <div style={{backgroundImage: `url("/zart-cella-4.jpg")`}} className=' col-span-1 row-span-1 lg:col-span-1 lg:row-span-1 bg-black h-[250px] lg:min-h-[500px] rounded-xl bg-cover bg-center'>
                        <div className='flex gap-2 justify-between items-start  bg-black bg-opacity-75 rounded-xl text-white  w-full h-auto p-2'><p className='font-black'>Zárt cellás külső falszigetelés</p><p className='flex gap-1 items-center'><RiMapPinLine/>Veresegyháza</p></div>
                    </div>
                    <div style={{backgroundImage: `url("/nyitott-cella-6.jpg")`}} className='col-span-1 row-span-1 lg:col-span-1 lg:row-span-1 bg-black h-[250px] lg:min-h-[500px] rounded-xl bg-cover bg-center'>
                        <div className='flex gap-2 justify-between items-start  bg-black bg-opacity-75 rounded-xl text-white  w-full h-auto p-2'><p className='font-black'>Nyitott cellás plafonszigetelés</p><p className='flex gap-1 items-center'><RiMapPinLine/>Balatonlelle</p></div>
                    </div>
                    <div style={{backgroundImage: `url("/zart-cella-1.jpg")`}} className='col-span-1 row-span-1 lg:col-span-1 lg:row-span-1 bg-black h-[250px] lg:min-h-[500px] rounded-xl bg-cover bg-center'>
                        <div className='flex gap-2 justify-between items-start  bg-black bg-opacity-75 rounded-xl text-white  w-full h-auto p-2'><p className='font-black'>Zárt cellás pinceszigetelés</p><p className='flex gap-1 items-center'><RiMapPinLine/>Polgárdi</p></div>
                    </div>
                    </div>
                </div>
                <Link href="/referenciak"><SecondaryCTA>Még több referencia</SecondaryCTA></Link>
                <Velemenyek/>
            </section>
        </>
    )
}