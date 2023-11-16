import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBV7pKmcSa7uWdlmfO0tbsqa-Kx62nh8bA",
  authDomain: "react-glasses-firebase-auth.firebaseapp.com",
  projectId: "react-glasses-firebase-auth",
  storageBucket: "react-glasses-firebase-auth.appspot.com",
  messagingSenderId: "128943227955",
  appId: "1:128943227955:web:a0b4f9749ec405a7518f46"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
