import { useEffect, useState, useRef } from "react";
import {getAuth, RecaptvhaVerifier, signInWithPhoneNumber} from 'firebase/auth';
import { async } from "@firebase/util";

export const login = ()=> {
    const [value, setValue] = useState('');
    const [isStep1, setIsStep1] = useState(true);

    const recaptchaVerifier = useRef();
    const confirmationResult = useRef();

    useEffect(()=>{
        const auth = getAuth();
        recaptchaVerifier.current = new RecaptvhaVerifier('reacaptcha-container', {}, auth);
    }, [])

    const onClickLogin = async () => {
        const auth = getAuth();
        const phoneNumber = value;
        confirmationResult.current = await signInWithPhoneNumber(auth, phoneNumber, recaptchaVerifier.current);

        setValue('');
        setIsStep1(false);
    }

    const onClickCode = async () => {
        const code = value;
        await confirmationResult.current.confirm(code);
    }
    return(
        <div>
            {
                isStep1 ? (
                    <div>
                        <div id="recaptcha-container"></div>
                        <input type={'text'} placeholder='Phone number' value={value} onChange={ (e) => setValue(e.target.value)}/>
                        <button onClick={onClickLogin}>Login</button>
                    </div>     
                ) : (
                    <div>
                        <input type={'text'} placeholder='verication code' value={value} onChange={(e) => setValue(e.target.value)}></input>
                        <button onClick={ onClickCode }>Check code</button>
                    </div>
                )
            }
        </div>
    )
}