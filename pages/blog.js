import Image from 'next/image'
import Link from 'next/link'
import SecondaryCTA from '@/components/secondarycta'
import CtaHome from '@/components/homepage/cta-home'


export default function Blog() {
    return(
        <>
        <section className='flex flex-col justify-center items-center w-full overflow-hidden bg-white py-12'>
                <div className='flex flex-col w-11/12 lg:w-8/12 py-8'>
                    <h1 className='text-center m-auto text-4xl lg:text-6xl font-black tracking-tighter py-2'>Blog</h1>
                    <p  className='text-center text-xl w-11/12 lg:w-1/2 m-auto py-2'>Érdekességek a szigetelés világából</p>
                </div>
                <div className='flex w-11/12 lg:w-8/12 items-center py-8'>

                    <div className='grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 gap-4 w-full h-full'>
                    <div style={{backgroundImage: `linear-gradient(to bottom, rgba(245, 246, 252, 0.0), rgba(0, 0, 0, 0.5)), url("/otthon.jpg")`}} className=' cursor-pointer flex flex-col justify-end col-span-1 row-span-1 lg:row-span-3 bg-black min-h-[300px] rounded-xl bg-cover bg-center'>
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
                    <Link href="/blog"><SecondaryCTA>További olvasmányok</SecondaryCTA></Link>
            </section>


            <div className='flex flex-col w-11/12 lg:w-8/12 justify-center items-center py-8 m-auto'>
              
              <div className=' flex flex-col items-stretch justify-center align-middle w-full border-t border-b py-4'>
                <label for="collapsible-head" className='    text-xl font-bold'>Mi az a púrhab szigetelés?</label>
              </div>

              <div className=' flex flex-col items-stretch justify-center align-middle w-full border-t border-b py-4'>
                <label for="collapsible-head1" className='   text-xl font-bold'>Milyen területeken használható a púrhab szigetelés?</label>
              </div>

              <div className=' flex flex-col items-stretch justify-center align-middle w-full border-t border-b py-4'>
                <label for="collapsible-head2" className='   text-xl font-bold'>Miért előnyös a púrhab szigetelés más szigetelőanyagokhoz képest?</label>
              </div>

              <div className=' flex flex-col items-stretch justify-center align-middle w-full border-t border-b py-4'>
                <label for="collapsible-head3" className='   text-xl font-bold'>Mennyire tartós a púrhab szigetelés?</label>
              </div>

              <div className=' flex flex-col items-stretch justify-center align-middle w-full border-t border-b py-4'>
                <label for="collapsible-head4" className='   text-xl font-bold'>Hogyan történik a púrhab szigetelés folyamata?</label>
              </div>

              <div className=' flex flex-col items-stretch justify-center align-middle w-full border-t border-b py-4'>
                <label for="collapsible-head5" className='   text-xl font-bold'>Mennyi idő alatt készül el a púrhab szigetelés?</label>
              </div>

              <div className=' flex flex-col items-stretch justify-center align-middle w-full border-t border-b py-4'>
                <label for="collapsible-head6" className='   text-xl font-bold'>Milyen előkészületekre van szükség a púrhab szigetelés előtt?</label>
              </div>

              <div className=' flex flex-col items-stretch justify-center align-middle w-full border-t border-b py-4'>
                <label for="collapsible-head7" className='   text-xl font-bold'>Milyen típusú púrhabok vannak?</label>
              </div>

              <div className=' flex flex-col items-stretch justify-center align-middle w-full border-t border-b py-4'>
                <label for="collapsible-head8" className='   text-xl font-bold'>Milyen árban mozog a púrhab szigetelés?</label>
              </div>

              <div className=' flex flex-col items-stretch justify-center align-middle w-full border-t border-b py-4'>
                <label for="collapsible-head9" className='   text-xl font-bold'>Milyen garanciát vállalnak a púrhab szigetelésre?</label>
              </div>

            </div>

      <CtaHome/>

        
        </>
    )
}

