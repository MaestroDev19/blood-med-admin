
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBmm3EMwd8a7jqTxSFoUu4vWNPm_MXJoP8",
  authDomain: "bloodmed-e5d9d.firebaseapp.com",
  projectId: "bloodmed-e5d9d",
  storageBucket: "bloodmed-e5d9d.appspot.com",
  messagingSenderId: "51222250931",
  appId: "1:51222250931:web:10bf0c7fbe31ffda7437c6",
  measurementId: "G-WHRCZ13HSC"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);