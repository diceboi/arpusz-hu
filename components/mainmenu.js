import { useEffect } from "react";
import Link from "next/link";

export default function MainMenu() {
  useEffect(() => {
    function handleScroll() {
      const menu = document.getElementById("main-menu");
      const scrollY = window.scrollY;

      // A menü magasságának és háttérszínének módosítása
      if (scrollY > 0) {
        menu.style.height = "50px";
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

    return(
        <>

        <nav id="main-menu" style={{ height: "75px", backgroundColor: "#ffffff00" }} className=" flex justify-center fixed w-full top-0 z-50 backdrop-blur-md border-b border-neutral-200 transition-all">
            <ul className="flex items-center justify-between gap-4 w-8/12">
                <li className=" uppercase font-bold text-[#06A452] border border-[#06A452] rounded-md p-1 bg-white hover:bg-[#06A452] hover:text-white cursor-pointer transition-all "><Link href="/">Arpusz.hu</Link></li>
                <li className="relative group">
                    <Link href="/rolunk">Rólunk</Link>
                    <span className="absolute inset-x-0 bottom-0 h-[1px] bg-black transition-all duration-200 transform origin-left scale-x-0 group-hover:scale-x-100 group-focus:scale-x-100"></span>
                </li>
                <li className="relative group">
                    <Link href="/szolgaltatasok">Szolgáltatások</Link>
                    <span className="absolute inset-x-0 bottom-0 h-[1px] bg-black transition-all duration-200 transform origin-left scale-x-0 group-hover:scale-x-100"></span>
                </li>
                <li className="relative group">
                    <Link href="/referenciak">Referenciák</Link>
                    <span className="absolute inset-x-0 bottom-0 h-[1px] bg-black transition-all duration-200 transform origin-left scale-x-0 group-hover:scale-x-100"></span>
                </li>
                <li className="relative group">
                    <Link href="/purhabrol">Miért a púrhab?</Link>
                    <span className="absolute inset-x-0 bottom-0 h-[1px] bg-black transition-all duration-200 transform origin-left scale-x-0 group-hover:scale-x-100"></span>
                </li>
                <li className="relative group">
                    <Link href="/blog">Blog</Link>
                    <span className="absolute inset-x-0 bottom-0 h-[1px] bg-black transition-all duration-200 transform origin-left scale-x-0 group-hover:scale-x-100"></span>
                </li>
                <li className="relative group">
                    <Link href="/kapcsolat">Kapcsolat</Link>
                    <span className="absolute inset-x-0 bottom-0 h-[1px] bg-black transition-all duration-200 transform origin-left scale-x-0 group-hover:scale-x-100"></span>
                </li>
                <li className=" uppercase font-bold border border-[#06A452] rounded-md p-1 bg-[#06A452] shadow-lg text-white cursor-pointer transition-all "><Link href="/kalkulator">Kalkulálj árat</Link></li>
            </ul>    
        </nav>

        </>
    );
}