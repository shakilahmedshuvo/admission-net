// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBCRraeGvkFwsJEcEgTjbZjgpDtciohye8",
    authDomain: "admission-net.firebaseapp.com",
    projectId: "admission-net",
    storageBucket: "admission-net.appspot.com",
    messagingSenderId: "763616724955",
    appId: "1:763616724955:web:0f5a106d703bc889c389fe",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;