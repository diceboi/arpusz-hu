import Link from "next/link"
import CtaHome from "../../components/homepage/cta-home"

export default function Blog3() {

    return(
        <>
        
        <section className="flex flex-col m-auto w-11/12 lg:w-8/12 pt-[75px] gap-8">
            <div className="w-full h-[50vh] bg-[url('/kornyezetbarat.jpg')] bg-center bg-cover rounded-b-xl">
            </div>
            <div className="flex flex-col lg:flex-row w-full gap-16 lg:gap-0">
                <div className="w-full m-auto lg:m-0 lg:w-8/12 lg:pr-8">
                    <article className="flex flex-col gap-4">
                        <h2 id="blogtitle" className="text-3xl font-black">A környezetbarát választás</h2>
                        <p id="metadescription" className="font-bold">
                            Ha szigetelésről van szó, fontos szempont, hogy a környezetbarát megoldásokat részesítsük előnyben. A púrhab szigetelés kiemelkedően hatékony és környezetbarát megoldást kínál, amely hosszú távon előnyös mind számunkra, mind pedig a bolygónk számára. Ha kíváncsi vagy, miért érdemes a púrhab szigetelést választani, és hogy milyen előnyöket kínál a környezet szempontjából, jó helyen jársz.
                        </p>
                        <p>
                            A púrhab szigetelés készítéséhez olyan anyagokat használnak, amelyek környezetbarátak és fenntarthatóak. A poliuretán hab, amely a púrhab alapanyagát képezi, újrahasznosított és újrahasznosítható anyag. Az újrahasznosítás révén csökkenthető az új anyagok felhasználása és a hulladéktermelés. Ezáltal hozzájárulhatunk a természeti erőforrások megőrzéséhez és a környezeti terhelés csökkentéséhez.
                        </p>
                        <p>
                            Kiemelkedő hőszigetelő képessége révén csökkenti a hőveszteséget otthonunkban. Ez azt jelenti, hogy kevesebb energiára van szükség a fűtéshez és a hűtéshez, ami hosszú távon jelentős megtakarítást eredményezhet. Azzal, hogy csökkentjük az energiára fordított mennyiséget, kevesebb szén-dioxid kibocsátást eredményezünk, így hozzájárulunk a klímaváltozás elleni küzdelemhez.
                        </p>
                        <p>
                            Rendkívül tartós és ellenálló anyag, amely hosszú élettartammal rendelkezik. Ez azt jelenti, hogy a szigetelés hosszú időn át hatékonyan védi otthonunkat, és nem igényel gyakori cserét vagy karbantartást. Ez is hozzájárul a fenntarthatósághoz, mivel kevesebb hulladék keletkezik a szigetelés cseréjével járó munkálatok során.
                        </p>
                        <p>
                            Légtömör zárási képességgel rendelkezik, ami minimalizálja a hideg levegő behatolását és a hőveszteséget. Ez nem csak energiahatékonyságot eredményez, hanem növeli otthonunk kényelmét is. A légtömörség továbbá segít megakadályozni a nedvesség és penész kialakulását, ami javítja az egészséges lakókörnyezetet.
                        </p>
                        <p>
                            Ha érdekel, hogy megtudd a púrhab szigetelés árát otthonodra, használd kalkulátorunkat! A kalkulátorunk segítségével könnyedén megtudhatod a púrhab szigetelés becsült költségét. Így könnyebben tervezheted költségvetésedet és meghatározhatod a szükséges lépéseket.
                        </p>
                    </article>
                </div>
                <div className="w-full m-auto lg:m-0 lg:w-4/12 lg:pl-8 lg:border-l border-neutral-300">
                    <div className="grid grid-cols-1 gap-4">
                        <div>
                            <h3 className="text-xl font-bold">További cikkek:</h3>
                        </div>
                        <Link href="/blog/miert-erdemes-purhab-szigetelest-valasztani-otthonunk-szamara" className="flex w-full items-end p-2 h-[200px] border border-neutral-300 rounded-xl bg-[url('/otthon.jpg')] bg-cover bg-center hover:border-black transition-all">
                            <h3 className="text-white text-bold text-lg p-2 rounded-md bg-[#06a452] backdrop-blur-sm bg-opacity-70">Miért érdemes púrhab szigetelést választani otthonunk számára?</h3>
                        </Link>
                        <Link href="/blog/mennyibe-kerul-a-purhab-szigeteles" className="flex w-full items-end p-2 h-[200px] border border-neutral-300 rounded-xl bg-[url('/mennyibe-kerul.jpg')] bg-cover bg-center hover:border-black transition-all">
                            <h3 className="text-white text-bold text-lg p-2 rounded-md bg-[#06a452] backdrop-blur-sm bg-opacity-70">Mennyibe kerül a púrhab szigetelés</h3>
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