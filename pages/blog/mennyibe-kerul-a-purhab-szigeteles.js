import Link from "next/link"
import CtaHome from "../../components/homepage/cta-home"

export default function Blog2() {
    return(
        <>
        <section className="flex flex-col m-auto w-11/12 lg:w-8/12 pt-[75px] gap-8">
            <div className="w-full h-[50vh] bg-[url('/mennyibe-kerul.jpg')] bg-center bg-cover rounded-b-xl">
            </div>
            <div className="flex flex-col lg:flex-row w-full gap-16 lg:gap-0">
                <div className="w-full m-auto lg:m-0 lg:w-8/12 lg:pr-8">
                    <article className="flex flex-col gap-4">
                        <h2 className="text-3xl font-black">Mennyibe kerül a púrhab szigetelés?</h2>
                        <p className="font-bold">
                            Amikor a saját otthonunk szigeteléséről beszélünk, egy fontos tényező, amit mindannyian figyelembe veszünk, az ár. Ha energiahatékonyságot és hosszú távú megtakarítást szeretnénk elérni, a púrhab szigetelés lehet egy jó választás. Ebben a cikkben összehasonlítjuk a púrhab szigetelést más szigetelésfajtákkal, hogy segítsünk neked jobban megérteni az árkülönbségeket és hogy a kalkulátorunkkal hogyan tudod könnyen megtudni a púrhab szigetelés árát.</p>
                        <p>
                            <strong>Púrhab szigetelés előnyei:</strong> A púrhab szigetelés számos előnnyel rendelkezik. Kiváló hőszigetelő képessége révén csökkenti a hőveszteséget és az energiafelhasználást. Ez segít megtakarítani a fűtési és hűtési költségeken. Emellett a púrhab szigetelés légtömör zárási képességgel rendelkezik, ami minimalizálja a hideg levegő behatolását, és kellemesebbé teszi a belső hőmérsékletet. Ezen kívül hangszigetelést is biztosít, valamint hatékony védelmet nyújt a páralecsapódással szemben.
                        </p>
                        <p>
                            <strong>Más szigetelésfajták:</strong> A púrhab szigetelésnek kiváló légtömör zárási képessége van. A hab felvitelekor könnyedén kitölti és kizárja a légáramlást az apró résekben és repedésekben. Ez jelentősen csökkenti az összes szivárgást, beleértve a hideg levegőt is, ami hatékonyabbá teszi a fűtési vagy hűtési rendszereket. A légtömör zárási képesség segít megőrizni a meleg levegőt télen és a hűvös levegőt nyáron, minimalizálva az energiafelhasználást.
                        </p>
                        <p>
                            <strong>1. Üveggyapot szigetelés:</strong> Az üveggyapot szigetelés kiváló hang- és hőszigetelő tulajdonságokkal rendelkezik. Általában olcsóbb lehet, mint a púrhab szigetelés, de nem rendelkezik olyan magas hőszigetelési értékkel, mint a púrhab.
                        </p>
                        <p>
                            <strong>2. Kőzetgyapot szigetelés:</strong> A kőzetgyapot szigetelés hasonló tulajdonságokkal rendelkezik, mint az üveggyapot, és jó hang- és hőszigetelést biztosít. Általában tartósabb lehet, mint az üveggyapot, de általában drágább is, viszont hosszútávon képes zsugorodni.
                        </p>
                        <p>
                            <strong>3. Cellulóz szigetelés:</strong> A cellulóz szigetelés újrahasznosított papíralapú anyagból készül. Jó hőszigetelő és hangszigetelő tulajdonságokkal rendelkezik, és környezetbarát választás lehet. Általában kedvezőbb áron kapható, de a púrhab szigetelésnél lényegesen alacsonyabb a hőszigetelési értéke.
                        </p>
                        <p>
                        A púrhab szigetelés ára függ a fújt felület méretétől, az alkalmazott anyag mennyiségétől,és a munka komplexitásától. Fontos azonban megjegyezni, hogy bár a púrhab szigetelés ára kezdetben magasabb lehet, hosszú távon megtérül az energiafogyasztás csökkenése és a megtakarítások révén.
                        </p>
                        <p>
                        A púrhab szigetelés árának meghatározásához érdemes használni a kalkulátorunkat. A kalkulátor segítségével viszonylag pontos árajánlatot kaphatsz otthonodra, üzemedre, bármire amit szigetelni szeretnél, és összehasonlíthatod a púrhab szigetelés költségét más szigetelésfajtákkal.
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