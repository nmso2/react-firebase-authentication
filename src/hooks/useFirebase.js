import { useEffect, useState } from "react"
import initializeAuthentication from "../Firebase/Firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";

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

    const logOut= ()=>{
        signOut(auth).then(()=>{
            setUser({});
        }).catch((error) => {
            setError(error.message);
          });
    }

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
              
            }
          });
    },[])

    return{
        user,
        error,
        logOut,
        signInWithGoogle
    }
}

export default useFirebae;