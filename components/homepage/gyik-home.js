import Link from 'next/link'
import MainCTA from '@/components/maincta'

export default function GyikHome() {
    return(
        <>
            <section className='flex flex-col justify-center items-center w-full overflow-hidden bg-white py-12'>
                <div className='flex flex-col w-11/12 lg:w-8/12 py-8'>
                    <h1 className='text-center m-auto text-4xl lg:text-6xl font-black tracking-tighter py-2'>GYIK</h1>
                    <p  className='text-center text-xl w-11/12 lg:w-1/2 m-auto py-2'>Gyakran ismételt kérdések</p>
                </div>
                
                <div className='flex flex-col w-11/12 lg:w-8/12 items-center py-8'>
                    

                    <div className='collapsible flex flex-col justify-center align-middle w-full border-t border-b py-4'>
                    <input type='checkbox' id='collapsible-head'></input>
                    <label for="collapsible-head" className='text-xl font-bold'>Mi az a púrhab szigetelés?</label>
                    <div className='collapsible-text'>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    </div>

                    <div className='collapsible1 flex flex-col items-stretch justify-center align-middle w-full border-t border-b py-4'>
                    <input type='checkbox' id='collapsible-head1'></input>
                    <label for="collapsible-head1" className='   text-xl font-bold'>Milyen területeken használható a púrhab szigetelés?</label>
                    <div className='collapsible-text1'>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    </div>

                    <div className='collapsible2 flex flex-col items-stretch justify-center align-middle w-full border-t border-b py-4'>
                    <input type='checkbox' id='collapsible-head2'></input>
                    <label for="collapsible-head2" className='   text-xl font-bold'>Miért előnyös a púrhab szigetelés más szigetelőanyagokhoz képest?</label>
                    <div className='collapsible-text2'>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    </div>

                    <div className='collapsible3 flex flex-col items-stretch justify-center align-middle w-full border-t border-b py-4'>
                    <input type='checkbox' id='collapsible-head3'></input>
                    <label for="collapsible-head3" className='   text-xl font-bold'>Mennyire tartós a púrhab szigetelés?</label>
                    <div className='collapsible-text3'>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    </div>

                    <div className='collapsible4 flex flex-col items-stretch justify-center align-middle w-full border-t border-b py-4'>
                    <input type='checkbox' id='collapsible-head4'></input>
                    <label for="collapsible-head4" className='   text-xl font-bold'>Hogyan történik a púrhab szigetelés folyamata?</label>
                    <div className='collapsible-text4'>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    </div>

                    <div className='collapsible5 flex flex-col items-stretch justify-center align-middle w-full border-t border-b py-4'>
                    <input type='checkbox' id='collapsible-head5'></input>
                    <label for="collapsible-head5" className='   text-xl font-bold'>Mennyi idő alatt készül el a púrhab szigetelés?</label>
                    <div className='collapsible-text5'>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    </div>

                    <div className='collapsible6 flex flex-col items-stretch justify-center align-middle w-full border-t border-b py-4'>
                    <input type='checkbox' id='collapsible-head6'></input>
                    <label for="collapsible-head6" className='   text-xl font-bold'>Milyen előkészületekre van szükség a púrhab szigetelés előtt?</label>
                    <div className='collapsible-text6'>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    </div>

                    <div className='collapsible7 flex flex-col items-stretch justify-center align-middle w-full border-t border-b py-4'>
                    <input type='checkbox' id='collapsible-head7'></input>
                    <label for="collapsible-head7" className='   text-xl font-bold'>Milyen típusú púrhabok vannak?</label>
                    <div className='collapsible-text7'>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    </div>

                    <div className='collapsible8 flex flex-col items-stretch justify-center align-middle w-full border-t border-b py-4'>
                    <input type='checkbox' id='collapsible-head8'></input>
                    <label for="collapsible-head8" className='   text-xl font-bold'>Milyen árban mozog a púrhab szigetelés?</label>
                    <div className='collapsible-text8'>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    </div>

                    <div className='collapsible9 flex flex-col items-stretch justify-center align-middle w-full border-t border-b py-4'>
                    <input type='checkbox' id='collapsible-head9'></input>
                    <label for="collapsible-head9" className='   text-xl font-bold'>Milyen garanciát vállalnak a púrhab szigetelésre?</label>
                    <div className='collapsible-text9'>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    </div>



                </div>

                <Link href="/kalkulator"><MainCTA>Nincs több kérdésem</MainCTA></Link>
            </section>
        </>
    )
}