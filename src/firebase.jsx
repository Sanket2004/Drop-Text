import { initializeApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBVHfXGiwVG99hi19IKNPd4dZDcAIOCWyM",
  authDomain: "quiz-fcab9.firebaseapp.com",
  projectId: "quiz-fcab9",
  storageBucket: "quiz-fcab9.appspot.com",
  messagingSenderId: "1018744786218",
  appId: "1:1018744786218:web:78f01a2701e00258f06253"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
export default  db;