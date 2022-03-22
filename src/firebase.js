// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvIm6GMb1xnJYv5sQLeZ4oNm583liLKAM",
  authDomain: "zenly-8f6fc.firebaseapp.com",
  projectId: "zenly-8f6fc",
  storageBucket: "zenly-8f6fc.appspot.com",
  messagingSenderId: "517394801504",
  appId: "1:517394801504:web:c4c62ec302605f24d0b405"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore();

  
