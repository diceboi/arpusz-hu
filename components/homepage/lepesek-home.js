import Image from 'next/image'
import { AiFillStar } from 'react-icons/ai'
import { FaRegEnvelope } from 'react-icons/fa'
import Link from 'next/link'
import MainCTA from '@/components/maincta'


export default function Lepesek() {
    return(
        <>
            <section className='relative flex flex-col justify-center items-center w-full overflow-hidden bg-white '>

                <div className='flex flex-col w-8/12 py-8'>
                    <h1 className='text-center m-auto text-4xl lg:text-6xl font-black tracking-tighter py-2'>Hogyan lesz Púrhab szigetelésed?</h1>
                    <p  className='text-center lg:text-xl w-11/12 lg:w-1/2 m-auto py-2'>4 + 1 lépésben megmutatjuk, mennyire egyszerűen lehet neked is egy energiahatékony és komfortos épületed.</p>
                </div>

                <div className='relative flex flex-col-reverse lg:flex-row w-11/12 lg:w-8/12 items-center h-auto'>

                    <div className='absolute bottom-0 left-0 bg-[#06A452] w-[500px] h-[500px] rounded-full blur-3xl opacity-10 -z-1'></div>

                        <div className='relative flex flex-col items-center lg:items-start w-11/12 lg:w-[49%] py-12 mt-32 lg:mt-0 min-h-[80vh] lg:min-h-fit'>


                        
                        <div className='absolute top-0 -left-3 lg:-left-0 -translate-y-1/2  flex w-11/12 lg:w-8/12 h-60 bg-white shadow-xl border border-neutral-200 rounded-xl z-[3]'>

                            <div className='relative flex flex-col items-center justify-between h-full w-full p-10 '>

                            <p className='absolute flex justify-center items-center w-8 h-8 rounded-full bg-black text-white font-black -top-4'>1.</p>
                            
                            <h1 className='flex items-center justify-center text-center gap-4 top-0 text-sm uppercase tracking-widest'>Válaszd ki a szigetelés típusát.</h1>
                            

                            <fieldset className='flex gap-8 justify-center items-center w-11/12 lg:w-full h-2/3'>

                                <input id="draft" className="peer/draft hidden" type="radio" name="status" data-type="Nyitott cellás" />
                                <label htmlFor="draft" className="flex flex-col gap-2 justify-center items-center border border-neutral-200 rounded-xl h-full p-4 lg:p-8 text-xs lg:text-sm text-center leading-4"><p className='leading-4 uppercase text-md font-black'>Nyitott cellás</p> púrhab szigetelés</label>

                                <input id="published" className="peer/published hidden" type="radio" name="status" data-type="Zárt cellás"/>
                                <label htmlFor="published" className="flex flex-col gap-2 justify-center items-center border border-neutral-200 rounded-xl h-full p-4 lg:p-8 text-xs lg:text-sm text-center leading-4"><p className='leading-4 uppercase text-md font-black'>Zárt cellás</p> púrhab szigetelés</label>
                            
                            </fieldset>
                            </div>

                        </div>


                        <div className='absolute -translate-y-1/2 top-[10em] lg:top-[5em] lg:left-[5em] flex w-11/12 lg:w-8/12 h-60 bg-white shadow-xl border border-neutral-200 rounded-xl z-[4] ease-in-animation'>

                        <div className='relative flex flex-col items-center justify-around h-full w-full py-4'>

                            <p className='absolute flex justify-center items-center w-8 h-8 rounded-full bg-black text-white font-black -top-4'>2.</p>

                                    <h1 className='top-0 text-sm text-center uppercase tracking-widest'>A Csúszkával válaszd ki a szigetelés vastagságát</h1>
                                    
                                    <div className='flex flex-col gap-4 justify-center items-center w-full h-1/2'>

                                        <Image width={50} height={50} alt='foamwidth' src='rangeslider/15slider.svg'/>
                                        <h1 id='vastagsagertek' className='font-black text-md'>15 cm</h1>
                                        <input id='vastagsag' type="range" min="3" max="30" value='15' className='w-2/3 h-8 foamwidthslider-display'></input>
                                        
                                    </div>
                                </div>

                        </div>


                        <div className='absolute -translate-y-1/2 top-[20em] lg:top-[10em] lg:left-[10em] -right-3 lg:-right-0 flex w-11/12 lg:w-8/12 h-60 bg-white shadow-xl border border-neutral-200 rounded-xl z-[5] ease-in-animation'>

                        <div className='flex flex-col items-center justify-around h-full w-full py-4'>

                            <p className='absolute flex justify-center items-center w-8 h-8 rounded-full bg-black text-white font-black -top-4'>3.</p>
                                    <h1 className='top-0 text-sm w-2/3 text-center uppercase tracking-widest'>Add meg a szigetelni kívánt felület méretét</h1>
                                    
                                    <div className='flex flex-col gap-8 justify-center items-center w-full h-1/2'>
                                        
                                        <fieldset className='flex items-baseline justify-center gap-2 w-full'>
                                        <input type='text' id='felulet' className='border border-[#06a452] rounded-sm h-12 p-2 w-1/2' placeholder='pl.: 35m2' disabled/>
                                        <label>m2</label>
                                        </fieldset>

                                    </div>

                                    <div className='flex gap-4'>
                                        <button className='py-2 px-4 bg-gradient-to-r from-[#06A452] to-[#0DC666] text-white border-transparent rounded-md'>Kérem az árat</button>
                                    </div>
                                </div>

                        </div>

                        
                    

                        </div>

                        <div className='relative w-[14px] -ml-[12px] lg:-mr-[11px] h-[150px] lg:h-[500px] border-r-2 border-dashed'><p className='absolute flex justify-center items-center w-12 h-12 rounded-full -left-3 bg-green-500 text-white font-black top-2/4 -translate-y-1/2'>1.</p></div>

                        <div className='flex flex-col items-center lg:items-end w-11/12 lg:w-[49%] text-center gap-8 m-auto'>
                        <div className='flex flex-col gap-8 w-full lg:w-8/12'>
                        <h1 className='font-black text-3xl'>Árkalkulátor</h1>
                        <p>Add meg a kalkulátrban  a szigetelni kívánt felületek számát, méretét, a szigetelés vastagságát, és a telepítés irányítószámát, mi pedig 1 percen belül küldünk egy indikatív árajánlatot az email címedre.
                        </p>
                        <Link href="/kalkulator"><MainCTA>Árat kalkulálok</MainCTA></Link>
                        </div>          
                    </div>

                </div>

                <div className='flex flex-col lg:flex-row w-11/12 lg:w-8/12 items-center'>   

                    <div className='flex flex-col items-center lg:items-start w-11/12 lg:w-[49%] text-center gap-8'>
                    <div className='flex flex-col gap-8 w-full lg:w-8/12'>
                    <h1 className='font-black text-3xl'>Kapcsolatfelvétel</h1>
                    <p>Az email-ben kapott árajánlat mellé kapsz egy linket amire kattintva (amennyiben elégedett vagy az ajánlattal) visszahívást kérhetsz. Ha így döntesz, és miért ne döntenél így ;) lehetőség szerint még aznap visszahívünk.
                    </p>
                    </div>          
                    </div>

                    <div className='relative w-[14px] -ml-[12px] lg:-mr-[11px] h-[150px] lg:h-[500px] border-r-2 border-dashed my-4 lg:my-0'><p className='absolute flex justify-center items-center w-12 h-12 rounded-full -left-3 bg-green-500 text-white font-black top-2/4 -translate-y-1/2'>2.</p></div>

                    <div className='relative flex flex-col items-center lg:items-end w-11/12 lg:w-[49%] pb-24 lg:py-12 '>
                    
                    <div className='absolute bottom-0 right-0 bg-[#06A452] w-[500px] h-[500px] rounded-full blur-3xl opacity-10 -z-1'></div>

                    <div className='grid email-grid-display w-11/12 lg:w-8/12 h-96 bg-white shadow-xl rounded-xl z-[4] ease-in-animation border border-neutral-200'>
                        
                        <div className='bg-neutral-100 col-span-1 row-span-1 p-6 border-r border-b rounded-tl-xl border-neutral-200'>
                        <div className='flex gap-2 justify-center items-center w-full h-full '>
                            <FaRegEnvelope className='w-10 h-10 text-neutral-300 ' />
                        </div>
                        </div>

                        <div className='bg-white relative flex col-span-1 row-span-1 items-center border-b rounded-tr-xl border-neutral-200 w-full p-4'>
                        <div className='absolute top-0 right-0 p-2 flex gap-1'>
                            <div className=' bg-red-600 w-4 h-4 rounded-full'></div>
                            <div className=' bg-yellow-500 w-4 h-4 rounded-full'></div>
                            <div className=' bg-green-500 w-4 h-4 rounded-full'></div>
                        </div>

                        </div>

                        <div className='bg-white col-span-1 row-span-1 p-6 border-r rounded-bl-xl border-neutral-200'>
                        <div className='flex flex-col gap-2 justify-between items-center w-full h-full'>
                            <div className='flex justify-center items-center gap-2 w-full'>
                            <div className='bg-neutral-200 w-6 h-6 rounded-full'></div>
                            </div>

                            <div className='flex justify-center items-center gap-2 w-full'>
                            <div className='bg-neutral-200 w-6 h-6 rounded-full'></div>
                            </div>

                            <div className='flex justify-center items-center gap-2 w-full'>
                            <div className='bg-neutral-200 w-6 h-6 rounded-full'></div>
                            </div>

                            <div className='flex justify-center items-center gap-2 w-full'>
                            <div className='bg-neutral-200 w-6 h-6 rounded-full'></div>
                            </div>
                            
                        </div>
                        </div>

                        <div className='bg-white col-span-1 row-span-1 rounded-br-xl'>
                        <div className='flex flex-col justify-between items-center w-full h-full'>
                            <div className='bg-[#06a452] h-1/3 flex flex-col items-center gap-2 w-full p-2 border-b border-neutral-200'>
                            <div className='w-3/4 h-4 rounded-full'><h1 className='text-md text-white font-bold'>Arpusz.hu</h1></div>
                            <div className='w-3/4 rounded-full'><h1 className='text-sm text-white opacity-50 font-bold'>Hogy tetszett az ajánlatunk?</h1></div>
                            </div>

                            <div className='flex flex-col items-center align-middle justify-start gap-2 w-full p-2 border-b border-neutral-200'>
                            <div className='bg-neutral-200 w-3/4 h-4 rounded-full'></div>
                            <div className='bg-neutral-100 w-3/4 h-2 rounded-full'></div>
                            </div>

                            <div className='flex flex-col items-center gap-2 w-full p-2 border-b border-neutral-200'>
                            <div className='bg-neutral-200 w-3/4 h-4 rounded-full'></div>
                            <div className='bg-neutral-100 w-3/4 h-2 rounded-full'></div>
                            </div>
                            
                        </div>
                        </div>

                    </div>

                    </div>

                </div>

                <div className='flex flex-col-reverse lg:flex-row w-11/12 lg:w-8/12 items-center'>

                    <div className='flex flex-col items-center lg:items-start w-11/12 lg:w-[49%] pb-24 lg:py-12 '>
                    
                    <div className='flex w-11/12 lg:w-8/12'>
                        <Image width={700} height={500} src='/telefonos-egyeztetes.png'/>
                    </div>

                    </div>

                    <div className='relative w-[14px] -ml-[12px] h-[150px] lg:h-[500px] border-r-2 border-dashed my-4 lg:my-0'><p className='absolute flex justify-center items-center w-12 h-12 rounded-full -left-3 bg-green-500 text-white font-black top-2/4 -translate-y-1/2'>3.</p></div>

                    <div className='flex flex-col items-center lg:items-end w-11/12 lg:w-[49%] text-center gap-8'>
                    <div className='flex flex-col gap-8 w-full lg:w-8/12'>
                    <h1 className='font-black text-3xl'>Egyeztetés</h1>
                    <p>A telefonos vagy email-es egyeztetés után lefixáljuk az árat, és amennyiben szükséges, megbeszélünk egy helyszíni felmérést. Az ilyen felmérés általában csak nagyobb projecteknél szükséges, családi házak illetve azokhoz kapcsolódó melléképületek szigetelésénél általában nincs szükség rá.
                    </p>
                    </div>          
                    </div>

                </div>

                <div className='flex flex-col lg:flex-row w-11/12 lg:w-8/12 items-center'>   

                    <div className='flex flex-col items-center lg:items-start w-11/12 lg:w-[49%] text-center gap-8'>
                    <div className='flex flex-col gap-8 w-full lg:w-8/12'>
                    <h1 className='font-black text-3xl'>Szigetelés</h1>
                    <p>A megbeszélt időpontban kimegyünk és elvégezzük a feladatot. Sőt még egy kis ajándékkal is meglepünk amiért minket választottál!
                    </p>
                    </div>          
                    </div>

                    <div className='relative w-[14px] -ml-[12px] lg:-mr-[11px] h-[150px] lg:h-[500px] border-r-2 border-dashed my-4 lg:my-0'><p className='absolute flex justify-center items-center w-12 h-12 rounded-full -left-3 bg-green-500 text-white font-black top-2/4 -translate-y-1/2'>4.</p></div>

                    <div className='flex flex-col items-center lg:items-end w-11/12 lg:w-[49%] pb-24 lg:py-12 '>
                    
                    <div className='flex w-11/12 lg:w-8/12'>
                        <Image width={700} height={500} src='/munkavegzes.png' />
                    </div>

                    </div>

                </div>

                <div className='flex flex-col-reverse lg:flex-row w-11/12 lg:w-8/12 items-center'>

                    <div className='flex flex-col items-center w-full lg:w-[49%] lg:py-12 mb-12 lg:mb-0'>
                    
                    <div className='flex justify-center items-center p-8 shadow-xl rounded-full border border-neutral-200 z-[4] ease-in-animation'>
                        <AiFillStar className='w-10 h-10 text-[#06a452]'/>
                        <AiFillStar className='w-10 h-10 text-[#06a452]'/>
                        <AiFillStar className='w-10 h-10 text-[#06a452]'/>
                        <AiFillStar className='w-10 h-10 text-[#06a452]'/>
                        <AiFillStar className='w-10 h-10 text-[#06a452]'/>
                    
                    </div>

                    </div>

                    <div className='relative w-[14px] -ml-[12px] lg:-mr-[11px] h-[150px] lg:h-[500px] border-r-2 border-dashed my-4 lg:my-0'><p className='absolute flex justify-center items-center w-12 h-12 rounded-full -left-3 bg-white border-2 border-dashed text-green-500 font-black top-2/4 -translate-y-1/2'>+1</p></div>

                    <div className='flex flex-col items-center lg:items-end w-11/12 lg:w-[49%] text-center gap-8'>
                    <div className='flex flex-col gap-8 w-full lg:w-8/12'>
                    <h1 className='font-black text-3xl'>Értékelés</h1>
                    <p>+1 lépésként értékelheted a munkánkat, ami segít minket a fejlődésben.
                    </p>
                    </div>          
                    </div>

                </div>


                <Link href="/kalkulator"><MainCTA>Ugrás az első lépéshez</MainCTA></Link>

            </section>
        </>
    )
}



