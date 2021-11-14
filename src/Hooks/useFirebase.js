import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuth from "../Firebase/firebase.init";
// import initializeAuth from "../Firebase/firebase.init";



initializeAuth();


const useFirebase = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const [authError, setAuthError] = useState('');


    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();






    // Handel Google Sign In
    const googleSignIn = (location, history) => {
        setLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user);
                setAuthError('');
                const destination = location?.state?.from || "/";
                history.replace(destination);
            }).catch((error) => {
                // Handle Errors here.
                setAuthError(error.message);
            }).finally(() => setLoading(false));
    }



    //Handel Email Pass Registration
    const emailRegister = (email, password, name, history) => {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const newUser = { email, displayName: name };
                setUser(newUser);
                setAuthError('');

                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    // Profile updated!
                    // ...
                }).catch((error) => {
                    // An error occurred
                    // ...
                });

                history.replace("/");

            })
            .catch((error) => {
                // const errorCode = error.code;
                setAuthError(error.message);
            })
            .finally(() => setLoading(false));
    }


    //Handel Email Sign In
    const emailSignIn = (email, password, location, history) => {
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || "/";
                history.replace(destination);
                setAuthError('');
                // Signed in 
                setUser(userCredential.user);
                // ...
            })
            .catch((error) => {
                // const errorCode = error.code;
                setAuthError(error.message);
            })
            .finally(() => setLoading(false));
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
        emailRegister,
        emailSignIn,
        user,
        logOut,
        loading,
        authError
    }
};

export default useFirebase;