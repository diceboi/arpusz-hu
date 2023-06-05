import Image from 'next/image'
import Link from 'next/link'
import SecondaryCTA from '../secondarycta'


export default function SzolgaltatasokHome() {
    return(
        <>
            <section className='flex flex-col justify-center items-center w-full overflow-hidden bg-neutral-100 shadow-inner shadow-neutral-200 py-12'>

            <div className='flex flex-col w-8/12 py-8'>
                    <h1 className='text-center m-auto text-4xl lg:text-6xl font-black tracking-tighter py-2'>Szolgáltatások</h1>
                    <p  className='text-center lg:text-lg w-11/12 lg:w-1/2 m-auto py-2 uppercase tracking-widest text-neutral-400 font-bold'>Púrhab felhasználás sokszínűen</p>
                </div>
      

                <div className=' grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-4 gap-4 w-11/12 lg:w-8/12 m-auto items-center py-8 '>

                    <div style={{backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/csaladi-haz.jpg")`}} className='base-tile relative overflow-hidden col-span-2 lg:col-span-1 flex items-center justify-center rounded-xl min-h-[250px] bg-cover hover:shadow-xl'>
                        <div className='p-4'><Image className='' src='/csaladi-haz-white-icon.svg' height={60} width={60}></Image></div>

                        <div className='inner-tile absolute flex flex-col gap-4 p-4 items-center justify-center bg-white w-full h-full top-full'>
                        <h2 className='font-bold text-center text-xl'>Családi házak szigetelése</h2>
                        <p className='lg:text-center'>A családi házak szórt púrhabbal történő szigetelése hatékony hőszigetelést biztosít neked, így kevesebbet kell majd költened fűtésre és hűtésre. Sőt, hangszigetelő tulajdonságának hála csendesebb otthont is teremt!</p>
                        </div>
                        
                    </div>

                    <div style={{backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/panelhaz.jpg")`}} className='base-tile relative overflow-hidden col-span-2 lg:col-span-1 flex items-center justify-center rounded-xl min-h-[250px] bg-cover hover:shadow-xl'>
                        <div className='p-4'><Image className='' src='/panelhaz-white-icon.svg' height={50} width={50}></Image></div>

                        <div className='inner-tile absolute flex flex-col gap-4 p-4 items-center justify-center bg-white w-full h-full top-full'>
                        <h2 className='font-bold text-center text-xl'>Panelházak szigetelése</h2>
                        <p className='lg:text-center'>Lapostetők és pincehelységek szigetelésére is tökéletesen alkalmas, így száraz és konfortos környezetben élhetnek az ott lakók.</p>
                        </div>
                        
                    </div>


                    <div style={{backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/uzem.jpg")`}} className='base-tile relative overflow-hidden col-span-2 row-span-1 lg:col-span-1 lg:row-span-2 flex items-center justify-center rounded-xl h-full min-h-[250px] bg-cover hover:shadow-xl ease-in'>
                        <div className='p-4'><Image className='' src='/uzem-white-icon.svg' height={70} width={70}></Image></div>

                        <div className='inner-tile absolute flex flex-col gap-4 p-4 items-center justify-center bg-white w-full h-full top-full'>
                        <h2 className='font-bold text-center text-xl'>Üzemek szigetelése</h2>
                        <p className='lg:text-center'>Küzdesz az elszállt energiaárakkal? A nagy légköbméterek klimatizálásának titka a jó szigetelés. Hatékonyságban pedig a púrhab verhetetlen.</p>

                        </div>
                        
                    </div>

                    <div style={{backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/csarnok.jpg")`}} className='base-tile relative overflow-hidden col-span-2 row-span-1 lg:col-span-1 lg:row-span-2 flex items-center justify-center rounded-xl h-full min-h-[250px]  bg-cover hover:shadow-xl ease-in'>
                        <div className='p-4'><Image className='' src='/csarnok-white-icon.svg' height={70} width={70}></Image></div>

                        <div className='inner-tile absolute flex flex-col gap-4 p-4 items-center justify-center bg-white w-full h-full top-full'>
                        <h2 className='font-bold text-center text-xl'>Csarnokok szigetelése</h2>
                        <p className='lg:text-center'>Hő és vízszigetelés egyben? Zárt cellás púrhabunk tökéletesen alkalmas csarnokok belső falainak és tetőszerkezetének szigetelésére. Ezt hívják úgy, hogy két legyet egy csapásra.</p>

                        </div>
                        
                    </div>

                    <div style={{backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/gazdasagi.jpg")`}} className='base-tile relative overflow-hidden col-span-2 lg:col-span-1 flex items-center justify-center rounded-xl h-full min-h-[250px]  bg-cover hover:shadow-xl ease-in'>
                        <div className='p-4'><Image className='' src='/gazdasagi-white-icon.svg' height={80} width={80}></Image></div>

                        <div className='inner-tile absolute flex flex-col gap-4 p-4 items-center justify-center bg-white w-full h-full top-full'>
                        <h2 className='font-bold text-center text-xl'>Gazdasági épületek szigetelése</h2>
                        <p className='lg:text-center'>Egy nagyipari telepnél, vagy raktárnál fontos, hogy hosszú távra tervezzünk. A kiváló hőszigetelés mellett a púrhab előnyeit évtizedeken át élvezni fogod, hiszen nincs zsugorodás, porlás, mállás.</p>

                        </div>
                        
                    </div>

                    <div style={{backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/tartalyok.jpg")`}} className='base-tile relative overflow-hidden col-span-2 lg:col-span-2 flex items-center justify-center rounded-xl h-full min-h-[250px]  bg-cover hover:shadow-xl'>
                        <div className='p-4'><Image className='' src='/tartalyok-white-icon.svg' height={50} width={50}></Image></div>

                        <div className='inner-tile absolute flex flex-col gap-4 p-4 items-center justify-center bg-white w-full h-full top-full'>
                        <h2 className='font-bold text-center text-xl'>Tartályok szigetelése</h2>
                        <p className='lg:text-center'>Legyen az egy padláson elhelyezett puffer tartály, vagy egy ipari borhűtő tartály, a púrhab kiváló hatékonysága, és azon tulajdonsága, hogy mindenen megtapad, lehetőséget ad az ilyen és ehhez hasonló tartályok szigetelésére is.</p>

                        </div>
                        
                    </div>

                    <div style={{backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/hutoipar.jpg")`}} className='base-tile relative overflow-hidden col-span-2 lg:col-span-1 flex items-center justify-center rounded-xl h-full min-h-[250px]  bg-cover hover:shadow-xl'>
                        <div className='p-4'><Image className='' src='/hutoipar-white-icon.svg' height={50} width={50}></Image></div>

                        <div className='inner-tile absolute flex flex-col gap-4 p-4 items-center justify-center bg-white w-full h-full top-full'>
                        <h2 className='font-bold text-center text-xl'>Hűtőipar</h2>
                        <p className='lg:text-center'>Hűtőkontéreket belső felületeinek szigetelésére is lehetőség van, ha szeretnéd csökkenteni a fentartási költségeidet.</p>

                        </div>
                        
                    </div>

                    <div style={{backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/csorendszer.jpg")`}} className='base-tile relative overflow-hidden col-span-2 lg:col-span-1 flex items-center justify-center rounded-xl h-full min-h-[250px]  bg-cover hover:shadow-xl'>
                        <div className='p-4'><Image className='' src='/csorendszer-white-icon.svg' height={60} width={60}></Image></div>

                        <div className='inner-tile absolute flex flex-col gap-4 p-4 items-center justify-center bg-white w-full h-full top-full'>
                        <h2 className='font-bold text-center text-xl'>Csőszigetelés</h2>
                        <p className='lg:text-center'>A csőrendszerek szigeteletlensége jelentős veszteséget jelenthet bármilyen keringető rendszerben. Erre a problémára is megoldást kínál a szúrt poliuretán hab.</p>

                        </div>
                        
                    </div>

                    <div style={{backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/mobilgarazs.jpg")`}} className='base-tile relative overflow-hidden col-span-2 lg:col-span-1 flex items-center justify-center rounded-xl h-full min-h-[250px]  bg-cover hover:shadow-xl'>
                        <div className='p-4'><Image className='' src='/garazs-white-icon.svg' height={80} width={80}></Image></div>

                        <div className='inner-tile absolute flex flex-col gap-4 p-4 items-center justify-center bg-white w-full h-full top-full'>
                        <h2 className='font-bold text-center text-xl'>Mobilgarázsok szigetelése</h2>
                        <p className='lg:text-center'>Senki sem szereti téli reggeleken a szélvédőről és az ablakokról kapargatni a jeget indulás előtt. Kerüld ki ezeket a felesleges köröket, és fordítsd azt az extra 20 percet magadra, vagy családodra. Szigeteld púrhabbal a garázst.</p>

                        </div>
                        
                    </div>

                    <div style={{backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/pince.jpg")`}} className='base-tile relative overflow-hidden col-span-2 lg:col-span-1 flex items-center justify-center rounded-xl h-full min-h-[250px]  bg-cover hover:shadow-xl'>
                        <div className='p-4'><Image className='' src='/pincek-white-icon.svg' height={80} width={80}></Image></div>

                        <div className='inner-tile absolute flex flex-col gap-4 p-4 items-center justify-center bg-white w-full h-full top-full'>
                        <h2 className='font-bold text-center text-xl'>Pincék szigetelése</h2>
                        <p className='lg:text-center'>Az erősen nedvességnek kitett pincékben kiváló megoldást nyújt a zárt cellás púrhab, ami akár már 3cm vastagság felett teljesen vízszigetel.</p>

                        </div>
                        
                    </div>

                    <Link className='col-span-2' href="/kalkulator">
                    <div className='flex items-start flex-col p-4 bg-gradient-to-r from-[#06A452] to-[#8AECB9] base-tile relative overflow-hidden  rounded-xl h-full min-h-[250px] hover:shadow-xl'>
                        <Image className='absolute right-5 bottom-0 w-[130px] lg:w-[150px]' src='/hand.png' height={200} width={200}></Image>
                        <h2 className='text-4xl text-white font-normal z-[1]'>Számold ki</h2>
                        <h1 className='text-5xl text-white font-black z-[1]'>3 lépésben</h1>
                        <p className='text-lg text-white font-normal z-[1] w-1/2'>a te igényeidnek megfelelő púrhab szigetelést kalkulátorunkkal!</p>
                        
                    </div>
                    </Link>


                </div>

                <Link href="/szolgaltatasok"><SecondaryCTA>Bővebben</SecondaryCTA></Link>

            </section>
            
        </>
    )
}


