import CtaHome from '../components/homepage/cta-home'
import { useState, useEffect } from 'react'
import { useReCaptcha } from "next-recaptcha-v3";
import Head from 'next/head';


export default function Kapcsolat() {

    // Import 'executeRecaptcha' using 'useReCaptcha' hook
    const { executeRecaptcha } = useReCaptcha();
    const [loading, setLoading] = useState(false);
    const [submissionMessage, setSubmissionMessage] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();

        setLoading(true); // Töltési állapot beállítása

        // Generate ReCaptcha token
        const token = await executeRecaptcha("form_submit");
    
        const data = {
            fname: String(event.target.fname.value),
            lname: String(event.target.lname.value),
            email: String(event.target.email.value),
            message: String(event.target.message.value),
        }
        
        const response = await fetch("/api/contact", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })

        setLoading(false); // Töltési állapot visszaállítása
        
        if (response.ok) {
            setSubmissionMessage('Az üzenetet sikeresen elküldtük'); // Sikeres küldés üzenetének beállítása
        }
        if (!response.ok) {
            setSubmissionMessage('Az üzenet küldése sikertelen volt'); // Sikertelen küldés üzenetének beállítása
        }
        [executeRecaptcha]
    }

    return(
        <>
        <Head>
            <title>Kapcsolat - Púrhab Szigetelés - Arpusz.hu</title>
            <meta name="description" content="Írj nekünk bármilyen púrhab szigeteléssel kapcsolatos kérdésed is lenne. Bízd magad szakértőkre." key="desc" />
            <meta property="og:Kapcsolat - Púrhab Szigetelés - Arpusz.hu" content="Írj nekünk bármilyen púrhab szigeteléssel kapcsolatos kérdésed is lenne. Bízd magad szakértőkre." />
            <meta
            property="og:image"
            content="/kapcsolat-og.webp"
            />
        </Head>
        <section className='flex flex-col justify-center items-center w-full overflow-hidden bg-white pt-[75px]'>
        <div className='absolute bottom-0 left-0 bg-[#06A452] w-[100px] lg:w-[500px] h-[100px] lg:h-[500px] rounded-full blur-3xl opacity-10 z-10'></div>
        <div className='absolute top-0 right-0 bg-[#06A452] w-[100px] lg:w-[500px] h-[100px] lg:h-[500px] rounded-full blur-3xl opacity-10 z-10'></div>
            <div className='flex flex-col justify-center items-center w-11/12 lg:w-8/12 py-8'>
                <h1 className='text-center m-auto text-4xl lg:text-6xl font-black tracking-tighter py-2'>Kapcsolat</h1>
                <p  className='text-center lg:text-lg w-11/12 lg:w-1/2 m-auto py-2 uppercase tracking-widest text-neutral-400 font-bold'>Ha kérdésed van, vagy megbíznál bennünket.</p>
                
            </div>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4 w-11/12 lg:w-1/3'>
            <p className='text-xs'>A csillaggal(*) jelölt mezők kitöltése kötelező</p>
                <input type='lname' id='lname' placeholder='*Vezetéknév' required className='border border-neutral-200 p-2 bg-white'/>
                <input type='fname' id='fname' placeholder='*Keresztnév' required className='border border-neutral-200 p-2 bg-white'/>
                <input type='email' id='email' placeholder='*E-mail cím' required className='border border-neutral-200 p-2 bg-white'/>
                <textarea placeholder='*Üzenet' id='message' rows='10' required className='border border-neutral-200 p-2 bg-white'/>
                <button type='submit' className='h-[52px] bg-gradient-to-r from-[#06A452] to-[#0DC666] hover:shadow-[#06a4522f] hover:shadow-xl transition-all text-white text-lg rounded-md cursor-pointer relative'>
                    {loading ? (
                        <span className="absolute inset-0 flex items-center justify-center px-6 py-3">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Küldés...
                        </span>
                    ) : (
                                               <span>
                            {submissionMessage ? submissionMessage : "Küldés"}
                        </span>
                    )}
                </button>
                <p className='text-center text-xl m-auto pb-16 pt-12'>Ha árat szeretnél számolni, 3 lépésben könnyedén megteheted felesleges várakozás nélkül.</p>
            </form>          
        </section>

        <CtaHome/>
        
        </>
    )
}

