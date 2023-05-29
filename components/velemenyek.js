import { AiFillStar } from 'react-icons/ai'
import { BiRightArrowAlt, BiLeftArrowAlt, BiPaperPlane } from 'react-icons/bi'
import Link from 'next/link'
import MainCTA from '@/components/maincta'
import { useState, useRef, useEffect } from 'react';


export default function Velemenyek() {
    

    const sliderRef = useRef(null);
    const [isLeftButtonVisible, setIsLeftButtonVisible] = useState(false);
    const [isRightButtonVisible, setIsRightButtonVisible] = useState(true);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
  
    const handleScroll = () => {
      if (sliderRef.current.scrollLeft === 0) {
        setIsLeftButtonVisible(false);
      } else {
        setIsLeftButtonVisible(true);
      }
  
      if (
        sliderRef.current.scrollLeft ===
        sliderRef.current.scrollWidth - sliderRef.current.clientWidth
      ) {
        setIsRightButtonVisible(false);
      } else {
        setIsRightButtonVisible(true);
      }
    };
  
    const handleLeftButtonClick = () => {
      sliderRef.current.scroll({
        left: sliderRef.current.scrollLeft - 266,
        behavior: "smooth",
      });
    };
  
    const handleRightButtonClick = () => {
      sliderRef.current.scroll({
        left: sliderRef.current.scrollLeft + 266,
        behavior: "smooth",
      });
    };
  
    const handleMouseDown = (e) => {
      setIsDragging(true);
      setStartX(e.pageX - sliderRef.current.offsetLeft);
      setScrollLeft(sliderRef.current.scrollLeft);
    };
  
    const handleMouseMove = (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - sliderRef.current.offsetLeft;
      const walk = (x - startX) * 3; // adjust scrolling speed
      sliderRef.current.scrollLeft = scrollLeft - walk;
    };
  
    const handleMouseUp = () => {
      setIsDragging(false);
    };
    
    
    return(
        <>
        <div className="relative flex flex-col items-center w-full lg:w-11/12 mx-auto my-4 p-4">
          {isLeftButtonVisible && (
            <button
              className="absolute z-10 left-8 lg:-left-1 top-48"
              onClick={handleLeftButtonClick}
            >
              <BiLeftArrowAlt className="h-10 w-10 rounded-full bg-green-500 text-white" />
            </button>
          )}
          {isRightButtonVisible && (
            <button
              className="absolute z-10 right-8 lg:-right-1 top-48"
              onClick={handleRightButtonClick}
            >
              <BiRightArrowAlt className="h-10 w-10 rounded-full bg-green-500 text-white" />
            </button>
          )}
          <h1 className="flex items-center top-[-18px] left-4 text-2xl text-black font-black uppercase ">
            Vélemények
          </h1>
          <div
            id="newproducts-outter-container"
            className="w-full overflow-hidden right-full mt-4 h-[400px] overflow-x-scroll overflow-y-hidden touch-scroll scrollbar-thin scrollbar-thumb-gray-900 scrollbar-thumb-rounded-full scrollbar-track-white"
            onScroll={handleScroll}
            ref={sliderRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
          >
            <div id="newproducts-container" className="grid grid-cols-4 m-auto gap-4 w-[1064px]">
            <div className='flex flex-col justify-center items-center gap-4 p-4 border rounded-xl w-[250px]'>
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
                <div className='flex flex-col gap-2'>
                    <p className='font-bold'>József</p>
                    <p>Somogyudvarhely</p>
                </div>
                </div>

                <div className='flex flex-col justify-center items-center gap-4 p-4 border rounded-xl w-[250px]'>
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
                <div className='flex flex-col gap-2'>
                    <p className='font-bold'>József</p>
                    <p>Somogyudvarhely</p>
                </div>
                </div>

                <div className='flex flex-col justify-center items-center gap-4 p-4 border rounded-xl w-[250px]'>
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
                <div className='flex flex-col gap-2'>
                    <p className='font-bold'>József</p>
                    <p>Somogyudvarhely</p>
                </div>
                </div>  

                <div className='flex flex-col justify-center items-center gap-4 p-4 border rounded-xl w-[250px]'>
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
                <div className='flex flex-col gap-2'>
                    <p className='font-bold'>József</p>
                    <p>Somogyudvarhely</p>
                </div>
                </div>
            </div>
          </div>
        </div>    


        <Link href="/kalkulator"><MainCTA>Tovább a kalkulátorhoz</MainCTA></Link>
        </>
    )
}