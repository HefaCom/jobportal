// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZ9Lvz3Xnnof-S0Sa7BFxFvKRClNK741s",
  authDomain: "aistudypartner.firebaseapp.com",
  projectId: "aistudypartner",
  storageBucket: "aistudypartner.appspot.com",
  messagingSenderId: "275326708469",
  appId: "1:275326708469:web:e211f423c6bb792379b3bc",
  measurementId: "G-G6QMHRY36X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
