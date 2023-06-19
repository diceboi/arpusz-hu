import Link from "next/link";
import Image from "next/image";
import { AiFillPhone } from "react-icons/ai"
import { FaRegEnvelope } from "react-icons/fa"


export default function Footer(){
    return(
        <>
        <footer className="bg-neutral-200 min-h-96 w-full shadow-inner text-neutral-600">
            <div className="flex flex-col lg:flex-row w-11/12 lg:w-8/12 h-full m-auto">
                <div className="flex flex-col justify-between w-11/12 lg:w-1/3 p-4">
                    <Link href="/"><Image height={500} width={300} src='/arpusz-logo-header-01.webp' alt="logo" className="w-1/2 h-auto "/></Link>
                    <div className="flex flex-col gap-4">
                        <p className="uppercase tracking-widest text-sm">@ 2023 arpusz.hu</p>
                        <p className="uppercase tracking-widest text-xs">Púrhab szigetelés országosan</p>
                    </div>
                </div>
                <div className="flex flex-col justify-center w-11/12 lg:w-1/3 p-4">
                    <Image height={500} width={500} src="/hungary-map.svg" alt="magyarország-térkép" />
                </div>
                <div className="flex flex-col justify-between items-start lg:items-center w-11/12 lg:w-1/3 p-4">
                    <div className="">
                        <ul className="flex flex-col gap-2">
                            <Link href="/rolunk" className="uppercase tracking-widest text-sm hover:text-black">Rólunk</Link>
                            <Link href="/szolgaltatasok" className="uppercase tracking-widest text-sm hover:text-black">Szolgáltatások</Link>
                            <Link href="/referenciak" className="uppercase tracking-widest text-sm hover:text-black">Referenciák</Link>
                            <Link href="/purhabrol-bovebben" className="uppercase tracking-widest text-sm hover:text-black">Miért a púrhab?</Link>
                            <Link href="/blog" className="uppercase tracking-widest text-sm hover:text-black">Blog</Link>
                            <Link href="/kapcsolat" className="uppercase tracking-widest text-sm hover:text-black">Kapcsolat</Link>
                            <Link href="/kalkulator" className="uppercase tracking-widest text-sm hover:text-black">Kalkulátor</Link>
                        </ul>
                    </div>
                    <div className="border-t lg:border border-neutral-300 lg:rounded-xl lg:self-end mt-4 lg:mt-0 py-4 lg:p-4">
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