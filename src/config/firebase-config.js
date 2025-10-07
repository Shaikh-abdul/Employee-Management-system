// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore }  from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0EQRexctbjr9qow-JD2ZIg7V8vpQVroQ",
  authDomain: "emsproject-12-9a8b6.firebaseapp.com",
  projectId: "emsproject-12-9a8b6",
  storageBucket: "emsproject-12-9a8b6.firebasestorage.app",
  messagingSenderId: "1094522656687",
  appId: "1:1094522656687:web:f24c555ae695c88859c15a"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app)