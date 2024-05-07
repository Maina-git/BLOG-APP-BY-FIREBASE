// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from  "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

import {getAuth, GoogleAuthProvider} from  "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxgEZapKsZbQzbQVAoHPPQL-qhM3BC6Oc",
  authDomain: "blogapp-8047c.firebaseapp.com",
  projectId: "blogapp-8047c",
  storageBucket: "blogapp-8047c.appspot.com",
  messagingSenderId: "500453650111",
  appId: "1:500453650111:web:473e8ff71c0539d90c600a",
  measurementId: "G-0EFS30B1W4"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const  db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

