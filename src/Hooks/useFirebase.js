import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuth from "../Firebase/firebase.init";
// import initializeAuth from "../Firebase/firebase.init";



initializeAuth();


const useFirebase = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState();
    // const [adminLoading, setAdminLoading] = useState(true);


    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();






    // Handel Google Sign In
    const googleSignIn = (location, history) => {
        setLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user);
                setAuthError('');

                saveUser(result.user.email, result.user.displayName, "PUT");

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
                setAuthError('');
                const newUser = { email, displayName: name };
                setUser(newUser);

                //Save User To Database
                saveUser(email, name, "POST");


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


    // Authenticate Admin
    useEffect(() => {
        // setAdminLoading(true);
        fetch(`https://enigmatic-harbor-71567.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setAdmin(data.admin);
            })
        // .finally(() => setAdminLoading(false))
    }, [user?.email])



    //Set User To DataBase
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('https://enigmatic-harbor-71567.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }

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
        authError,
        admin
    }
};

export default useFirebase;