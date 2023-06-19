import Image from 'next/image'
import { AiFillStar } from 'react-icons/ai'
import ReferenciakPage from '../components/referenciak-page'
import Head from 'next/head'

export default function Referenciak() {
    return(
        <>
        <Head>
            <title>Referenciák - Púrhab Szigetelés - Arpusz.hu</title>
            <meta name="description" content="Tekintsd meg púrhab szigetelési munkáinkat, és győződj meg róla te magad, hogy nem kell tovább keresned a megfelelő csapatot." key="desc" />
            <meta property="og:Referenciák - Púrhab Szigetelés - Arpusz.hu" content="Tekintsd meg púrhab szigetelési munkáinkat, és győződj meg róla te magad, hogy nem kell tovább keresned a megfelelő csapatot." />
            <meta
            property="og:image"
            content="/referenciak-og.webp"
            />
        </Head>
        <ReferenciakPage/>
        </>
    )
}
