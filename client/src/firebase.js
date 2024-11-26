// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blogger2-9f115.firebaseapp.com",
  projectId: "blogger2-9f115",
  storageBucket: "blogger2-9f115.firebasestorage.app",
  messagingSenderId: "976132094769",
  appId: "1:976132094769:web:9ffa8ec24b5d2ef08b0e10"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);