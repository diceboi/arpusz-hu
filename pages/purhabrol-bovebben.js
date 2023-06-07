import CtaHome from '../components/homepage/cta-home'
import Image from 'next/image'
import { FaCrown } from 'react-icons/fa'

export default function PurhabrolBovebben() {
    return(
        <>
        
        <section className='flex flex-col justify-center items-center w-full overflow-hidden bg-white pb-12 pt-[75px]'>

          <div className='flex flex-col w-11/12 lg:w-8/12 py-8'>
            <h1 className='text-center m-auto text-4xl lg:text-6xl font-black tracking-tighter py-2'>Miért a púrhab?</h1>
            <p  className='text-center lg:text-lg w-11/12 lg:w-1/2 m-auto py-2 uppercase tracking-widest text-neutral-400 font-bold'>A Púrhab a hőszigetelések etalonja</p>
          </div>

            <div className='flex flex-col lg:flex-row w-full lg:w-8/12 items-center'>

              <div className='flex flex-col items-start w-11/12 lg:w-1/2 py-12 '>


              <div className='relative flex flex-col items-center w-full'>
            
                <div className='absolute bottom-0 left-0 bg-[#06A452] w-full h-full rounded-full blur-3xl opacity-10 z-0'></div>
                  
                  <div className='relative flex w-11/12 lg:w-8/12 bg-white shadow-xl rounded-xl z-[4] ease-in-animation'>
                    <FaCrown className='absolute w-14 h-14 text-[#06A452] -top-11 -left-5 -rotate-12'/>
                    <div className='w-1/3 p-4'><Image className='rounded-lg' src='/purhab.jpg' height={500} width={400}></Image></div>
                    <div className='flex flex-col justify-between '>
                      <h2 className='pt-4 uppercase font-bold text-xl'>Zárt cellás púrhab</h2>
                      <div className='py-4'>
                        <p className='text-md'>U-érték (λ):</p>
                        <div className='flex items-baseline gap-2'>
                        <p className='text-xl font-black'>~ 0.023</p>
                        <p className='text-sm'>W/m²K</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='-mt-4 flex w-10/12 lg:w-7/12 bg-white border border-neutral-200 rounded-xl z-[3] blur-[1px] opacity-60 ease-in-animation-1s'>
                    <div className='w-1/3 p-4'><Image src='/eps.png' height={400} width={400}></Image></div>
                    <div className='flex flex-col justify-between '>
                      <h2 className='pt-3 uppercase font-bold text-lg'>Polisztirol (EPS)</h2>
                      <div className='py-3'>
                        <p className='text-sm'>U-érték (λ):</p>
                        <div className='flex items-baseline gap-2'>
                        <p className='text-lg font-black'>~ 0.040</p>
                        <p className='text-sm'>W/m²K</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='-mt-4 flex w-9/12 lg:w-6/12 bg-white border border-neutral-200 rounded-xl z-[2] blur-[1px] opacity-40 ease-in-animation-2s'>
                    <div className='w-1/3 p-4'><Image src='/kozetgyapot.png' height={400} width={400}></Image></div>
                    <div className='flex flex-col justify-between '>
                      <h2 className='pt-3 uppercase font-bold text-md'>Kőzetgyapot</h2>
                      <div className='py-3'>
                        <p className='text-xs'>U-érték (λ):</p>
                        <div className='flex items-baseline gap-2'>
                        <p className='text-md font-black'>~ 0.044</p>
                        <p className='text-xs'>W/m²K</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='-mt-4 flex w-8/12 lg:w-5/12 bg-white border border-neutral-200 rounded-xl z-[1] blur-[1px] opacity-20 ease-in-animation-3s'>
                    <div className='w-1/3 p-4'><Image src='/kozetgyapot.png' height={400} width={400}></Image></div>
                    <div className='flex flex-col justify-between '>
                      <h2 className='pt-3 uppercase font-bold text-md'>Üveggyapot</h2>
                      <div className='py-3'>
                        <p className='text-xs'>U-érték (λ):</p>
                        <div className='flex items-baseline gap-2'>
                        <p className='text-md font-black'>~ 0.058</p>
                        <p className='text-xs'>W/m²K</p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>


                
            

              </div>


              <div className='flex flex-col items-center lg:items-end w-11/12 lg:w-1/2  gap-8'>
                <div className='flex flex-col gap-8 w-full'>
                <h1 className='font-black text-center lg:text-left text-3xl'>Hatékonyságban legyőzhetetlen</h1>
                <p>Az U érték a hőszigetelésre vonatkozó mennyiségi jellemző, ami  kifejezi, hogy egy adott anyag mennyi hőt enged át az adott felületen keresztül, mértékegysége Watt négyzetméterenként Kelvin (W/m²K).</p>

                <p>Ez fontos szerepet játszik a szigetelés szempontjából, mivel minél kisebb az U érték, annál jobb a szigetelőképesség. Ez azt jelenti, hogy ha egy épületben alacsony U értékű szigetelő anyagot használnak, akkor kevesebb hő áramlik át az épület felületein, így csökken a fűtési és hűtési költség, és javul az épület energetikai hatékonysága.</p>

                <p className='font-bold'>A púrhab a legjobb U értékkel rendelkező szigetelő anyag ezért népszerű választás az építkezők és felújítók körében, akik a legjobb minőséget szeretnék a befektetésükhöz.</p>
                
                </div>          
              </div>

            </div>

            <div className='grid grid-cols-1 grid-rows-4 lg:grid-cols-2 lg:grid-rows-2 w-11/12 lg:w-8/12 m-auto gap-4 py-16'>



                <div className='flex flex-col w-full items-center border border-neutral-200 rounded-xl p-4 hover:bg-white hover:shadow-xl hover:border-white transition-all'>   

                    <div className='relative flex justify-center items-center gap-4 w-full py-4 min-h-[100px]'>
                        <Image width={50} height={50} src="/hoveszteseg-icon.svg" />
                        <Image width={50} height={50} src="/nedvesseg-icon.svg" />
                        <Image width={50} height={50} src="/hang-icon.svg" />
                    </div>

                    <div className='flex flex-col items-end text-center w-full  gap-8'>
                        <div className='flex flex-col gap-8 w-full'>
                        <h1 className='font-black text-2xl'>Hő, hang és vízszigetelés egyben</h1>
                        <p>A púrhab nem csak a hőveszteséget tudja jelentősen csökkenteni, hanem a hang és vízszigetelésben is rendkívül hatékony. Nem véletlenül használnak zárt cellás púrhabot lapostetők, pincék, padlások és egyéb erősen nedvességnek, és hanghatásoknak kitett helyek szigetelésénél.</p>              
                        </div>          
                    </div>

                </div>

                <div className='flex flex-col w-full items-center border border-neutral-200 rounded-xl p-4 hover:bg-white hover:shadow-xl hover:border-white transition-all'>  

                    <div className='relative flex justify-center items-center gap-4 w-full min-h-[100px]'>
                        <Image width={50} height={50} src="/fast.svg" />
                      

                    </div> 

                    <div className='flex flex-col  items-end text-center w-full gap-8'>
                        <div className='flex flex-col gap-8 w-full'>
                        <h1 className='font-black text-2xl'>Pár óra, és kész!</h1>
                        <p>A púrhab a leggyorsabban kivitelezhető szigetelési forma. Nem kell ragasztót keverni, méretre vágni a darabokat, egyszerűen fel kell fújni a felületre, és perceken belül elnyeri végső állapotát.</p>              
                        </div>          
                    </div>



            </div>


              <div className='flex flex-col w-full items-center border border-neutral-200 rounded-xl p-4 hover:bg-white hover:shadow-xl hover:border-white transition-all'>   

                  <div className='relative flex justify-center items-center gap-4 w-full min-h-[100px]'>
                      <Image width={50} height={50} src="/noharm.svg" />
                    

                  </div>

                  <div className='flex flex-col  items-end text-center w-full  gap-8'>
                      <div className='flex flex-col gap-8 w-full'>
                      <h1 className='font-black text-2xl'>Nem káros</h1>
                      <p>Megszilárdulás után nem káros az egészségre, nem táplálja az égést, nem bomlik le, emellett megfelelő felhelyezés esetén nem is gombásodik.</p>              
                      </div>          
                  </div>                

              </div>

              <div className='flex flex-col w-full items-center border border-neutral-200 rounded-xl p-4 hover:bg-white hover:shadow-xl hover:border-white transition-all'>  

                  <div className='relative flex justify-center items-center gap-4 w-full min-h-[100px]'>
                      <Image width={50} height={50} src="/toredezes-icon.svg" />
                    

                  </div> 

                  <div className='flex flex-col  items-end text-center w-full  gap-8'>
                      <div className='flex flex-col gap-8 w-full'>
                      <h1 className='font-black text-2xl'>Nincs veszteség</h1>
                      <p>A megkeményedett púrhab nem zsugorodik, idővel sem porlad, illetve nincs vágási veszteség, maradék. Minden ráfordított forint beépül az épületbe. </p>              
                      </div>          
                  </div>



            </div>



            </div>

            <div className='flex flex-col w-11/12 lg:w-8/12 py-8'>
              <h1 className='text-center m-auto text-4xl lg:text-6xl font-black tracking-tighter py-2'>Hogy történik a kivitelezés?</h1>
              <p  className='text-center lg:text-lg w-full lg:w-1/2 m-auto py-2 uppercase tracking-widest text-neutral-400 font-bold'>Bemutatjuk mi is történik a kivitelezés néhány órája alatt</p>
            </div>

            <div className='flex flex-col gap-4 lg:flex-row w-11/12 lg:w-8/12 items-center border-t border-neutral-300 mt-8'>


              <div className='flex flex-col items-center lg:items-start w-11/12 lg:w-1/2 py-12 '>


              <div className='flex flex-col items-center w-full'>
              
              <Image height={500} width={500} src="/2tartaly.jpg" className='rounded-xl self-start' />

              </div>

              </div>


              <div className='flex flex-col items-center lg:items-end w-11/12 lg:w-1/2  gap-8'>
                <div className='flex flex-col gap-8 w-full'>
                <h1 className='font-black text-3xl'>Előkészületek</h1>
                <p>Az általunk használt púrhab két komponensből áll. Ezek külön tartályokban vannak elhelyezve saját autónkban. Ezeket a folyadékokat szükséges előmelegíteni ami néhány percet vesz igénybe. Ha a két komponens találkozik és reakcióba lép egymással, akkor történik a csoda. Viszont ez a folyamat mindig a púrhab kifújását követően jöhet csak létre, ezért fokozott figyelemmel és óvatossággal járunk el az előkészületek során.</p>
                </div>          
              </div>

            </div>



            <div className='flex flex-col gap-4 lg:flex-row w-11/12 lg:w-8/12 items-center border-t border-neutral-300 mt-8'>


              <div className='flex flex-col items-center lg:items-start w-11/12 lg:w-1/2 py-12'>


              <div className='flex flex-col items-center w-full'>
              
              <iframe className='self-center' width="100%" height="400px" src="https://www.youtube.com/embed/V15ClWgWwpI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

              </div>

              </div>


              <div className='flex flex-col items-center lg:items-end w-11/12 lg:w-1/2  gap-8'>
                <div className='flex flex-col gap-8 w-full'>
                <h1 className='font-black text-3xl'>Fújás</h1>
                <p>Amint a terepet előkészítettük, és a két komponens is megfelelő hőmérsékletű, beöltözünk védőruhába  és elkezdjük fújni a habot. A két összetevő a pisztolyon kívül a szigetelendő felületen találkozik egymással, itt reakcióba lépnek és rátapadnak a felületre. Ez a folyamat pillanatok alatt végbemegy, így a szigetelés kivitelezése rendkívül gyors!</p>
                </div>          
              </div>

            </div>



            <div className=' flex flex-col gap-4 lg:flex-row w-11/12 lg:w-8/12 items-center border-t border-neutral-300 mt-8'>


              <div className='flex flex-col items-center lg:items-start w-11/12 lg:w-1/2 py-12 '>


              <div className='flex flex-col items-center w-full'>
              
              <Image height={500} width={500} src="/nyitott-cella-1.jpg" className='rounded-xl self-start' />
              </div>

              </div>


              <div className='flex flex-col items-center lg:items-end w-11/12 lg:w-1/2 gap-8'>
                <div className='flex flex-col gap-8 w-full'>
                <h1 className='font-black text-3xl'>Ennyi az egész</h1>
                <p>Amint az összes felületet lefújtuk, ellenőrizzük, hogy megfelelő-e a minimum vastagság, és kész is vagyunk. Mindössze néhány óra alatt el is készült a szigetelésed amitől komfortosabb és élhetőbb lett az otthonod! </p>
                </div>          
              </div>

            </div>
        
        </section> 

        <CtaHome/>
        
        </>
    )
}