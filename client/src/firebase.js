// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "shin-estate.firebaseapp.com",
  projectId: "shin-estate",
  storageBucket: "shin-estate.appspot.com",
  messagingSenderId: "359035792787",
  appId: "1:359035792787:web:ef42660304893c7a5ecc66",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
