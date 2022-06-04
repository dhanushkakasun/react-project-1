import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAaLr6eANd8QqZW4NHIzqHJKUb8MAUm4cE",
  authDomain: "train-schedule-rmad.firebaseapp.com",
  projectId: "train-schedule-rmad",
  storageBucket: "train-schedule-rmad.appspot.com",
  messagingSenderId: "50880201132",
  appId: "1:50880201132:web:a8b9ea77e29f092b977a09"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);