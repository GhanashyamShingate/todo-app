// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6iT9h7ArpxWPbNKfQ1KbBxPKPKLJHAek",
  authDomain: "info6129-f25af.firebaseapp.com",
  projectId: "info6129-f25af",
  storageBucket: "info6129-f25af.appspot.com",
  messagingSenderId: "926922224704",
  appId: "1:926922224704:web:b8f5d23eda321628361ba5",
  measurementId: "G-6TDY7LSSCH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
