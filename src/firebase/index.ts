// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAif_kOiRBBUdGkXZZV1BN2Yk5XENNZTKI",
  authDomain: "ayha-the-market.firebaseapp.com",
  projectId: "ayha-the-market",
  storageBucket: "ayha-the-market.firebasestorage.app",
  messagingSenderId: "732870488413",
  appId: "1:732870488413:web:5afd77a32e86d4a35c38b4",
  measurementId: "G-GL9W3PT681",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export default app;
