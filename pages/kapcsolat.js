import CtaHome from '../components/homepage/cta-home'
import { useState, useEffect } from 'react'
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";


export default function Kapcsolat() {

    //ReCaptcha
    
    const [captchaResponse, setCaptchaResponse] = useState(null);

    const handleCaptchaVerify = (response) => {
        setCaptchaResponse(response);
    };
    

    async function handleSubmit(event) {
        event.preventDefault();        
    
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
        
        if (response.ok) {
            console.log("A küldés sikeres")
        }
        if (!response.ok) {
            console.log("A küldés sikertelen")
        }
        
    }

    return(
        <>
        <section className='flex flex-col justify-center items-center w-full overflow-hidden bg-white pt-[75px]'>
        <div className='absolute bottom-0 left-0 bg-[#06A452] w-[100px] lg:w-[500px] h-[100px] lg:h-[500px] rounded-full blur-3xl opacity-10 z-10'></div>
        <div className='absolute top-0 right-0 bg-[#06A452] w-[100px] lg:w-[500px] h-[100px] lg:h-[500px] rounded-full blur-3xl opacity-10 z-10'></div>
            <div className='flex flex-col w-11/12 lg:w-8/12 py-8'>
                <h1 className='text-center m-auto text-4xl lg:text-6xl font-black tracking-tighter py-2'>Kapcsolat</h1>
                <p  className='text-center lg:text-lg w-11/12 lg:w-1/2 m-auto py-2 uppercase tracking-widest text-neutral-400 font-bold'>Ha kérdésed van, vagy megbíznál bennünket.</p>
            </div>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4 w-11/12 lg:w-1/3'>
                <input type='lname' id='lname' placeholder='Vezetéknév' className='border border-neutral-200 p-2'/>
                <input type='fname' id='fname' placeholder='Keresztnév' className='border border-neutral-200 p-2'/>
                <input type='email' id='email' placeholder='E-mail cím' className='border border-neutral-200 p-2'/>
                <textarea placeholder='Üzenet' id='message' rows='10' className='border border-neutral-200 p-2'/>
                <button type='submit' className='px-6 py-3 bg-gradient-to-r from-[#06A452] to-[#0DC666] hover:shadow-[#06a4522f] hover:shadow-xl transition-all text-white text-lg rounded-md cursor-pointer'>Küldés</button>
                <p className='text-center text-xl m-auto pb-16 pt-12'>Ha árat szeretnél számolni, 3 lépésben könnyedén megteheted felesleges várakozás nélkül.</p>
            </form>          
        </section>

        <CtaHome/>
        
        </>
    )
}

