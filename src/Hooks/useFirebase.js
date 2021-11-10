import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuth from "../Firebase/firebase.init";



initializeAuth();


const useFirebase = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();






    // Handel Google Sign In
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    }



    // Track User login or logout details
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setLoading(false);
        })
    }, [])

    // Handel Logout user

    const logOut = () => {
        setLoading(true);
        signOut(auth)
            .then(() => {

            }).finally(() => setLoading(false))
    }

    return {
        googleSignIn,
        user,
        logOut,
        loading
    }
};

export default useFirebase;