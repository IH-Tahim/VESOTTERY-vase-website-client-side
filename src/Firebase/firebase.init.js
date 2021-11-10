import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";


const initializeAuth = () => {
    // Initialize Firebase
    initializeApp(firebaseConfig);
}

export default initializeAuth;