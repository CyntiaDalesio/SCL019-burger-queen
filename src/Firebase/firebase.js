// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore}  from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgfQcAHxS4Svus9aTLnZjmCRIylTUdJMk",
  authDomain: "food-adfc2.firebaseapp.com",
  projectId: "food-adfc2",
  storageBucket: "food-adfc2.appspot.com",
  messagingSenderId: "421303681612",
  appId: "1:421303681612:web:b2860418be79a4bdab2ae9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db , app};