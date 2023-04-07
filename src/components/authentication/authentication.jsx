import { signInWithGooglePopup, signInWithGoogleRedirect, createUserDocumentFromAuth, auth } from "../../utils/firebase/firebase.utils";
import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import SignUpForm from '../sign-up-form/sign-up-form.component';

const SignIn = () => {

    useEffect( () => {
        const fetchData = async () => {
            const response = await getRedirectResult(auth);
            if(response){
                const {user} = response;
                const userDocRef = await createUserDocumentFromAuth(user)
            }
        }
        fetchData();
    }, []);

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    };

    return(
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>Sign In with google popup</button>
            <SignUpForm />
        </div>
    );

}

export default SignIn;