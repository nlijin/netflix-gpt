// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrhS8Xvm-EoniJGKbNmypA7CMpZTXrz8Y",
  authDomain: "netflixgpt-ec45f.firebaseapp.com",
  projectId: "netflixgpt-ec45f",
  storageBucket: "netflixgpt-ec45f.appspot.com",
  messagingSenderId: "1094852092766",
  appId: "1:1094852092766:web:a8e416277637e7c0c865cf",
  measurementId: "G-GBXKZ20HZ2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
