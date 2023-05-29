import Image from 'next/image'
import { Inter } from 'next/font/google'
import { AiFillStar } from 'react-icons/ai'
import { BiChevronDown } from 'react-icons/bi'
import SzolgaltatasokHome from '@/components/homepage/szolgaltatasok-home'


export default function Szolgaltatasok() {
    return (
    <>
    <section className='flex flex-col justify-center items-center w-full overflow-hidden bg-white shadow-inner shadow-neutral-200 pb-12 pt-[75px]'>
    <div className='flex flex-col w-11/12 lg:w-8/12 py-8'>
        <h1 className='text-center m-auto text-4xl lg:text-6xl font-black tracking-tighter py-2'>Szolgáltatások</h1>
        <p  className='text-center text-xl w-11/12 lg:w-1/2 m-auto py-2'>Vállalkozásunk szórt púrhab szigeteléssel foglalkozik</p>
      </div>

      <SzolgaltatasokHome/>

    </section>
    </>
    )
}