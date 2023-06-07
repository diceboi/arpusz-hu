import Link from "next/link"
import CtaHome from "../../components/homepage/cta-home"

export default function Blog1() {
    return(
        <>
        <section className="flex flex-col m-auto w-11/12 lg:w-8/12 pt-[75px] gap-8">
            <div className="w-full h-[50vh] bg-[url('/otthon.jpg')] bg-center bg-cover rounded-b-xl">
            </div>
            <div className="flex flex-col lg:flex-row w-full gap-16 lg:gap-0">
                <div className="w-full m-auto lg:m-0 lg:w-8/12 lg:pr-8">
                    <article className="flex flex-col gap-4">
                        <h2 className="text-3xl font-black">Miért érdemes púrhab szigetelést választani otthonunk számára?</h2>
                        <p className="font-bold">
                            Amikor otthonunk szigeteléséről beszélünk, fontos figyelembe vennünk az energiahatékonyságot és a fenntarthatóságot. Ebben a modern korban, ahol a klímaváltozás és az energiaköltségek egyre nagyobb kihívást jelentenek, fontos olyan megoldásokat találnunk, amelyek csökkentik a hőveszteséget és energiaköltségeinket. Ebben a cikkben a púrhab szigetelés előnyeit fogom bemutatni, és miért érdemes ezt a megoldást választanunk otthonaink számára.
                        </p>
                        <p>
                            <strong>Kiváló hőszigetelési tulajdonságok:</strong> A púrhab szigetelés kiváló hőszigetelő tulajdonságokkal rendelkezik. Ez a rendkívül sűrű anyag zárt cellákból áll, amelyek megakadályozzák a hő áramlását. Ennek eredményeként jelentősen csökkenti a hőveszteséget a házban, így kevesebb energiát igényel fűtésre vagy hűtésre. A púrhab szigetelésnek köszönhetően a belső hőmérséklet stabil marad, így kellemesebb lakókörnyezetet teremt és csökkenti az energiaköltségeket.
                        </p>
                        <p>
                            <strong>Légtömör zárási képesség:</strong> A púrhab szigetelésnek kiváló légtömör zárási képessége van. A hab felvitelekor könnyedén kitölti és kizárja a légáramlást az apró résekben és repedésekben. Ez jelentősen csökkenti az összes szivárgást, beleértve a hideg levegőt is, ami hatékonyabbá teszi a fűtési vagy hűtési rendszereket. A légtömör zárási képesség segít megőrizni a meleg levegőt télen és a hűvös levegőt nyáron, minimalizálva az energiafelhasználást.
                        </p>
                        <p>
                            <strong>Hangszigetelés:</strong> A púrhab szigetelés nemcsak hőszigetelő tulajdonságokkal rendelkezik, hanem kiváló hangszigetelést is biztosít. A hab anyagában található zárt cellák hatékonyan elnyelik a hanghullámokat, így csökkentik a külső zajok behatolását a házba. Ez különösen előnyös lehet zsúfolt városi környezetben vagy olyan területeken, ahol a zaj a nyugalmunkat zavarja.
                        </p>
                        <p>
                            <strong>Páralecsapódás elleni védelem:</strong> A púrhab szigetelés vízálló tulajdonságokkal rendelkezik, és hatékonyan megakadályozza a páralecsapódást a falakban és a tetőben. Ez nagyon fontos, mivel a páralecsapódás hosszú távon penészképződéshez és károsodáshoz vezethet a szerkezetekben. A púrhab szigetelés megakadályozza, hogy a nedvesség behatoljon a falakba, ezzel védelmet nyújtva otthonunknak.
                        </p>
                        <p>
                            <strong>Tartósság és fenntarthatóság:</strong> A púrhab szigetelés rendkívül tartós és hosszú élettartamú. A helyesen telepített és karbantartott púrhab szigetelés évtizedeken keresztül hatékonyan védi otthonunkat a hőveszteségtől és az időjárási hatásoktól. Emellett a púrhab készítésekor minimális hulladék keletkezik, és a legtöbb gyártó olyan anyagokat használ, amelyek környezetbarátak és nem károsak az egészségre.
                        </p>
                        <p>
                        A púrhab szigetelés számos előnnyel jár otthonaink számára. A kiváló hőszigetelő tulajdonságok, a légtömör zárási képesség, a hangszigetelés és a páralecsapódás elleni védelem mind hozzájárulnak a kényelmesebb és energiatakarékosabb lakókörnyezet kialakításához. Emellett a púrhab szigetelés tartós és fenntartható megoldás, ami további előnyt jelent az otthonunk számára. Tehát, ha hosszú távú megtakarítást és környezetbarát megoldást keresünk, érdemes púrhab szigetelést választanunk otthonunk számára.
                        </p>
                    </article>
                </div>
                <div className="w-full m-auto lg:m-0 lg:w-4/12 lg:pl-8 lg:border-l border-neutral-300">
                    <div className="grid grid-cols-1 gap-4">
                        <div>
                            <h3 className="text-xl font-bold">További cikkek:</h3>
                        </div>
                        <Link href="/blog/mennyibe-kerul-a-purhab-szigeteles" className="flex w-full items-end p-2 h-[200px] border border-neutral-300 rounded-xl bg-[url('/mennyibe-kerul.jpg')] bg-cover bg-center hover:border-black transition-all">
                            <h3 className="text-white text-bold text-lg p-2 rounded-md bg-[#06a452] backdrop-blur-sm bg-opacity-70">Mennyibe kerül a púrhab szigetelés?</h3>
                        </Link>
                        <Link href="/blog/a-kornyezetbarat-valasztas" className="flex w-full items-end p-2 h-[200px] border border-neutral-300 rounded-xl bg-[url('/kornyezetbarat.jpg')] bg-cover bg-center hover:border-black transition-all">
                            <h3 className="text-white text-bold text-lg p-2 rounded-md bg-[#06a452] backdrop-blur-sm bg-opacity-70">A környezetbarát választás</h3>
                        </Link>
                        <Link href="/blog/a-hangszigeteles-uj-szintje" className="flex w-full items-end p-2 h-[200px] border border-neutral-300 rounded-xl bg-[url('/hangszigeteles.jpg')] bg-cover bg-center hover:border-black transition-all">
                            <h3 className="text-white text-bold text-lg p-2 rounded-md bg-[#06a452] backdrop-blur-sm bg-opacity-70">A hangszigetelés új szintje</h3>
                        </Link>

                    </div>
                </div>
            </div>

        </section>
        <CtaHome/>
        </>
    )
}