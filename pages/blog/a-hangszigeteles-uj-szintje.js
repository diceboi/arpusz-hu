import Link from "next/link"
import CtaHome from "../../components/homepage/cta-home"

export default function Blog4() {

    return(
        <>
        
        <section className="flex flex-col m-auto w-11/12 lg:w-8/12 pt-[75px] gap-8">
            <div className="w-full h-[50vh] bg-[url('/hangszigeteles.jpg')] bg-center bg-cover rounded-b-xl">
            </div>
            <div className="flex flex-col lg:flex-row w-full gap-16 lg:gap-0">
                <div className="w-full m-auto lg:m-0 lg:w-8/12 lg:pr-8">
                    <article className="flex flex-col gap-4">
                        <h2 id="blogtitle" className="text-3xl font-black">Púrhab: A hangszigetelés új szintje</h2>
                        <p id="metadescription" className="font-bold">
                            Ha kényelméről és nyugalmáról van szó, a megfelelő hangszigetelés kiemelt fontossággal bír. A zajos környezet zavarhatja mindennapi tevékenységeinket és befolyásolhatja a pihenésünket. Ha tökéletes csendre vágyunk, a púrhab szigetelés lehet az ideális megoldás. Ebben a cikkben felfedezzük, miért érdemes a púrhab szigetelést választani, és hogy hogyan emelheti a hangszigetelést egy új szintre.
                        </p>
                        <p>
                            A púrhab szigetelés rendkívül hatékony hangelnyelő tulajdonságokkal rendelkezik. Például egy 50 mm vastagságú púrhab réteg akár 30 dB-rel is csökkentheti a hangok átvitelét. Ez azt jelenti, hogy a zajosabb környezetből származó hangok nagy mértékben csökkenhetnek, és kellemes, csendes légkört teremthetünk otthonunkban.
                        </p>
                        <p>
                            <strong>Légtömör zárási képesség:</strong> A púrhab szigetelésnek kiváló légtömör zárási képessége van. A hab felvitelekor könnyedén kitölti és kizárja a légáramlást az apró résekben és repedésekben. Ez jelentősen csökkenti az összes szivárgást, beleértve a hideg levegőt is, ami hatékonyabbá teszi a fűtési vagy hűtési rendszereket. A légtömör zárási képesség segít megőrizni a meleg levegőt télen és a hűvös levegőt nyáron, minimalizálva az energiafelhasználást.
                        </p>
                        <p>
                            Ezen felül légtömör zárási képessége további előnyt nyújt a hangszigetelés terén. A hab tökéletesen zárja le a réseket és hézagokat az épület szerkezetében, ezáltal minimalizálva a hangok behatolásának lehetőségét. Még a legkisebb rések vagy repedések is jelentős hatással lehetnek a zaj átvitelére, de a púrhab szigetelés segít ezeket megszüntetni.
                        </p>
                        <p>
                            A púrhab szigetelés nemcsak a külső zajok ellen nyújt védelmet, hanem a belső hangkomfortot is javítja. A hab segít csökkenteni a belső zajok terjedését, így lehetővé téve, hogy a különböző helyiségekben egyszerre zajló tevékenységek ne zavarják egymást. Ez ideális lehet például otthoni irodákban vagy többlakásos épületekben, ahol a nyugodt és zavartalan munka vagy pihenés alapvető fontosságú.
                        </p>
                        <p>
                            A szórt púrhab szigetelés által nyújtott hangszigetelési tulajdonságok végső soron a kényelmet és nyugalmat szolgálják. A csendes és zavartalan környezetben könnyebben koncentrálhatunk, pihenhetünk és ellazulhatunk. Ezáltal javulhat az életminőségünk és növelhetjük az otthonunkban eltöltött idő kellemességét.
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
                        <Link href="/blog/a-kornyezetbarat-valasztas" className="flex w-full items-end p-2 h-[200px] border border-neutral-300 rounded-xl bg-[url('/kornyezetbarat.jpg')] bg-cover bg-center hover:border-black transition-all">
                            <h3 className="text-white text-bold text-lg p-2 rounded-md bg-[#06a452] backdrop-blur-sm bg-opacity-70">A környezetbarát választás</h3>
                        </Link>

                    </div>
                </div>
            </div>

        </section>
        <CtaHome/>
        </>
    )
}