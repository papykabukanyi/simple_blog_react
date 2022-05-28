// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKfeigLhDH2IJBk_UCp74KjI3It2Qkr88",
  authDomain: "blog-d6a43.firebaseapp.com",
  projectId: "blog-d6a43",
  storageBucket: "blog-d6a43.appspot.com",
  messagingSenderId: "312151606679",
  appId: "1:312151606679:web:1e15bc8351211cf50ff0d2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();