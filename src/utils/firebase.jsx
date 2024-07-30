// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaZj0wNfS1BhiTdRc_BLkvGTlJvDf4HAs",
  authDomain: "nextflix-gpt-96e33.firebaseapp.com",
  projectId: "nextflix-gpt-96e33",
  storageBucket: "nextflix-gpt-96e33.appspot.com",
  messagingSenderId: "491872813885",
  appId: "1:491872813885:web:772c177bab0225bd16fb54",
  measurementId: "G-Q0S7H48K5W"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
