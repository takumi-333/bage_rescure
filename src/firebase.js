import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getFirestore } from 'firebase/firestore/lite';
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyCjErhC2JDng0oxo0b_UyvkKWK0yAL_Qbo",
    authDomain: "first-firebase-7494d.firebaseapp.com",
    projectId: "first-firebase-7494d",
    storageBucket: "first-firebase-7494d.appspot.com",
    messagingSenderId: "359024068908",
    appId: "1:359024068908:web:6f590965e486bb13fd8489"
};

// Initialize Firebase
console.log(firebaseConfig);
export const app = firebase.initializeApp(firebaseConfig);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export const db = getFirestore(app);
export const storage = getStorage(app);