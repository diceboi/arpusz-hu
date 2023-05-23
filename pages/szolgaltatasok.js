import Image from 'next/image'
import { Inter } from 'next/font/google'
import { AiFillStar } from 'react-icons/ai'
import { BiChevronDown } from 'react-icons/bi'

export default function Szolgaltatasok() {
    return (
    <>
    <section className='flex flex-col justify-center items-center w-full overflow-hidden bg-neutral-100 shadow-inner shadow-neutral-200 pb-12 pt-[75px]'>
    <div className='flex flex-col w-8/12 py-8'>
        <h1 className='text-center m-auto text-6xl font-black tracking-tighter py-2'>Szolgáltatások</h1>
        <p  className='text-center text-xl w-1/2 m-auto py-2'>Vállalkozásunk szórt púrhab szigeteléssel foglalkozik</p>
      </div>

      <div className=' grid grid-cols-3 gap-4 grid-rows-4 w-8/12 items-center py-8 '>

          <div style={{backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/csaladi-haz.jpg")`}} className='base-tile relative overflow-hidden col-span-1 flex items-center justify-center rounded-xl min-h-[250px] bg-cover hover:shadow-xl'>
            <div className='p-4 flex flex-col gap-2 justify-center items-center'><Image className='' src='/csaladi-haz-white-icon.svg' height={60} width={60}></Image><h2 className='font-bold text-xl text-white'>Családi házak szigetelése</h2></div>

            <div className='inner-tile absolute flex flex-col gap-4 p-4 items-center justify-center bg-white w-full h-full top-full'>
              <h2 className='font-bold text-xl'>Családi házak szigetelése</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            
          </div>

          <div style={{backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/panelhaz.jpg")`}} className='base-tile relative overflow-hidden col-span-1 flex items-center justify-center rounded-xl min-h-[250px] bg-cover hover:shadow-xl'>
            <div className='p-4 flex flex-col gap-2 justify-center items-center'><Image className='' src='/panelhaz-white-icon.svg' height={50} width={50}></Image><h2 className='font-bold text-xl text-white'>Panelházak szigetelése</h2></div>

            <div className='inner-tile absolute flex flex-col gap-4 p-4 items-center justify-center bg-white w-full h-full top-full'>
              <h2 className='font-bold text-xl'>Panelházak szigetelése</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            
          </div>


          <div style={{backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/uzem.jpg")`}} className='base-tile relative overflow-hidden col-span-1 flex items-center justify-center rounded-xl h-full min-h-[250px] bg-cover hover:shadow-xl ease-in'>
            <div className='p-4 flex flex-col gap-2 justify-center items-center'><Image className='' src='/uzem-white-icon.svg' height={70} width={70}></Image><h2 className='font-bold text-xl text-white'>Üzemek szigetelése</h2></div>

            <div className='inner-tile absolute flex flex-col gap-4 p-4 items-center justify-center bg-white w-full h-full top-full'>
              <h2 className='font-bold text-xl'>Üzemek szigetelése</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

            </div>
            
          </div>

          <div style={{backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/csarnok.jpg")`}} className='base-tile relative overflow-hidden col-span-1 flex items-center justify-center rounded-xl h-full min-h-[250px] bg-cover hover:shadow-xl ease-in'>
            <div className='p-4 flex flex-col gap-2 justify-center items-center'><Image className='' src='/csarnok-white-icon.svg' height={70} width={70}></Image><h2 className='font-bold text-xl text-white'>Csarnokok szigetelése</h2></div>

            <div className='inner-tile absolute flex flex-col gap-4 p-4 items-center justify-center bg-white w-full h-full top-full'>
              <h2 className='font-bold text-xl'>Csarnokok szigetelése</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

            </div>
            
          </div>

          <div style={{backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/gazdasagi.jpg")`}} className='base-tile relative overflow-hidden col-span-1 flex items-center justify-center rounded-xl h-full min-h-[250px] bg-cover hover:shadow-xl ease-in'>
            <div className='p-4 flex flex-col gap-2 justify-center items-center'><Image className='' src='/gazdasagi-white-icon.svg' height={80} width={80}></Image><h2 className='font-bold text-xl text-white'>Gazdasági épületek szigetelése</h2></div>

            <div className='inner-tile absolute flex flex-col gap-4 p-4 items-center justify-center bg-white w-full h-full top-full'>
              <h2 className='font-bold text-xl'>Gazdasági épületek szigetelése</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

            </div>
            
          </div>

          <div style={{backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/tartalyok.jpg")`}} className='base-tile relative overflow-hidden col-span-1 flex items-center justify-center rounded-xl h-full min-h-[250px] bg-cover hover:shadow-xl'>
            <div className='p-4 flex flex-col gap-2 justify-center items-center'><Image className='' src='/tartalyok-white-icon.svg' height={50} width={50}></Image><h2 className='font-bold text-xl text-white'>Tartályok szigetelése</h2></div>

            <div className='inner-tile absolute flex flex-col gap-4 p-4 items-center justify-center bg-white w-full h-full top-full'>
              <h2 className='font-bold text-xl'>Tartályok szigetelése</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

            </div>
            
          </div>

          <div style={{backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/hutoipar.jpg")`}} className='base-tile relative overflow-hidden col-span-1 flex items-center justify-center rounded-xl h-full min-h-[250px] bg-cover hover:shadow-xl'>
            <div className='p-4 flex flex-col gap-2 justify-center items-center'><Image className='' src='/hutoipar-white-icon.svg' height={50} width={50}></Image><h2 className='font-bold text-xl text-white'>Hűtőipar</h2></div>

            <div className='inner-tile absolute flex flex-col gap-4 p-4 items-center justify-center bg-white w-full h-full top-full'>
              <h2 className='font-bold text-xl'>Hűtőipar</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

            </div>
            
          </div>

          <div style={{backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/csorendszer.jpg")`}} className='base-tile relative overflow-hidden col-span-1 flex items-center justify-center rounded-xl h-full min-h-[250px] bg-cover hover:shadow-xl'>
            <div className='p-4 flex flex-col gap-2 justify-center items-center'><Image className='' src='/csorendszer-white-icon.svg' height={60} width={60}></Image><h2 className='font-bold text-xl text-white'>Csőszigetelés</h2></div>

            <div className='inner-tile absolute flex flex-col gap-4 p-4 items-center justify-center bg-white w-full h-full top-full'>
              <h2 className='font-bold text-xl'>Csőszigetelés</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

            </div>
            
          </div>

          <div style={{backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/mobilgarazs.jpg")`}} className='base-tile relative overflow-hidden col-span-1 flex items-center justify-center rounded-xl h-full min-h-[250px] bg-cover hover:shadow-xl'>
            <div className='p-4 flex flex-col gap-2 justify-center items-center'><Image className='' src='/garazs-white-icon.svg' height={80} width={80}></Image><h2 className='font-bold text-xl text-white'>Mobilgarázsok szigetelése</h2></div>

            <div className='inner-tile absolute flex flex-col gap-4 p-4 items-center justify-center bg-white w-full h-full top-full'>
              <h2 className='font-bold text-xl'>Mobilgarázsok szigetelése</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

            </div>
            
          </div>

          <div style={{backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/pince.jpg")`}} className='base-tile relative overflow-hidden col-span-1 flex items-center justify-center rounded-xl h-full min-h-[250px] bg-cover hover:shadow-xl'>
            <div className='p-4 flex flex-col gap-2 justify-center items-center'><Image className='' src='/pincek-white-icon.svg' height={80} width={80}></Image><h2 className='font-bold text-xl text-white'>Pincék szigetelése</h2></div>

            <div className='inner-tile absolute flex flex-col gap-4 p-4 items-center justify-center bg-white w-full h-full top-full'>
              <h2 className='font-bold text-xl'>Pincék szigetelése</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

            </div>
            
          </div>

          <div style={{backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/pince.jpg")`}} className='base-tile relative overflow-hidden col-span-1 flex items-center justify-center rounded-xl h-full min-h-[250px] bg-cover hover:shadow-xl'>
            <div className='p-4 flex flex-col gap-2 justify-center items-center'><Image className='' src='/pincek-white-icon.svg' height={80} width={80}></Image><h2 className='font-bold text-xl text-white'>Helyszíni felmérés</h2></div>

            <div className='inner-tile absolute flex flex-col gap-4 p-4 items-center justify-center bg-white w-full h-full top-full'>
              <h2 className='font-bold text-xl'>Helyszíni felmérés</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

            </div>
            
          </div>

          <div className='flex items-start flex-col p-4 bg-gradient-to-r from-[#06A452] to-[#8AECB9] base-tile relative overflow-hidden col-span-1 rounded-xl h-full min-h-[250px] hover:shadow-xl'>
            <Image className='absolute right-5 bottom-0' src='/hand.png' height={150} width={150}></Image>
            <h2 className='text-4xl text-white font-normal z-[1]'>Számold ki</h2>
            <h1 className='text-5xl text-white font-black z-[1]'>3 lépésben</h1>
            <p className='text-lg text-white font-normal z-[1] w-1/2'>a te igényeidnek megfelelő púrhab szigetelést kalkulátorunkkal!</p>
            
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

    </section>
    </>
    )
}