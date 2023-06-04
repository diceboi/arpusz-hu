import { AiFillStar } from 'react-icons/ai'
import { BiRightArrowAlt, BiLeftArrowAlt, BiPaperPlane } from 'react-icons/bi'
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
      const walk = (x - startX) * 1; // adjust scrolling speed
      sliderRef.current.scrollLeft = scrollLeft - walk;
    };
  
    const handleMouseUp = () => {
      setIsDragging(false);
    };
    
    
    return(
        <>
        <div className="relative flex flex-col items-center w-full lg:w-10/12 mx-auto my-4 p-4">
          {isLeftButtonVisible && (
            <button
              className="absolute z-10 top-48"
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
            className="w-full overflow-hidden right-full mt-4 h-auto touch-scroll scrollbar-thin scrollbar-thumb-gray-900 scrollbar-thumb-rounded-full scrollbar-track-white"
            onScroll={handleScroll}
            ref={sliderRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
          >
            <div id="newproducts-container" className="flex m-auto gap-4 lg:w-10/12 flex-nowrap overflow-x-scroll">
            <div className='flex flex-col justify-between items-center gap-4 p-4 border rounded-xl min-w-[250px]'>
                <div className='flex'>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                </div>
                <div>
                    <p>Tetőt szigeteltünk, ez tűnt a legjobb és leggyorsabb megoldásnak. Jó áron volt ahhoz képest, hogy 2 óra alatt kész volt.</p>
                </div>
                <div className='flex flex-col gap-2 w-full'>
                    <p className='font-bold'>Kálmán</p>
                    <p>Veszprém</p>
                </div>
                </div>

                <div className='flex flex-col justify-between items-center gap-4 p-4 border rounded-xl min-w-[250px]'>
                <div className='flex'>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                </div>
                <div>
                    <p>Ne tévesszen meg senkit az ára, MEGÉRI!</p>
                </div>
                <div className='flex flex-col gap-2 w-full'>
                    <p className='font-bold'>Zoltán</p>
                    <p>Debrecen</p>
                </div>
                </div>

                <div className='flex flex-col justify-between items-center gap-4 p-4 border rounded-xl min-w-[250px]'>
                <div className='flex'>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                </div>
                <div>
                    <p>Az éves elszámolásnál először kaptam vissza pénz. kőszi fiúk!!!</p>
                </div>
                <div className='flex flex-col gap-2 w-full'>
                    <p className='font-bold'>József</p>
                    <p>Somogyudvarhely</p>
                </div>
                </div>  

                <div className='flex flex-col justify-between items-center gap-4 p-4 border rounded-xl min-w-[250px]'>
                <div className='flex'>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                </div>
                <div>
                    <p>Drágállottam kicsit meglátjuk, hogy szuperál.... a fiúk amúgy jófejek voltak.</p>
                </div>
                <div className='flex flex-col gap-2 w-full'>
                    <p className='font-bold'>Erika</p>
                    <p>Balatonfüred</p>
                </div>
                </div>

                <div className='flex flex-col justify-between items-center gap-4 p-4 border rounded-xl min-w-[250px]'>
                <div className='flex'>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                </div>
                <div>
                    <p>Régi kádárkocka padlását szigeteltük, csak stuka volt előtte. Konkrétan a szigetelés után este már meleg volt a plafon, a garázst is ezzel fogjuk ezek után.</p>
                </div>
                <div className='flex flex-col gap-2 w-full'>
                    <p className='font-bold'>Szilvi</p>
                    <p>Taszár</p>
                </div>
                </div>
            </div>
          </div>
        </div>    


        
        </>
    )
}