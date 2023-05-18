import { signInWithGooglePopup, signInWithGoogleRedirect, createUserDocumentFromAuth, auth } from "../../utils/firebase/firebase.utils";
import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import '../authentication/authentication.styles.scss'

const Authentication = () => {

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
        <div className="authentication-container">
            <SignInForm />
            <SignUpForm />
        </div>
    );

}

export default Authentication;