import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import Link from "next/link";
import Image from "next/image";
import { RxHamburgerMenu } from 'react-icons/rx'
import { CiCalculator2 } from 'react-icons/ci'
import { GrClose } from 'react-icons/gr'

export default function MainMenu() {
  useEffect(() => {
    function handleScroll() {
      const menu = document.getElementById("desktop-menu");
      const scrollY = window.scrollY;

      // A menü magasságának és háttérszínének módosítása
      if (scrollY > 0) {
        menu.style.height = "55px";
        menu.style.backgroundColor = "#ffffffc7"; // Itt megadhatod a kívánt háttérszínt
      } else {
        menu.style.height = "75px";
        menu.style.backgroundColor = "#ffffff00"; // Itt megadhatod a kívánt háttérszínt
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    router.events.on('routeChangeComplete', handleLinkClick);

    return () => {
      router.events.off('routeChangeComplete', handleLinkClick);
    };
  }, []);

    return(
        <>

        <nav id="desktop-menu" style={{ height: "75px", backgroundColor: "#ffffff00" }} className="fixed w-full top-0 z-50 backdrop-blur-md border-b border-neutral-200 transition-all" >
            <div className="hidden lg:flex justify-center align-middle items-center h-full">
              <ul className="flex items-center justify-between gap-4 w-8/12">
                  <Link href="/"><Image src="/arpusz-nav-logo.svg" alt="logo" width={40} height={40}/></Link>                  
                  <Link href="/szolgaltatasok">
                    <li className="relative group">
                        Szolgáltatások   
                        <span className="absolute inset-x-0 bottom-0 h-[1px] bg-black transition-all duration-200 transform origin-left scale-x-0 group-hover:scale-x-100"></span>
                    </li>                  
                  </Link>
                  <Link href="/referenciak">
                    <li className="relative group">
                        Referenciák
                        <span className="absolute inset-x-0 bottom-0 h-[1px] bg-black transition-all duration-200 transform origin-left scale-x-0 group-hover:scale-x-100"></span>
                    </li>
                  </Link>
                  <Link href="/purhabrol-bovebben">
                    <li className="relative group">
                        Miért a púrhab?
                        <span className="absolute inset-x-0 bottom-0 h-[1px] bg-black transition-all duration-200 transform origin-left scale-x-0 group-hover:scale-x-100"></span>
                    </li>
                  </Link>
                  <Link href="/blog">
                    <li className="relative group">
                        Blog
                        <span className="absolute inset-x-0 bottom-0 h-[1px] bg-black transition-all duration-200 transform origin-left scale-x-0 group-hover:scale-x-100"></span>
                    </li>
                  </Link>
                  <Link href="/kapcsolat">
                    <li className="relative group">
                        Kapcsolat
                        <span className="absolute inset-x-0 bottom-0 h-[1px] bg-black transition-all duration-200 transform origin-left scale-x-0 group-hover:scale-x-100"></span>
                    </li>
                  </Link>
                  <Link href="/kalkulator">
                    <li className=" uppercase font-bold border border-[#06A452] rounded-md p-1 bg-[#06A452] shadow-lg text-white cursor-pointer transition-all ">
                      Kalkulálj árat
                    </li>
                  </Link>
              </ul>
            </div>

            <div id="mobile-menu" className={`lg:hidden flex justify-between items-center w-full h-full p-4 bg-white ${isOpen ? 'open' : ''}`}>
            <Link href="https://www.arpusz.hu"><Image src="/arpusz-nav-logo.svg" alt="logo" width={40} height={40} /></Link>
            <div className="flex gap-2">
              <Link href='/kalkulator'><button className="flex gap-2 items-center p-2 bg-neutral-100 rounded-md border border-neutral-300"><CiCalculator2 className="h-6 w-6" /> Kalkulátor</button></Link>
              <button className="p-2 bg-neutral-100 rounded-md border border-neutral-300" onClick={toggleMenu} aria-label="Menu"><RxHamburgerMenu className="h-6 w-6" /></button>
              <div id="toggle-menu" className={`absolute top-0 right-0 bg-white shadow-2xl h-screen w-[90%] p-4 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} lg:translate-x-0 transition-transform duration-200 ease-in-out`}>
                <ul className="relative flex flex-col items-end gap-4">
                  <button className="absolute top-4 left-4 z-10" onClick={toggleMenu}><GrClose color="#fff" className="w-4 h-4" /></button>
                  <li className="relative group">
                    <Link href="/" onClick={handleLinkClick}>Főoldal</Link>
                    <span className="absolute inset-x-0 bottom-0 h-[1px] bg-black transition-all duration-200 transform origin-left scale-x-0 group-hover:scale-x-100 group-focus:scale-x-100"></span>
                  </li>
                  <li className="relative group">
                    <Link href="/szolgaltatasok" onClick={handleLinkClick}>Szolgáltatások</Link>
                    <span className="absolute inset-x-0 bottom-0 h-[1px] bg-black transition-all duration-200 transform origin-left scale-x-0 group-hover:scale-x-100 group-focus:scale-x-100"></span>
                  </li>
                  <li className="relative group">
                    <Link href="/referenciak" onClick={handleLinkClick}>Referenciák</Link>
                    <span className="absolute inset-x-0 bottom-0 h-[1px] bg-black transition-all duration-200 transform origin-left scale-x-0 group-hover:scale-x-100 group-focus:scale-x-100"></span>
                  </li>
                  <li className="relative group">
                    <Link href="/purhabrol-bovebben" onClick={handleLinkClick}>Miért a púrhab?</Link>
                    <span className="absolute inset-x-0 bottom-0 h-[1px] bg-black transition-all duration-200 transform origin-left scale-x-0 group-hover:scale-x-100 group-focus:scale-x-100"></span>
                  </li>
                  <li className="relative group">
                    <Link href="/blog" onClick={handleLinkClick}>Blog</Link>
                    <span className="absolute inset-x-0 bottom-0 h-[1px] bg-black transition-all duration-200 transform origin-left scale-x-0 group-hover:scale-x-100 group-focus:scale-x-100"></span>
                  </li>
                  <li className="relative group">
                    <Link href="/kapcsolat" onClick={handleLinkClick}>Kapcsolat</Link>
                    <span className="absolute inset-x-0 bottom-0 h-[1px] bg-black transition-all duration-200 transform origin-left scale-x-0 group-hover:scale-x-100 group-focus:scale-x-100"></span>
                  </li>
                  <li className=" uppercase font-bold border border-[#06A452] rounded-md p-1 bg-[#06A452] shadow-lg text-white cursor-pointer transition-all ">
                    <Link href="/kalkulator" onClick={handleLinkClick}>Kalkulálj árat</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>

        </>
    );
}