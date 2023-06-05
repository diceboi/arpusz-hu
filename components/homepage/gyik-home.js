import Link from 'next/link'
import MainCTA from '../maincta'

export default function GyikHome() {
    return(
        <>
            <section className='flex flex-col justify-center items-center w-full overflow-hidden bg-white py-12'>
                <div className='flex flex-col w-11/12 lg:w-8/12 py-8'>
                    <h1 className='text-center m-auto text-4xl lg:text-6xl font-black tracking-tighter py-2'>GYIK</h1>
                    <p  className='text-center lg:text-lg w-11/12 lg:w-1/2 m-auto py-2 uppercase tracking-widest text-neutral-400 font-bold'>Gyakran ismételt kérdések</p>
                </div>
                
                <div className='flex flex-col w-11/12 lg:w-8/12 items-center py-8'>
                    

                    <div className='collapsible flex flex-col justify-center align-middle w-full border-t border-b py-4'>
                    <input type='checkbox' id='collapsible-head'></input>
                    <label for="collapsible-head" className='text-xl font-bold'>Állatok át tudnak menni rajta?</label>
                    <div className='collapsible-text'>
                        <p>Szigeteléssel foglalkozunk, és nem rovar/állat irtással. A púrhab gyártói szerint van benne olyan anyag amit a kártevők nem szeretnek, viszont találkoztunk már olyan esettel, hogy a patkány a vasbetonon és a szigetelésen is keresztül rágta magát. Sajnos ezzel mi se tudunk mit kezdeni, viszont ahol ilyen probléma lép fel ott tudjuk ajánlani a vashálót. Az esetek nagy többségében az már megfelelő védelmet nyújt.</p>
                    </div>
                    </div>

                    <div className='collapsible1 flex flex-col items-stretch justify-center align-middle w-full border-t border-b py-4'>
                    <input type='checkbox' id='collapsible-head1'></input>
                    <label for="collapsible-head1" className='   text-xl font-bold'>A púrhab nem nyomja szét a tetőszerkezetet?</label>
                    <div className='collapsible-text1'>
                        <p>A rövid válasz: NEM. Ennek több oka is van. A szigetelés könnyű, ezért nem terheli a szerkezetet, sőt éppen ellenkezőleg... extra merevítést ad neki. Mint tudjuk a púrhab akár 100x-os méretre is fel tud dagadni, viszont elég sok szigetelést elkészítettünk már, és még sosem történt olyan hogy a szigetelés szétnyomta volna a szerkezetet. A több éves tapasztalat egyik előnye, hogy tudjuk hova szabad fújni és hova nem. Ahhoz hogy a púrhab szétnyomjon egy szerkezetet, ott nagyon sok körülménynek kell extrém módon félremennie, és mivel még mi sem láttunk és csináltunk ilyet ennél többet mi sem tudunk mondani róla.</p>
                    </div>
                    </div>

                    <div className='collapsible2 flex flex-col items-stretch justify-center align-middle w-full border-t border-b py-4'>
                    <input type='checkbox' id='collapsible-head2'></input>
                    <label for="collapsible-head2" className='   text-xl font-bold'>Mennyire tartós a púrhab?</label>
                    <div className='collapsible-text2'>
                        <p>A gyártó porladásra és mállásra 25 év garanciát biztosít, ami azért valljuk be elég hosszú táv. Emellett mára már több kutatás is bebizonyította hogy bizonyos körülmények között ez  szám akár a 80 évet is elérheti. Egy szó mint száz, azon biztos, hogy nem kell aggodnod, hogy elporlad, zsugorodik, vagy szétmállik a szigetelésed.</p>
                    </div>
                    </div>

                    <div className='collapsible3 flex flex-col items-stretch justify-center align-middle w-full border-t border-b py-4'>
                    <input type='checkbox' id='collapsible-head3'></input>
                    <label for="collapsible-head3" className='   text-xl font-bold'>Mennyi időt vesz igénybe a szigetelés kivitelezése?</label>
                    <div className='collapsible-text3'>
                        <p>Ez egy teljesen változó érték, ami függ a szigetelendő felülettől, annak méretétől, a többi szakitól(ha esetleg éppen akkor épül mondjuk a tető) és az egyéb környezeti viszonyoktól. Viszont nagy átlagban elmondhatjuk, hogy egy családi ház szigetelése általában egy munkanapot vesz igénybe. Ha a környezet megfelel, nem kell hegyet másznunk, nekünk kitakarítani a helységet, és egyéb apróságok, akkor reggel megérkezünk és délután/este elhagyjuk a helyszínt.</p>
                    </div>
                    </div>

                    <div className='collapsible4 flex flex-col items-stretch justify-center align-middle w-full border-t border-b py-4'>
                    <input type='checkbox' id='collapsible-head4'></input>
                    <label for="collapsible-head4" className='   text-xl font-bold'>Milyen púrhab fajták vannak?</label>
                    <div className='collapsible-text4'>
                        <p>Ha nem megyünk bele nagyon a szakmai részletekbe, akkor a púrhabnak 2 fajtáját különböztetjük meg: a zárt cellást, és a nyitott cellást. A nyitott cellás kb 100x-os méretre dagad, így a minimum felfújható vastagság kb 8-10cm. Ez egy páraáteresztő anyag, ami tud lélegezni, így az esetlegesen alatta megmaradó párát is ki tudja lélegezni magából. Nagyon hatékony szigetelőanyag, lényegesen jobb specifikációkkal rendelkezik mint pl. egy kőzetgyapot, vagy polisztirol(hungarocel) ugyanabban a vastagságban, illetve a hangszigetelésben is jeleskedik. Megszilárdulás után(pár perc) nem káros, önkioltó, azaz nem táplálja az égést. A zárt cellás szigetelésről is hasonló jó tulajdonságokat tudunk elmondani, annyi különbséggel, hogy  kb.30-40x méretre dagad, így a felfújható minimum vastagság 3cm. Viszont kiváló vízszigetelő. Erősen nedvességnek kitett területeken, és hely szűkében szokták alkalmazni, mivel ugyanazon vastagság mellett mégjobb a szigetelőképessége az amúgy is remekül szigetelő nyitott celláshoz képest. Egyetlen hátránya, hogy ezen tulajdonságai miatt valamivel drágább is. Elsősorban az iparban szokták alkalmazni, mivel ott gyorsabb a megtérülése, de pincék, lapostetők, hajók szigetelésére is alkalmazható.</p>
                    </div>
                    </div>

                    <div className='collapsible5 flex flex-col items-stretch justify-center align-middle w-full border-t border-b py-4'>
                    <input type='checkbox' id='collapsible-head5'></input>
                    <label for="collapsible-head5" className='   text-xl font-bold'>Milyen előkészületeket kell tennem ha jönnek a szigetelők?</label>
                    <div className='collapsible-text5'>
                        <p>Nem kell semmi nagy dologra gondolni. Nekünk elég ha kipakolod a helyszínt, annyira, hogy hozzáférjünk a szigetelendő felülethez, és egyszer felsöporsz, hogy ne legyen 5cm por a felületen, de nem kell enni róla. Annyit hozzátennénk még a pakolás részéhez, hogy készülj fel arra, hogy a fújáskor a szigetelőanyag rátapad mindenre, szóval ha valamit bent is kell hagynod mondjuk a garázsban, azt mindenképp takard le valamilyen fóliával. Mi minden mást megoldunk!</p>
                    </div>
                    </div>

                    <div className='collapsible6 flex flex-col items-stretch justify-center align-middle w-full border-t border-b py-4'>
                    <input type='checkbox' id='collapsible-head6'></input>
                    <label for="collapsible-head6" className='   text-xl font-bold'>Miért válasszam ezt mondjuk a jól bevált polisztirol helyett?</label>
                    <div className='collapsible-text6'>
                        <p>A kérdés jó. Több előnye is van a hagyományos táblás szigetelésekkel szemben. Egyrészt mindenhez tapad, de tényleg MINDENHEZ. Ez a tulajdonság megnyitja a lehetőségek tárházát a felhasználási területek tekintetében. Lehet az fém, fa, műanyag, nem túl poros felület és még sorolhatnánk. Nem mállik, nem porlad, nem zsugorodik. Ahogy néhány perc alatt elnyeri a formáját, úgy is marad még jópár évtizedig. Nem káros, megszilárdulás után semmilyen káros anyagot nem bocsát ki magából. Nem táplálja az égést, azaz önkioltó anyag. Minden rést kitölt, így a hőhidak könnyedén kiküszöbölhetők. Ezek után már csak az a kérdés, miért használna valaki bármi mást? </p>
                    </div>
                    </div>

                    <div className='collapsible7 flex flex-col items-stretch justify-center align-middle w-full border-t border-b py-4'>
                    <input type='checkbox' id='collapsible-head7'></input>
                    <label for="collapsible-head7" className='   text-xl font-bold'>Mire lehet felfújni?</label>
                    <div className='collapsible-text7'>
                        <p>Konkrétan mindenre. Falra, plafonra, padlóra, tetőfóliára... stb. Ha esetleg úgy érzed, hogy ezt mégis meg szeretnéd kérdezni tőlünk, mert nem vagy biztos benne, írj bátran a kapcsolat menüpontban és válaszolunk.</p>
                    </div>
                    </div>

                    <div className='collapsible8 flex flex-col items-stretch justify-center align-middle w-full border-t border-b py-4'>
                    <input type='checkbox' id='collapsible-head8'></input>
                    <label for="collapsible-head8" className='   text-xl font-bold'>Csak új tetőre lehet fújni... vagy régire is?</label>
                    <div className='collapsible-text8'>
                        <p>Újra és régire is egyaránt. Előszeretettel szoktak hívni minket felújításokhoz is, mivel a táblás anyagokkal szemben egy régi, nem mindenhol derékszögű és párhuzamos épületnél sokkal egyszerűbb, gyorsabb, és hatékonyabb is a szórt púrhabbal való szigetelés</p>
                    </div>
                    </div>

                </div>

                <Link href="/kalkulator"><MainCTA>Nincs több kérdésem</MainCTA></Link>
            </section>
        </>
    )
}