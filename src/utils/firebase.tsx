// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: "netflixgpt-92b89.firebaseapp.com",
  projectId: "netflixgpt-92b89",
  storageBucket: "netflixgpt-92b89.appspot.com",
  messagingSenderId: "758315688786",
  appId: "1:758315688786:web:f7b4f4a019cf426ada908b",
  measurementId: "G-NKB4WEZ00G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);