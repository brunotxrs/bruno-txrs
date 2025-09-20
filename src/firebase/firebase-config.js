// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "brunotxrs-dev-portfolio.firebaseapp.com",
  projectId: "brunotxrs-dev-portfolio",
  storageBucket: "brunotxrs-dev-portfolio.firebasestorage.app",
  messagingSenderId: "271114833056",
  appId: "1:271114833056:web:16bf4b111e50eea6dd0dc5",
  measurementId: "G-R65JEPZ5JB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);