import {initializeApp} from 'firebase/app';
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword} from 'firebase/auth'
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCGkFpC82qlpIoUmeFohgfS-0zy8AfUiWI",
    authDomain: "crown-clothing-45720.firebaseapp.com",
    projectId: "crown-clothing-45720",
    storageBucket: "crown-clothing-45720.appspot.com",
    messagingSenderId: "890438924765",
    appId: "1:890438924765:web:d29f2e2560b3b5d44b1e34"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: "select_account"
  })

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
  export const signInWithGoogleRedirect = () => signInWithRedirect(auth,provider);
  export const db = getFirestore();

  export const createAuthUserWithEmailAndPassword = async  (email, password) => {
    if(!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password);
  } 

  export const createUserDocumentFromAuth = async(userAuth, additionalInformation) => {
    if(!userAuth) return;


    const userDocRef  = doc(db, 'users', userAuth.uid)
  
    const userSnapshot = await getDoc(userDocRef)
    if(!userSnapshot.exists()){
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try {
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt,
          ...additionalInformation
        })
        
      } catch (error) {
        console.log("Error" + error.message);
      }
    }
    return userDocRef;
  }