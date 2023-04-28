
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBJZjSNKTRXFS2RSulm0IbmUMMXmXIiFr8",
  authDomain: "bloodmed-ffd82.firebaseapp.com",
  projectId: "bloodmed-ffd82",
  storageBucket: "bloodmed-ffd82.appspot.com",
  messagingSenderId: "793660057313",
  appId: "1:793660057313:web:23bf106db39ae18267f9a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)