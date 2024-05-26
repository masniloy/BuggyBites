
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCMCH54zW2Hn7rsk_D0DY9nSMiR_1z2FTc",
    authDomain: "buggybites-3da43.firebaseapp.com",
    projectId: "buggybites-3da43",
    storageBucket: "buggybites-3da43.appspot.com",
    messagingSenderId: "1028484963730",
    appId: "1:1028484963730:web:3eee24ac6fca37af61b54b",
    measurementId: "G-9G5ESSGPM7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;