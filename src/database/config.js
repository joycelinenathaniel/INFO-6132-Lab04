// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4u3MpJ2DC8ktcSfa-xFN-5dEFW52sGmg",
  authDomain: "info-6132-lab04.firebaseapp.com",
  projectId: "info-6132-lab04",
  storageBucket: "info-6132-lab04.appspot.com",
  messagingSenderId: "90693303811",
  appId: "1:90693303811:web:95cd9003037e786bf51836"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);