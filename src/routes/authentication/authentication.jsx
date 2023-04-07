import { signInWithGooglePopup, signInWithGoogleRedirect, createUserDocumentFromAuth, auth } from "../../utils/firebase/firebase.utils";
import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';

const Authentication = () => {

    useEffect( () => {
        console.log(process.env)
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
            <SignInForm />
            <SignUpForm />
        </div>
    );

}

export default Authentication;