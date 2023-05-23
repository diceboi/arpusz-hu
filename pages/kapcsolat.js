import Image from 'next/image'
import { Inter } from 'next/font/google'
import { AiFillStar } from 'react-icons/ai'
import { BiChevronDown } from 'react-icons/bi'
import { FaRegEnvelope } from 'react-icons/fa'
import Link from 'next/link'
import MainCTA from '@/components/maincta'
import SecondaryCTA from '@/components/secondarycta'


export default function Blog() {
    return(
        <>
        <section className='flex flex-col justify-center items-center w-full overflow-hidden bg-white pb-12 pt-[75px]'>
        <div className='absolute bottom-0 left-0 bg-[#06A452] w-[500px] h-[500px] rounded-full blur-3xl opacity-10 z-10'></div>
        <div className='absolute top-0 right-0 bg-[#06A452] w-[500px] h-[500px] rounded-full blur-3xl opacity-10 z-10'></div>
            <div className='flex flex-col w-8/12 py-8'>
                <h1 className='text-center m-auto text-6xl font-black tracking-tighter py-2'>Kapcsolat</h1>
                <p  className='text-center text-xl w-1/2 m-auto py-2'>Ha kérdésed van, vagy megbíznál bennünket.</p>
            </div>
            <div className='flex flex-col gap-4 w-1/3'>
                <input type='text' placeholder='Vezetéknév' className='border border-neutral-200 p-2'/>
                <input type='text' placeholder='Keresztnév' className='border border-neutral-200 p-2'/>
                <input type='text' placeholder='E-mail cím' className='border border-neutral-200 p-2'/>
                <textarea placeholder='Üzenet' rows='10' className='border border-neutral-200 p-2'/>
                <input type='submit' className='px-6 py-3 bg-gradient-to-r from-[#06A452] to-[#0DC666] hover:shadow-[#06a4522f] hover:shadow-xl transition-all text-white text-lg rounded-md cursor-pointer'/>
                <p  className='text-center text-xl m-auto pb-16 pt-12'>Ha árat szeretnél számolni, 3 lépésben könnyedén megteheted felesleges várakozás nélkül.</p>
            </div>          
        </section>

        <Link href="/kalkulator">
            <div className='flex w-1/3 m-auto items-start flex-col p-4 mb-40 bg-gradient-to-r from-[#06A452] to-[#8AECB9] relative overflow-hidden rounded-xl h-full min-h-[250px] hover:shadow-xl'>
                    <Image className='absolute right-5 bottom-0' src='/hand.png' height={200} width={200}></Image>
                    <h2 className='text-4xl text-white font-normal z-[1]'>Számold ki</h2>
                    <h1 className='text-5xl text-white font-black z-[1]'>3 lépésben</h1>
                    <p className='text-lg text-white font-normal z-[1] w-1/2'>a te igényeidnek megfelelő púrhab szigetelést kalkulátorunkkal!</p>
                    
            </div>
        </Link>
        
        </>
    )
}

