import Link from 'next/link'
import SecondaryCTA from '../secondarycta'


export default function BlogHome() {
    return(
        <>
            <section className='flex flex-col justify-center items-center w-full overflow-hidden bg-white py-12'>
                <div className='flex flex-col w-11/12 lg:w-8/12 py-8'>
                    <h1 className='text-center m-auto text-4xl lg:text-6xl font-black tracking-tighter py-2'>Blog</h1>
                    <p  className='text-center lg:text-lg w-11/12 lg:w-1/2 m-auto py-2 uppercase tracking-widest text-neutral-400 font-bold'>Érdekességek a szigetelés világából</p>
                </div>
                <div className='flex w-11/12 lg:w-8/12 items-center py-8'>

                    <div className='grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 gap-4 w-full h-full'>
                    <Link href="/blog/miert-erdemes-purhab-szigetelest-valasztani-otthonunk-szamara" style={{backgroundImage: `linear-gradient(to bottom, rgba(245, 246, 252, 0.0), rgba(0, 0, 0, 0.5)), url("/otthon.webp")`}} className=' cursor-pointer flex flex-col justify-end col-span-1 row-span-1 lg:row-span-3 bg-black min-h-[300px] rounded-xl bg-cover bg-center'>
                        <div className='flex gap-2 justify-start w-full h-auto p-4 text-white'><p className='text-3xl font-bold w-3/4'>Miért érdemes púrhab szigetelést választani otthonunk számára?</p></div>
                    </Link>
                    <Link href="/blog/mennyibe-kerul-a-purhab-szigeteles" style={{backgroundImage: `linear-gradient(to bottom, rgba(245, 246, 252, 0.0), rgba(0, 0, 0, 0.5)), url("/mennyibe-kerul.webp")`}} className='cursor-pointer flex flex-col justify-end col-span-1 row-span-1 bg-black min-h-[300px] rounded-xl bg-cover bg-center' >
                        <div className='flex gap-2 justify-start w-full h-auto p-4 text-white'><p className='text-3xl font-bold w-3/4'>Mennyibe kerül a púrhab szigetelés?</p></div>
                    </Link>
                    <Link href="/blog/a-kornyezetbarat-valasztas" style={{backgroundImage: `linear-gradient(to bottom, rgba(245, 246, 252, 0.0), rgba(0, 0, 0, 0.5)), url("/kornyezetbarat.webp")`}} className='cursor-pointer flex flex-col justify-end col-span-1 row-span-1 bg-black min-h-[300px] rounded-xl bg-cover bg-center'>
                        <div className='flex gap-2 justify-start w-full h-auto p-4 text-white'><p className='text-3xl font-bold w-3/4'>A környezetbarát választás</p></div>
                    </Link>
                    <Link href="/blog/a-hangszigeteles-uj-szintje" style={{backgroundImage: `linear-gradient(to bottom, rgba(245, 246, 252, 0.0), rgba(0, 0, 0, 0.5)), url("/hangszigeteles.webp")`}} className='cursor-pointer flex flex-col justify-end col-span-1 row-span-1 bg-black min-h-[300px] rounded-xl bg-cover bg-center'>
                        <div className='flex gap-2 justify-start w-full h-auto p-4 text-white'><p className='text-3xl font-bold w-3/4'> A hangszigetelés új szintje</p></div>
                    </Link>
                    </div>

                </div>
                    <Link href="/blog"><SecondaryCTA>További olvasmányok</SecondaryCTA></Link>
            </section>

        </>
    )
}