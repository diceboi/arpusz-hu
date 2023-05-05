import Image from 'next/image'
import { Inter } from 'next/font/google'
import { AiFillStar } from 'react-icons/ai'
import { BiChevronDown } from 'react-icons/bi'

export default function Szolgaltatasok() {
    return (
    <>
    <section className='flex flex-col justify-center items-center w-screen bg-white py-12'>
      <div className='flex flex-col w-8/12 py-8'>
        <h1 className='text-center m-auto text-6xl font-black tracking-tighter py-2'>Szolgáltatások</h1>
        <p  className='text-center text-xl w-1/2 m-auto py-2'>Vállalkozásunk szórt púrhab szigeteléssel foglalkozik</p>
      </div>
      <div className='flex w-8/12 items-center py-8'>

        <div className='grid grid-cols-2 grid-rows-7 gap-4 w-full h-full'>
          <div style={{backgroundImage: `linear-gradient(to bottom, rgba(245, 246, 252, 0.0), rgba(0, 0, 0, 0.5)), url("/otthon.jpg")`}} className=' cursor-pointer flex flex-col justify-end col-span-1 row-span-3 bg-black min-h-[300px] rounded-xl bg-cover bg-center'>
            <div className='flex gap-2 justify-start w-full h-auto p-4 text-white'><p className='text-3xl font-bold w-3/4'>Miért érdemes púrhab szigetelést választani otthonunk számára?</p></div>
          </div>
          <div style={{backgroundImage: `linear-gradient(to bottom, rgba(245, 246, 252, 0.0), rgba(0, 0, 0, 0.5)), url("/mennyibe-kerul.jpg")`}} className='cursor-pointer flex flex-col justify-end col-span-1 row-span-1 bg-black min-h-[300px] rounded-xl bg-cover bg-center' >
            <div className='flex gap-2 justify-start w-full h-auto p-4 text-white'><p className='text-3xl font-bold w-3/4'>Mennyibe kerül a púrhab szigetelés?</p></div>
          </div>
          <div style={{backgroundImage: `linear-gradient(to bottom, rgba(245, 246, 252, 0.0), rgba(0, 0, 0, 0.5)), url("/kornyezetbarat.jpg")`}} className='cursor-pointer flex flex-col justify-end col-span-1 row-span-1 bg-black min-h-[300px] rounded-xl bg-cover bg-center'>
            <div className='flex gap-2 justify-start w-full h-auto p-4 text-white'><p className='text-3xl font-bold w-3/4'>A környezetbarát választás</p></div>
          </div>
          <div style={{backgroundImage: `linear-gradient(to bottom, rgba(245, 246, 252, 0.0), rgba(0, 0, 0, 0.5)), url("/hangszigeteles.jpg")`}} className='cursor-pointer flex flex-col justify-end col-span-1 row-span-1 bg-black min-h-[300px] rounded-xl bg-cover bg-center'>
            <div className='flex gap-2 justify-start w-full h-auto p-4 text-white'><p className='text-3xl font-bold w-3/4'> A hangszigetelés új szintje</p></div>
          </div>
        </div>

      </div>
      <button className='py-2 px-4 bg-gradient-to-r from-[#06A452] to-[#0DC666] text-white border-transparent rounded-md'>További olvasmányok</button>

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

    </section>
    </>
    )
}