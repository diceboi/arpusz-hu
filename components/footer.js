import Link from "next/link";
import Image from "next/image";
import { AiFillPhone } from "react-icons/ai"
import { FaRegEnvelope } from "react-icons/fa"


export default function Footer(){
    return(
        <>
        <footer className="bg-neutral-200 h-96 w-full shadow-inner text-neutral-600">
            <div className="flex w-8/12 h-full m-auto">
                <div className="flex flex-col justify-between w-1/3 p-4">
                    <Link href="/"><Image height={500} width={300} src='/arpusz-logo-header-01.png' className="w-1/2 h-auto "/></Link>
                    <div className="flex flex-col gap-4">
                        <p className="uppercase tracking-widest text-sm">@ 2023 arpusz.hu</p>
                        <p className="uppercase tracking-widest text-xs">Púrhab szigetelés országosan</p>
                    </div>
                </div>
                <div className="flex flex-col justify-center w-1/3 p-4">
                    <Image height={500} width={500} src="/hungary-map.svg" />
                </div>
                <div className="flex flex-col justify-between items-center w-1/3 p-4">
                    <div className="">
                        <ul className="flex flex-col gap-2">
                            <Link href="/Rolunk" className="uppercase tracking-widest text-sm hover:text-black">Rólunk</Link>
                            <Link href="/Rolunk" className="uppercase tracking-widest text-sm hover:text-black">Szolgáltatások</Link>
                            <Link href="/Rolunk" className="uppercase tracking-widest text-sm hover:text-black">Referenciák</Link>
                            <Link href="/Rolunk" className="uppercase tracking-widest text-sm hover:text-black">Miért a púrhab?</Link>
                            <Link href="/Rolunk" className="uppercase tracking-widest text-sm hover:text-black">Blog</Link>
                            <Link href="/Rolunk" className="uppercase tracking-widest text-sm hover:text-black">Kapcsolat</Link>
                            <Link href="/Rolunk" className="uppercase tracking-widest text-sm hover:text-black">Kalkulátor</Link>
                        </ul>
                    </div>
                    <div className="border border-neutral-300 rounded-xl self-end p-4">
                        <h1>Elérhetőség:</h1>
                        <Link href="tel:+36305236866"><p className="flex items-center gap-2"><AiFillPhone className="text-[#06a452]" />+36 30 523 6866</p></Link>
                        <Link href="tel:+36300103001"><p className="flex items-center gap-2"><AiFillPhone className="text-[#06a452]" />+36 30 010 3001</p></Link>
                        <Link href="mailto:kapcsolat.arpusz@gmail.com"><p className="flex items-center gap-2"><FaRegEnvelope className="text-[#06a452]"/>kapcsolat.arpusz@gmail.com</p></Link>
                        
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}