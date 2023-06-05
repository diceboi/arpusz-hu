import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { loadReCaptcha, ReCaptcha } from 'next-recaptcha';

export default function Recaptcha({ action, onVerify }) {

    const router = useRouter();

    useEffect(() => {
      loadReCaptcha();
    }, []);
  
    const handleVerify = (response) => {
      onVerify(response);
    };
  
    return (
       <>
      <div>
        <ReCaptcha
          sitekey="6LeuGXAmAAAAAAoh6FXl15-9_w1TYFsHWselOhvx" // Helyettesítsd a saját site key-eddel
          action={action}
          verifyCallback={handleVerify}
        />
      </div>
      </>
    );

}


 
