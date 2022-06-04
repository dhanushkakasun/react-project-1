import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyB2olCEWFPnHttpi5RqTAEBfZsOtIcvrGI",
  authDomain: "train-schedule-806a6.firebaseapp.com",
  projectId: "train-schedule-806a6",
  storageBucket: "train-schedule-806a6.appspot.com",
  messagingSenderId: "795271819882",
  appId: "1:795271819882:web:cd61407b72e0695b841013"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);