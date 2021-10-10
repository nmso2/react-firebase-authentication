import { useState } from "react"
import initializeAuthentication from "../Firebase/Firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

initializeAuthentication();

const useFirebae = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                console.log(result.user);
                setUser(result.user);
            }).catch((error) => {
                setError(error.message);
            });
    }

    return{
        user,
        error,
        signInWithGoogle
    }
}

export default useFirebae;