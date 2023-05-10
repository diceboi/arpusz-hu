import Image from 'next/image'
import { Inter } from 'next/font/google'
import { AiFillStar } from 'react-icons/ai'
import { BiChevronDown } from 'react-icons/bi'

export default function Home() {
  return (
    <>
    
    <div className='relative flex flex-col items-center justify-center w-full pt-[75px] h-screen bg-neutral-100'>
      <div className='flex flex-col justify-evenly w-1/3 h-1/2 place-self-center m-auto min-w-[650px] z-10'>
        <div className='flex flex-col'>
          <Image src='/arpusz-logo-header-01.png' width={1000} height={500} className='w-1/2 self-center -mb-8'></Image>
          <div className='flex justify-between h-10 overflow-hidden'>
            <div className='line'></div>
            <div className='line'></div>
            <div className='line'></div>
            <div className='line'></div>
            <div className='line'></div>
            <div className='line'></div>
            <div className='line'></div>
            <div className='line'></div>
            <div className='line'></div>
            <div className='line'></div>
            <div className='line'></div>
            <div className='line'></div>
            <div className='line'></div>
            <div className='line'></div>
            <div className='line'></div>
            <div className='line'></div>
            <div className='line'></div>
            <div className='line'></div>
            <div className='line'></div>
            <div className='line'></div>
            <div className='line'></div>
            <div className='line'></div>
            <div className='line'></div>
            <div className='line'></div>
            <div className='line'></div>
            <div className='line'></div>
            <div className='line'></div>
            <div className='line'></div>
          </div>
          <div className='relative h-32 w-full border-t border-b border-neutral-400 text-7xl font-black tracking-tighter p-6 overflow-hidden'>
            <h1 className='legzaras-animation absolute'>Légzárás</h1>
            <h1 className='hoszigeteles-animation absolute'>Hőszigetelés</h1>
            <h1 className='vizzaras-animation absolute'>Vízszigetelés</h1>
            <h1 className='hangszigeteles-animation absolute opacity-0'>Hangszigetelés</h1>
          </div>
          <div className='flex justify-between h-10 overflow-hidden'>
            <div className='line2'></div>
            <div className='line2'></div>
            <div className='line2'></div>
            <div className='line2'></div>
            <div className='line2'></div>
            <div className='line2'></div>
            <div className='line2'></div>
            <div className='line2'></div>
            <div className='line2'></div>
            <div className='line2'></div>
            <div className='line2'></div>
            <div className='line2'></div>
            <div className='line2'></div>
            <div className='line2'></div>
            <div className='line2'></div>
            <div className='line2'></div>
            <div className='line2'></div>
            <div className='line2'></div>
            <div className='line2'></div>
            <div className='line2'></div>
            <div className='line2'></div>
            <div className='line2'></div>
            <div className='line2'></div>
            <div className='line2'></div>
            <div className='line2'></div>
            <div className='line2'></div>
            <div className='line2'></div>
            <div className='line2'></div>
          </div>
        </div> 
        <h3 className='p-4 m-4 text-center'>A Púrhab szigetelés az egyik leghatékonyabb módja módja annak, hogy javítsd otthonod kényelmét és csökkentsd az energiaszámlád. Próbáld ki most, és élvezd az azonnali kényelmet és megtakarítást!</h3>
        <div className='flex items-center justify-center gap-4'>
          <button className='py-2 px-4 bg-gradient-to-r from-[#06A452] to-[#0DC666] hover:shadow-[#06a4522f] hover:shadow-xl transition-all text-white border-transparent rounded-md'>Árat kalkulálok</button>
          <button className='py-2 px-4 border border-neutral-300  rounded-md'>Miért a púrhab?</button>
        </div>
      </div>
      <div className='flex justify-between w-8/12 min-w-[650px] m-auto z-10'>
        <div className='flex flex-col justify-between items-center gap-4'><Image src='/nogaps.svg' width={60} height={60}></Image><p>Résmentes</p></div>
        <div className='flex flex-col justify-between items-center gap-4'><Image src='/insulation_1.svg' width={60} height={60}></Image><p>Kiválóan szigetel</p></div>
        <div className='flex flex-col justify-between items-center gap-4'><Image src='/fast.svg' width={60} height={60}></Image><p>Gyors</p></div>
        <div className='flex flex-col justify-between items-center gap-4'><Image src='/budget_1.svg' width={60} height={60}></Image><p>Pénztárcabarát</p></div>
        <div className='flex flex-col justify-between items-center gap-4'><Image src='/noharm.svg' width={60} height={60}></Image><p>Környezetbarát</p></div>
        <div className='flex flex-col justify-between items-center gap-4'><Image src='/nofire.svg' width={60} height={60}></Image><p>Biztonságos</p></div>
      </div>
      <div className='absolute top-0 right-0 bg-[#06A452] w-[500px] h-[500px] rounded-full blur-3xl opacity-10 z-10'></div>
      <div className='absolute bottom-0 left-0 bg-[#06A452] w-[500px] h-[500px] rounded-full blur-3xl opacity-10 z-10'></div>
      <Image src='/kezi-01.png' width={1000} height={1000} className='absolute top-0 right-0 w-3/12 opacity-20'></Image>
      <Image src='/hab-02.png' width={1000} height={1000} className='absolute bottom-0 left-0 w-5/12 opacity-50'></Image>
    </div>



    <section className='flex flex-col justify-center items-center w-screen h-screen bg-white py-12'>
      <div className='flex flex-col w-8/12 py-8'>
      <h1 className='text-center m-auto text-8xl font-black text-white px-4 tracking-tighter bg-gradient-to-r from-[#06A452] to-[#0DC666] py-2'>Púrhab</h1>
        <h1 className='text-center m-auto text-6xl font-black tracking-tighter py-2'>A legjobb szigetelő</h1>
        <p  className='text-center text-xl w-1/2 m-auto py-2'>Miért a púrhab a szigetelőanyagok etalonja? </p>
      </div>
      <div className='flex w-8/12 items-center py-8'>

        <div className='relative flex flex-col items-center w-1/2 '>
        
        <div className='absolute bottom-0 left-0 bg-[#06A452] w-full h-full rounded-full blur-3xl opacity-10 z-0'></div>
          
          <div className='flex w-8/12 bg-white shadow-xl rounded-xl z-[4] ease-in-animation'>
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

          <div className='-mt-4 flex w-7/12 bg-white border border-neutral-200 rounded-xl z-[3] blur-[1px] opacity-60 ease-in-animation-1s'>
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

          <div className='-mt-4 flex w-6/12 bg-white border border-neutral-200 rounded-xl z-[2] blur-[1px] opacity-40 ease-in-animation-2s'>
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

          <div className='-mt-4 flex w-5/12 bg-white border border-neutral-200 rounded-xl z-[1] blur-[1px] opacity-20 ease-in-animation-3s'>
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

        <div className='flex flex-col w-1/3 text-center gap-8'>
          <p>U-érték, Watt per négyzetméterkelvin, porózusság... Ezek mind olyan fogalmak amikről egy laikusnak nem sok minden jut az eszébe, viszont szigetelés szempontjából nagyon fontosak. Hogy ne kelljen tovább keress, összeszedtük neked minden információt, ami megmutatja, hogy miért kiemelkedő a szórt púrhab a többi szigetelőanyaghoz képest.
          </p>
          <button className=' self-center py-2 px-4 border border-neutral-300 rounded-md'>A púrhabról bővebben</button>
        </div>
      </div>
      <button className='py-2 px-4 bg-gradient-to-r from-[#06A452] to-[#0DC666] text-white border-transparent rounded-md'>A legjobb szigetelést szeretném</button>
    </section>


    <section className='flex flex-col justify-center items-center w-screen bg-neutral-100 shadow-inner shadow-neutral-200 py-12'>
      

      <div className=' grid grid-cols-4 gap-4 grid-rows-4 w-8/12 items-center py-8 '>

          <div style={{backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/csaladi-haz.jpg")`}} className='base-tile relative overflow-hidden col-span-2 flex items-center justify-center rounded-xl min-h-[250px] bg-cover hover:shadow-xl'>
            <div className='p-4'><Image className='' src='/csaladi-haz-white-icon.svg' height={60} width={60}></Image></div>

            <div className='inner-tile absolute flex flex-col gap-4 p-4 items-center justify-center bg-white w-full h-full top-full'>
              <h2 className='font-bold text-xl'>Családi házak szigetelése</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            
          </div>

          <div style={{backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/panelhaz.jpg")`}} className='base-tile relative overflow-hidden col-span-1 flex items-center justify-center rounded-xl min-h-[250px] bg-cover hover:shadow-xl'>
            <div className='p-4'><Image className='' src='/panelhaz-white-icon.svg' height={50} width={50}></Image></div>

            <div className='inner-tile absolute flex flex-col gap-4 p-4 items-center justify-center bg-white w-full h-full top-full'>
              <h2 className='font-bold text-xl'>Panelházak szigetelése</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            
          </div>


          <div style={{backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/uzem.jpg")`}} className='base-tile relative overflow-hidden col-span-1 row-span-2 flex items-center justify-center rounded-xl h-full min-h-[250px] bg-cover hover:shadow-xl ease-in'>
            <div className='p-4'><Image className='' src='/uzem-white-icon.svg' height={70} width={70}></Image></div>

            <div className='inner-tile absolute flex flex-col gap-4 p-4 items-center justify-center bg-white w-full h-full top-full'>
              <h2 className='font-bold text-xl'>Üzemek szigetelése</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

            </div>
            
          </div>

          <div style={{backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/csarnok.jpg")`}} className='base-tile relative overflow-hidden col-span-1 row-span-2 flex items-center justify-center rounded-xl h-full min-h-[250px] bg-cover hover:shadow-xl ease-in'>
            <div className='p-4'><Image className='' src='/csarnok-white-icon.svg' height={70} width={70}></Image></div>

            <div className='inner-tile absolute flex flex-col gap-4 p-4 items-center justify-center bg-white w-full h-full top-full'>
              <h2 className='font-bold text-xl'>Csarnokok szigetelése</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

            </div>
            
          </div>

          <div style={{backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/gazdasagi.jpg")`}} className='base-tile relative overflow-hidden col-span-1 flex items-center justify-center rounded-xl h-full min-h-[250px] bg-cover hover:shadow-xl ease-in'>
            <div className='p-4'><Image className='' src='/gazdasagi-white-icon.svg' height={80} width={80}></Image></div>

            <div className='inner-tile absolute flex flex-col gap-4 p-4 items-center justify-center bg-white w-full h-full top-full'>
              <h2 className='font-bold text-xl'>Gazdasági épületek szigetelése</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

            </div>
            
          </div>

          <div style={{backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/tartalyok.jpg")`}} className='base-tile relative overflow-hidden col-span-1 flex items-center justify-center rounded-xl h-full min-h-[250px] bg-cover hover:shadow-xl'>
            <div className='p-4'><Image className='' src='/tartalyok-white-icon.svg' height={50} width={50}></Image></div>

            <div className='inner-tile absolute flex flex-col gap-4 p-4 items-center justify-center bg-white w-full h-full top-full'>
              <h2 className='font-bold text-xl'>Tartályok szigetelése</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

            </div>
            
          </div>

          <div style={{backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/hutoipar.jpg")`}} className='base-tile relative overflow-hidden col-span-2 flex items-center justify-center rounded-xl h-full min-h-[250px] bg-cover hover:shadow-xl'>
            <div className='p-4'><Image className='' src='/hutoipar-white-icon.svg' height={50} width={50}></Image></div>

            <div className='inner-tile absolute flex flex-col gap-4 p-4 items-center justify-center bg-white w-full h-full top-full'>
              <h2 className='font-bold text-xl'>Hűtőipar</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

            </div>
            
          </div>

          <div style={{backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/csorendszer.jpg")`}} className='base-tile relative overflow-hidden col-span-1 flex items-center justify-center rounded-xl h-full min-h-[250px] bg-cover hover:shadow-xl'>
            <div className='p-4'><Image className='' src='/csorendszer-white-icon.svg' height={60} width={60}></Image></div>

            <div className='inner-tile absolute flex flex-col gap-4 p-4 items-center justify-center bg-white w-full h-full top-full'>
              <h2 className='font-bold text-xl'>Csőszigetelés</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

            </div>
            
          </div>

          <div style={{backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/mobilgarazs.jpg")`}} className='base-tile relative overflow-hidden col-span-1 flex items-center justify-center rounded-xl h-full min-h-[250px] bg-cover hover:shadow-xl'>
            <div className='p-4'><Image className='' src='/garazs-white-icon.svg' height={80} width={80}></Image></div>

            <div className='inner-tile absolute flex flex-col gap-4 p-4 items-center justify-center bg-white w-full h-full top-full'>
              <h2 className='font-bold text-xl'>Mobilgarázsok szigetelése</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

            </div>
            
          </div>

          <div style={{backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/pince.jpg")`}} className='base-tile relative overflow-hidden col-span-1 flex items-center justify-center rounded-xl h-full min-h-[250px] bg-cover hover:shadow-xl'>
            <div className='p-4'><Image className='' src='/pincek-white-icon.svg' height={80} width={80}></Image></div>

            <div className='inner-tile absolute flex flex-col gap-4 p-4 items-center justify-center bg-white w-full h-full top-full'>
              <h2 className='font-bold text-xl'>Pincék szigetelése</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

            </div>
            
          </div>

          <div className='flex items-start flex-col p-4 bg-gradient-to-r from-[#06A452] to-[#8AECB9] base-tile relative overflow-hidden col-span-2 rounded-xl h-full min-h-[250px] hover:shadow-xl'>
            <Image className='absolute right-5 bottom-0' src='/hand.png' height={200} width={200}></Image>
            <h2 className='text-4xl text-white font-normal z-[1]'>Számold ki</h2>
            <h1 className='text-5xl text-white font-black z-[1]'>3 lépésben</h1>
            <p className='text-lg text-white font-normal z-[1] w-1/2'>a te igényeidnek megfelelő púrhab szigetelést kalkulátorunkkal!</p>
            
          </div>


      </div>

    </section>

    <section className='flex flex-col justify-center items-center w-screen bg-white '>

      <div className='flex flex-col w-8/12 py-8'>
          <h1 className='text-center m-auto text-6xl font-black tracking-tighter py-2'>Hogyan lesz Púrhab szigetelésed?</h1>
          <p  className='text-center text-xl w-1/2 m-auto py-2'>4 + 1 lépésben megmutatjuk, mennyire egyszerűen lehet neked is egy energiahatékony és komfortos épületed.</p>
      </div>

        <div className='flex w-8/12 items-center'>

          <div className='flex flex-col items-start w-[49%] py-12 '>
            
            <div className='flex w-8/12 h-96 bg-white shadow-xl rounded-xl z-[4] ease-in-animation'>
              
            </div>

          </div>

          <div className='relative w-[14px] -mr-[11px] h-[500px] border-r-2 border-dashed'><p className='absolute flex justify-center items-center w-12 h-12 rounded-full -left-3 bg-green-500 text-white font-black top-2/4 -translate-y-1/2'>1.</p></div>

          <div className='flex flex-col  items-end w-[49%] text-center gap-8'>
            <div className='flex flex-col gap-8 w-8/12'>
            <p>Add meg a kalkulátrban  a szigetelni kívánt felületek számát, méretét, a szigetelés vastagságát, és a telepítés irányítószámát, mi pedig 1 percen belül küldünk egy indikatív árajánlatot az email címedre.
            </p>
            <button className=' self-center py-2 px-4 border border-neutral-300 rounded-md'>A púrhabról bővebben</button>
            </div>          
          </div>

        </div>

        <div className='flex w-8/12 items-center'>   

          <div className='flex flex-col  items-start w-[49%] text-center gap-8'>
            <div className='flex flex-col gap-8 w-8/12'>
            <p>Az email-ben kapott árajánlat mellé kapsz egy linket amire kattintva (amennyiben elégedett vagy az ajánlattal) visszahívást kérhetsz. Ha így döntesz, és miért ne döntenél így ;) lehetőség szerint még aznap visszahívünk.
            </p>
            <button className=' self-center py-2 px-4 border border-neutral-300 rounded-md'>A púrhabról bővebben</button>
            </div>          
          </div>

          <div className='relative w-[14px] -mr-[11px] h-[500px] border-r-2 border-dashed'><p className='absolute flex justify-center items-center w-12 h-12 rounded-full -left-3 bg-green-500 text-white font-black top-2/4 -translate-y-1/2'>2.</p></div>

          <div className='flex flex-col items-end w-[49%] py-12 '>
            
            <div className='flex w-8/12 h-96 bg-white shadow-xl rounded-xl z-[4] ease-in-animation'>
              
            </div>

          </div>

        </div>

        <div className='flex w-8/12 items-center'>

          <div className='flex flex-col items-start w-[49%] py-12 '>
            
            <div className='flex w-8/12 h-96 bg-white shadow-xl rounded-xl z-[4] ease-in-animation'>
              
            </div>

          </div>

          <div className='relative w-[14px] -mr-[11px] h-[500px] border-r-2 border-dashed'><p className='absolute flex justify-center items-center w-12 h-12 rounded-full -left-3 bg-green-500 text-white font-black top-2/4 -translate-y-1/2'>3.</p></div>

          <div className='flex flex-col  items-end w-[49%] text-center gap-8'>
            <div className='flex flex-col gap-8 w-8/12'>
            <p>A telefonos vagy email-es egyeztetés után lefixáljuk az árat, és amennyiben szükséges, megbeszélünk egy helyszíni felmérést. Az ilyen felmérés általában csak nagyobb projecteknél szükséges, családi házak illetve azokhoz kapcsolódó melléképületek szigetelésénél általában nincs szükség rá.
            </p>
            <button className=' self-center py-2 px-4 border border-neutral-300 rounded-md'>A púrhabról bővebben</button>
            </div>          
          </div>

        </div>

        <div className='flex w-8/12 items-center'>   

          <div className='flex flex-col  items-start w-[49%] text-center gap-8'>
            <div className='flex flex-col gap-8 w-8/12'>
            <p>A megbeszélt időpontban kimegyünk és elvégezzük a feladatot. Sőt még egy kis ajándékkal is meglepünk amiért minket választottál!
            </p>
            <button className=' self-center py-2 px-4 border border-neutral-300 rounded-md'>A púrhabról bővebben</button>
            </div>          
          </div>

          <div className='relative w-[14px] -mr-[11px] h-[500px] border-r-2 border-dashed'><p className='absolute flex justify-center items-center w-12 h-12 rounded-full -left-3 bg-green-500 text-white font-black top-2/4 -translate-y-1/2'>4.</p></div>

          <div className='flex flex-col items-end w-[49%] py-12 '>
            
            <div className='flex w-8/12 h-96 bg-white shadow-xl rounded-xl z-[4] ease-in-animation'>
              
            </div>

          </div>

        </div>

        <div className='flex w-8/12 items-center'>

          <div className='flex flex-col items-start w-[49%] py-12 '>
            
            <div className='flex w-8/12 h-96 bg-white shadow-xl rounded-xl z-[4] ease-in-animation'>
              
            </div>

          </div>

          <div className='relative w-[14px] -mr-[11px] h-[500px] border-r-2 border-dashed'><p className='absolute flex justify-center items-center w-12 h-12 rounded-full -left-3 bg-white border-2 border-dashed text-green-500 font-black top-2/4 -translate-y-1/2'>+1</p></div>

          <div className='flex flex-col  items-end w-[49%] text-center gap-8'>
            <div className='flex flex-col gap-8 w-8/12'>
            <p>+1 lépésként értékelheted a munkánkat, ami segít minket a fejlődésben.
            </p>
            <button className=' self-center py-2 px-4 border border-neutral-300 rounded-md'>A púrhabról bővebben</button>
            </div>          
          </div>

        </div>


      <button className='py-2 px-4 bg-gradient-to-r from-[#06A452] to-[#0DC666] text-white border-transparent rounded-md'>A legjobb szigetelést szeretném</button>
    
    </section>  


    <section className='flex flex-col justify-center items-center w-screen bg-white py-12'>
      <div className='flex flex-col w-8/12 py-8'>
        <h1 className='text-center m-auto text-6xl font-black tracking-tighter py-2'>Referenciák</h1>
        <p  className='text-center text-xl w-1/2 m-auto py-2'>Akik már minket választottak</p>
      </div>
      <div className='flex w-8/12 items-center py-8'>

        <div className='grid grid-cols-3 grid-rows-4 gap-4 w-full h-full'>
          <div style={{backgroundImage: `url("/nyitott-cella-1.jpg")`}} className='flex flex-col justify-end col-span-2 row-span-2 bg-black min-h-[500px] rounded-xl bg-cover bg-center'>
            <div className='flex gap-2 justify-center bg-white bg-opacity-75 w-full h-auto p-2'><p className='font-black'>Gyékényes</p><p>Nyitott cellás szigetelés</p></div>
          </div>
          <div style={{backgroundImage: `url("/nyitott-cella-2.jpg")`}} className='flex flex-col justify-end col-span-1 row-span-4 bg-black min-h-[500px] rounded-xl bg-cover bg-center' >
            <div className='flex gap-2 justify-center bg-white bg-opacity-75 w-full h-auto p-2'><p className='font-black'>Gyékényes</p><p>Nyitott cellás szigetelés</p></div>
          </div>
          <div style={{backgroundImage: `url("/nyitott-cella-3.jpg")`}} className='flex flex-col justify-end col-span-1 row-span-2 bg-black min-h-[500px] rounded-xl bg-cover bg-center'>
            <div className='flex gap-2 justify-center bg-white bg-opacity-75 w-full h-auto p-2'><p className='font-black'>Gyékényes</p><p>Nyitott cellás szigetelés</p></div>
          </div>
          <div style={{backgroundImage: `url("/zart-cella-1.jpg")`}} className='flex flex-col justify-end col-span-1 row-span-2 bg-black min-h-[500px] rounded-xl bg-cover bg-center'>
            <div className='flex gap-2 justify-center bg-white bg-opacity-75 w-full h-auto p-2'><p className='font-black'>Gyékényes</p><p>Nyitott cellás szigetelés</p></div>
          </div>
        </div>

      </div>

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

      <button className='py-2 px-4 bg-gradient-to-r from-[#06A452] to-[#0DC666] text-white border-transparent rounded-md'>A legjobb szigetelést szeretném</button>
    </section>


    <section className='flex flex-col justify-center items-center w-screen bg-white py-12'>
      <div className='flex flex-col w-8/12 py-8'>
        <h1 className='text-center m-auto text-6xl font-black tracking-tighter py-2'>GYIK</h1>
        <p  className='text-center text-xl w-1/2 m-auto py-2'>Gyakran ismételt kérdések</p>
      </div>
      
      <div className='flex flex-col w-8/12 items-center py-8'>
        

        <div className='collapsible flex flex-col items-stretch justify-center align-middle w-full border-t border-b py-4'>
          <input type='checkbox' id='collapsible-head'></input>
          <label for="collapsible-head" className='uppercase tracking-widest text-xl font-bold'>Mi az a púrhab szigetelés?</label>
          <div className='collapsible-text'>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
        </div>

        <div className='collapsible1 flex flex-col items-stretch justify-center align-middle w-full border-t border-b py-4'>
          <input type='checkbox' id='collapsible-head1'></input>
          <label for="collapsible-head1" className='uppercase tracking-widest text-xl font-bold'>Milyen területeken használható a púrhab szigetelés?</label>
          <div className='collapsible-text1'>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
        </div>

        <div className='collapsible2 flex flex-col items-stretch justify-center align-middle w-full border-t border-b py-4'>
          <input type='checkbox' id='collapsible-head2'></input>
          <label for="collapsible-head2" className='uppercase tracking-widest text-xl font-bold'>Miért előnyös a púrhab szigetelés más szigetelőanyagokhoz képest?</label>
          <div className='collapsible-text2'>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
        </div>

        <div className='collapsible3 flex flex-col items-stretch justify-center align-middle w-full border-t border-b py-4'>
          <input type='checkbox' id='collapsible-head3'></input>
          <label for="collapsible-head3" className='uppercase tracking-widest text-xl font-bold'>Mennyire tartós a púrhab szigetelés?</label>
          <div className='collapsible-text3'>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
        </div>

        <div className='collapsible4 flex flex-col items-stretch justify-center align-middle w-full border-t border-b py-4'>
          <input type='checkbox' id='collapsible-head4'></input>
          <label for="collapsible-head4" className='uppercase tracking-widest text-xl font-bold'>Hogyan történik a púrhab szigetelés folyamata?</label>
          <div className='collapsible-text4'>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
        </div>

        <div className='collapsible5 flex flex-col items-stretch justify-center align-middle w-full border-t border-b py-4'>
          <input type='checkbox' id='collapsible-head5'></input>
          <label for="collapsible-head5" className='uppercase tracking-widest text-xl font-bold'>Mennyi idő alatt készül el a púrhab szigetelés?</label>
          <div className='collapsible-text5'>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
        </div>

        <div className='collapsible6 flex flex-col items-stretch justify-center align-middle w-full border-t border-b py-4'>
          <input type='checkbox' id='collapsible-head6'></input>
          <label for="collapsible-head6" className='uppercase tracking-widest text-xl font-bold'>Milyen előkészületekre van szükség a púrhab szigetelés előtt?</label>
          <div className='collapsible-text6'>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
        </div>

        <div className='collapsible7 flex flex-col items-stretch justify-center align-middle w-full border-t border-b py-4'>
          <input type='checkbox' id='collapsible-head7'></input>
          <label for="collapsible-head7" className='uppercase tracking-widest text-xl font-bold'>Milyen típusú púrhabok vannak?</label>
          <div className='collapsible-text7'>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
        </div>

        <div className='collapsible8 flex flex-col items-stretch justify-center align-middle w-full border-t border-b py-4'>
          <input type='checkbox' id='collapsible-head8'></input>
          <label for="collapsible-head8" className='uppercase tracking-widest text-xl font-bold'>Milyen árban mozog a púrhab szigetelés?</label>
          <div className='collapsible-text8'>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
        </div>

        <div className='collapsible9 flex flex-col items-stretch justify-center align-middle w-full border-t border-b py-4'>
          <input type='checkbox' id='collapsible-head9'></input>
          <label for="collapsible-head9" className='uppercase tracking-widest text-xl font-bold'>Milyen garanciát vállalnak a púrhab szigetelésre?</label>
          <div className='collapsible-text9'>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
        </div>



      </div>

      <button className='py-2 px-4 bg-gradient-to-r from-[#06A452] to-[#0DC666] text-white border-transparent rounded-md'>A legjobb szigetelést szeretném</button>
    </section>



    <section className='flex flex-col justify-center items-center w-screen bg-white py-12'>
      <div className='flex flex-col w-8/12 py-8'>
        <h1 className='text-center m-auto text-6xl font-black tracking-tighter py-2'>Blog</h1>
        <p  className='text-center text-xl w-1/2 m-auto py-2'>Érdekességek a szigetelés világából</p>
      </div>
      <div className='flex w-8/12 items-center py-8'>

        <div className='grid grid-cols-2 grid-rows-3 gap-4 w-full h-full'>
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
    </section>

    <section>

    <div className='flex w-8/12 m-auto items-start flex-col p-4 bg-gradient-to-r from-[#06A452] to-[#8AECB9] base-tile relative overflow-hidden col-span-2 rounded-xl h-full min-h-[250px] hover:shadow-xl'>
            <Image className='absolute right-5 bottom-0' src='/hand.png' height={200} width={200}></Image>
            <h2 className='text-4xl text-white font-normal z-[1]'>Számold ki</h2>
            <h1 className='text-5xl text-white font-black z-[1]'>3 lépésben</h1>
            <p className='text-lg text-white font-normal z-[1] w-1/2'>a te igényeidnek megfelelő púrhab szigetelést kalkulátorunkkal!</p>
            
    </div>

    </section>
    </>
  )
}