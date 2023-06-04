import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState, useEffect } from 'react'
import { AiFillStar } from 'react-icons/ai'
import { BiChevronDown } from 'react-icons/bi'
import { GrClose } from 'react-icons/gr'

import { Tooltip } from 'react-tooltip'
import Velemenyek from '@/components/velemenyek'

export default function Szolgaltatasok() {

const [isOpen1, setIsOpen1] = useState(false);

const [isFirstStepHighlighted, setIsFirstStepHighlighted] = useState(true);
const [isSecondStepHighlighted, setIsSecondStepHighlighted] = useState(false);
const [isThirdStepHighlighted, setIsThirdStepHighlighted] = useState(false);
const [isFourthStepHighlighted, setIsFourthStepHighlighted] = useState(false);

const firstStep = () => {
  setIsFirstStepHighlighted(true);
  setIsSecondStepHighlighted(false);
  setIsThirdStepHighlighted(false);
  setIsFourthStepHighlighted(false);
};

const secondStep = () => {
  setIsFirstStepHighlighted(false);
  setIsSecondStepHighlighted(true);
  setIsThirdStepHighlighted(false);
  setIsFourthStepHighlighted(false);
};

const thirdStep = () => {
  setIsFirstStepHighlighted(false);
  setIsSecondStepHighlighted(false);
  setIsThirdStepHighlighted(true);
  setIsFourthStepHighlighted(false);
};

const fourthStep = () => {
  setIsFirstStepHighlighted(false);
  setIsSecondStepHighlighted(false);
  setIsThirdStepHighlighted(false);
  setIsFourthStepHighlighted(true);
};

//Slider

const [value, setValue] = useState(10)

const handleSliderChange = (event) => {
  setValue(event.target.value);

};

const imageUrl = `/rangeslider/${value}slider.svg`;

//Kalkulátor --------------------------------------------------

const getPriceCategory = (area) => {
  if (area <= 100) {
    return "0-100";
  } else if (area <= 150) {
    return "100-150";
  } else {
    return "150+";
  }
};


const calculatePrice = (type, thickness, area) => {
  const openCellPrices = {
    "0-100": {
      // vastagság: ár
      10: 5500,
      15: 6600,
      20: 7700,
      25: 8800,
      30: 9900
    },
    "100-150": {
      10: 4700,
      15: 5800,
      20: 6900,
      25: 8000,
      30: 9100
    },
    "150+": {
      10: 4500,
      15: 5600,
      20: 6700,
      25: 7800,
      30: 8900
    }
  };

  const closedCellPrices = {
    "0-100": {
      3: 5500,
      4: 6600,
      5: 7700,
      6: 8800,
      7: 9900,
      8: 11000,
      9: 12100,
      10: 13200
    },
    "100-150": {
      3: 4700,
      4: 5800,
      5: 6900,
      6: 8000,
      7: 9100,
      8: 10200,
      9: 11300,
      10: 12400
    },
    "150+": {
      3: 4200,
      4: 5300,
      5: 6400,
      6: 7500,
      7: 8600,
      8: 9700,
      9: 10800,
      10: 11900
    }
  };

  const prices = type === "Nyitott cellás" ? openCellPrices : closedCellPrices;
  const priceCategory = getPriceCategory(area);

  const thicknesses = Object.keys(prices[priceCategory]).map(Number).sort((a, b) => a - b);
  const lowerIndex = thicknesses.findIndex(t => t >= thickness) - 1;
  const upperIndex = lowerIndex + 1;

  let lowerThickness = thicknesses[lowerIndex];
  const upperThickness = thicknesses[upperIndex];

  // Az alapár kiszámítása a megadott vastagságon és árkategórián alapuló árakból
  const basePrice = prices[priceCategory][thickness];

  if (basePrice) {
    return basePrice * area;
  }

  // Ha a vastagság köztes érték, akkor interpoláljuk a közeli vastagságok alapján az árat:


  // Ha zárt cellás, akkor figyelembe kell venni a 3 cm-es alsó korlátot
  if (type === "Zárt cellás" && lowerThickness < 3) {
    lowerThickness = 3;
  }

  const lowerPrice = prices[priceCategory][lowerThickness];
  const upperPrice = prices[priceCategory][upperThickness];

  if (lowerPrice && upperPrice) {
    // Lineáris interpoláció az alsó és felső vastagságok között
    const interpolatedPrice = lowerPrice + (upperPrice - lowerPrice) * (thickness - lowerThickness) / (upperThickness - lowerThickness);
    return interpolatedPrice * area;
  }

  // Ha a vastagság olyan értékre esik, ahol nem találtunk alsó vagy felső korlátot (pl. 2 cm vastagság),
  // akkor térjünk vissza nullával vagy egyéb jelzéssel, hogy nem lehet kiszámolni az árat
  return null;
};

useEffect(() => {

const handleRadioChange = () => {
  let type = document.querySelector('input[name="status"]:checked').dataset.type;
  let thicknessInput = document.getElementById("vastagsag");

  if (type === "Zárt cellás") {
    thicknessInput.min = "3";
    thicknessInput.max = "10";
    thicknessInput.step = "1";
  } else {
    thicknessInput.min = "10";
    thicknessInput.max = "30";
    thicknessInput.step = "5";
  }
};

const radioButtons = document.querySelectorAll('input[name="status"]');
radioButtons.forEach((button) => {
  button.addEventListener("change", handleRadioChange);
});

return () => {
  // Távolítsa el az eseménykezelőket, amikor a komponens eltávolításra kerül
  radioButtons.forEach((button) => {
    button.removeEventListener("change", handleRadioChange);
  });
};
}, []);

const handleCalc = () => {
  let type = document.querySelector('input[name="status"]:checked').dataset.type;
  let thickness = parseInt(document.getElementById("vastagsag").value);
  let area = parseInt(document.getElementById("felulet").value);
  let vegsoar = document.getElementById('vegsoar');
  let vatprice = document.getElementById('vatprice');

  if (!isNaN(thickness) && !isNaN(area)) {
    const totalPrice = calculatePrice(type, thickness, area);
    if (totalPrice !== null) {
      const vatPrice = totalPrice * 1.27;
      // Itt megjelenítheti az árat a felhasználónak, például egy modalban vagy egy szövegcímkében
      vegsoar.innerHTML = totalPrice;
      vatprice.innerHTML = totalPrice * 1.27;
      
    } else {
      console.log("Nem lehet kiszámolni az árat a megadott vastagság alapján.");
      // Itt jelezheti a felhasználónak, hogy nem lehet kiszámolni az árat
    }
  } else {
    console.log("Kérjük, adja meg a szigetelés vastagságát és területét.");
    // Itt jelezheti a felhasználónak, hogy hiányzik a vastagság vagy a terület értéke
  }
};

//Email küldés


async function handleSubmit(event) {
  event.preventDefault();

  //Púrhab típus
  const fieldsetElement = document.getElementById('type');
  const selectedRadio = fieldsetElement.querySelector('input[name="status"]:checked');

  let type = '';
  if (selectedRadio) {
    type = selectedRadio.dataset.type;
  } else {
    // Nincs kiválasztott gomb, itt kezeld le az esetet
    type = 'Nincs kiválasztott púrhab típus';
  }

  //Vastagság
  const vastagsagInput = document.getElementById('vastagsag');
  const vastagsagValue = vastagsagInput.value;

  const data = {
    type: type,
    vastagsag: String(vastagsagValue),
    felulet: String(event.target.felulet.value),
    zipcode: String(event.target.irszam.value),
    email: String(event.target.email.value),
  }

  const response = await fetch("/api/contact.js", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })

  if (response.ok) {
    console.log("A küldés sikeres")
  }
  if (!response.ok) {
    console.log("A küldés sikertelen")
  }

}



//Kalkulátor --------------------------------------------------

    return (
    <>

    {isOpen1 &&(
        <div className='fixed flex justify-center items-center w-full h-screen bg-[#000000d0] z-[999] transition-all'>
          
          <div className='relative top-0 flex flex-col gap-8 w-11/12 h-[500px] lg:w-8/12 p-8 bg-white rounded-xl overflow-scroll'>
            <button className='sticky flex justify-center items-center top-2 right-2 w-8 h-8 border border-black bg-white rounded-full' onClick={() => setIsOpen1(false)}><GrClose color="#fff" className="w-4 h-4"/></button>
            <p>A zárt cellás és a nyitott cellás purhab szigetelés mindkettő kiválóan alkalmas hő- és zajszigetelésre, valamint a nedvesség és a penész elleni védelemre. A zárt cellás purhab merevebb, sűrűbb hab, lassabban tágul és kezdeti térfogatának negyvenszeresére tud megnőni. Teljesen homogén zárt felületet alkot, ami kiválóan alkalmas fűtés és hűtés kiadásainak csökkentésére, illetve 3cm-es vastagság felett vízzáró funkciót is be tud tölteni. Ideális megoldás régebbi épületek esetében és könnyen tisztítható, így ipari csarnokokban és állattartó telepeken is használják.
            </p>
            <p>A nyitott cellás purhab lényegesen gyorsabban és nagyobb mértékben tágul, közel százszorosára, és kitölti a rendelkezésre álló teret. Lazább szerkezete miatt főként tetősíkok és könnyű szerkezetes épületek falszigeteléseként alkalmazzák. Kiválóan alkalmas réseken és üregeken belüli konvekciós hő mozgások kiküszöbölésére, amely egyenletes hőérzetet biztosít. Meggátolja a nedvesség kondenzációját, így megakadályozza a penészesedést és a gombásodást is.
            </p>
          </div>

        </div>
    )}

    <section className='flex flex-col justify-center items-center w-full overflow-hidden bg-white pb-12 pt-[75px]'>
      <div className='flex flex-col w-11/12 lg:w-8/12 py-8'>
        <h1 className='text-center m-auto text-4xl lg:text-6xl font-black tracking-tighter py-2'>Kalkulátor</h1>
        <p  className='text-center text-xl w-11/12 lg:w-1/2 m-auto py-2'>Számold ki 3 lépésben a te igényeidnek megfelelő szigetelés árát</p>
      </div>

        <div className='flex justify-center items-center gap-4 -mb-[53px] text-center w-11/12 lg:w-full z-10'>
          <button onClick={firstStep} style={{background: isFirstStepHighlighted ? '#06A452' : '#e5e5e5', color: isFirstStepHighlighted ? '#fff' : '#000'}} className='flex justify-center items-center  rounded-full w-10 h-10 transition-all'>1.</button>
          <button onClick={secondStep} style={{background: isSecondStepHighlighted ? '#06A452' : '#e5e5e5', color: isSecondStepHighlighted ? '#fff' : '#000'}} className='flex justify-center items-center  rounded-full w-10 h-10 transition-all'>2.</button>
          <button onClick={thirdStep} style={{background: isThirdStepHighlighted ? '#06A452' : '#e5e5e5', color: isThirdStepHighlighted ? '#fff' : '#000'}} className='flex justify-center items-center  rounded-full w-10 h-10 transition-all'>3.</button>
          <button onClick={fourthStep} style={{background: isFourthStepHighlighted ? '#06A452' : '#e5e5e5', color: isFourthStepHighlighted ? '#fff' : '#000'}} className='flex justify-center items-center  rounded-full w-auto h-10 px-2 transition-all'>Kalkulált ár</button>
        </div>
      
        <div className='w-[360px] lg:w-[1024px] border rounded-xl border-neutral-200 h-auto lg:h-[50vh] my-8 mx-auto shadow-xl overflow-hidden'>

            <div style={{
              marginLeft: isFourthStepHighlighted ? '-3072px' : isThirdStepHighlighted ? '-2048px' : isSecondStepHighlighted ? '-1024px' : isFirstStepHighlighted ? '0px' : '0px',
              }} className='flex h-full lg:w-[4096px] transition-all ease-out duration-300'>

                <div className='flex justify-center items-center w-[360px] lg:w-[1024px] mr-[664px] lg:mr-0 py-10'>
                    <div className='flex flex-col items-center justify-around h-full w-[360px] lg:w-full'>
                        <h1 className='flex items-center gap-4 top-0 text-md lg:text-xl uppercase tracking-widest p-4 lg:p-0'>Válaszd ki a szigetelés típusát.<button onClick={() => setIsOpen1(true)} className='flex justify-center items-center bg-neutral-200 text-black rounded-full w-auto px-2 h-10'>Súgó</button></h1>
                        

                        <fieldset id='type' className='flex gap-8 justify-center items-center w-full h-1/2 p-4 leading-5'>

                          <input id="draft" className="peer/draft hidden" type="radio" name="status" data-type="Nyitott cellás" />
                          <label htmlFor="draft" className="flex flex-col justify-center items-center border border-neutral-200 rounded-xl h-full p-8 hover:shadow-xl transition-all  cursor-pointer peer-checked/draft:bg-[#06A452] peer-checked/draft:text-white"><p className=' uppercase text-md lg:text-2xl font-black'>Nyitott cellás</p> púrhab szigetelés</label>

                          <input id="published" className="peer/published hidden" type="radio" name="status" data-type="Zárt cellás"/>
                          <label htmlFor="published" className="flex flex-col justify-center items-center border border-neutral-200 rounded-xl h-full p-8 hover:shadow-xl transition-all  cursor-pointer peer-checked/published:bg-[#06A452] peer-checked/published:text-white"><p className=' uppercase text-md lg:text-2xl font-black'>Zárt cellás</p> púrhab szigetelés</label>
                        
                        </fieldset>


                        <div className='flex gap-4'>
                          <button onClick={secondStep} className='py-2 px-4 bg-gradient-to-r from-[#06A452] to-[#0DC666] text-white border-transparent rounded-md'>Tovább</button>
                        </div>
                    </div>
                </div>

                <div className='flex justify-center items-center w-[360px] lg:w-[1024px] mr-[664px] lg:mr-0 py-10'>
                    <div className='flex flex-col items-center justify-around h-full w-[360px] lg:w-full'>
                        <h1 className='top-0 text-md lg:text-xl text-center uppercase lg:tracking-widest'>A Csúszkával válaszd ki a szigetelés vastagságát</h1>
                        
                        <div className='flex flex-col gap-8 justify-center items-center w-full h-1/2'>

                          <Image width={100} height={100} alt='foamwidth' src={imageUrl} />
                          <h1 id='vastagsagertek' className='font-black text-2xl'>{value} cm</h1>
                          <input id='vastagsag' type="range" min="3" max="30" value={value} onInput={handleSliderChange} className='w-2/3 h-24 foamwidthslider'></input>
                          
                        </div>

                        <div className='flex gap-4'>
                          <button onClick={firstStep} className='py-2 px-4 border border-neutral-200 rounded-md'>Vissza</button>
                          <button onClick={thirdStep} className='py-2 px-4 bg-gradient-to-r from-[#06A452] to-[#0DC666] text-white border-transparent rounded-md'>Tovább</button>
                        </div>
                    </div>
                </div>

                <div className='flex justify-center items-center w-[360px] lg:w-[1024px] mr-[664px] lg:mr-0 py-10'>
                    <form onSubmit={handleSubmit} className='flex flex-col items-center justify-around h-full w-[360px] lg:w-full'>
                        <h1 className='top-0 text-md lg:text-xl uppercase text-center lg:tracking-widest'>Add meg a szigetelni kívánt felület méretét</h1>
                        
                        <div className='flex flex-col lg gap-8 justify-center items-center w-full lg:h-1/2'>
                          
                          <fieldset className='flex items-center lg:items-baseline justify-center gap-2 w-full lg:w-1/2 pt-8'>
                            <input type='number' required id='felulet' className='border border-[#06a452] rounded-sm h-12 p-2 w-8/12 lg:w-1/2' placeholder='pl.: 35'/>
                            <label>m2</label>
                          </fieldset>

                            <div className='flex flex-col items-center gap-4 w-8/12 lg:w-1/2'>

                              <p>Kérjük add meg az email címed és az irányítószámod:</p>

                              <div className='flex flex-col lg:flex-row gap-4 w-full py-4'>

                                <input type='text' required id='irszam' className='bg-neutral-200 rounded-sm  p-2 w-full' placeholder='Irányítószám'/>
                                <input type='email' required id='email' className='bg-neutral-200 rounded-sm  p-2 w-full' placeholder='E-mail cím'/>

                              </div>

                              

                            </div>

                        </div>

                        <div className='flex gap-4 pt-4'>
                          <input type="button" onClick={secondStep} className="py-2 px-4 border border-neutral-200 rounded-md cursor-pointer" value="Vissza" />
                          <button type='submit' onClick={() => {fourthStep(); handleCalc()}} className='py-2 px-4 bg-gradient-to-r from-[#06A452] to-[#0DC666] text-white border-transparent rounded-md'>Kérem az árat</button>
                        </div>

                        <p className='flex flex-col text-center text-sm w-full py-4'>A Kérem az árat gombra kattintva elfogadom az <a href='#' className='text-[#06a452] cursor-pointer'>adatkezelési tájékoztatóban</a> foglaltakat.</p>
                    </form>
                </div>

                <div className='flex justify-center items-center w-[360px] lg:w-[1024px] mr-[664px] lg:mr-0 py-10'>
                    <div className='flex flex-col items-center justify-around h-full w-[360px] lg:w-full'>
                        
                        <div className='flex flex-col items-center gap-4 h-auto'>
                          <h1 className='top-0 text-md lg:text-xl text-center uppercase tracking-widest'>A te púrhab szigetelésed megközelítő ára:</h1>
                          
                          <div className='flex items-baseline gap-4 p-4 rounded-xl justify-center bg-[#06a452] text-white shadow-xl w-11/12'>
                            <p className='text-sm lg:text-md uppercase'>nettó</p><h1 id='vegsoar' className='text-2xl lg:text-5xl font-black'></h1><p>Ft + ÁFA</p>
                          </div>
                          <div className='flex gap-2 items-baseline'>
                            <p className='text-sm lg:text-md uppercase'>bruttó</p><h3 id='vatprice' className='text-sm lg:text-xl font-bold'></h3><p>Ft</p>
                          </div>
                          

                        </div>

                        <p className='text-sm w-11/12 text-center lg:w-full'>A kalkulált ár nem minősül árajánlattételnek. Kizárólag tájékoztatás jellegű célokat szolgál.</p>

                    </div>
                </div>


            </div>
            

        </div>

        

      <Velemenyek/>

    </section>

    
    
    </>
    )
}