import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDdk3OWqTuBiS7s55IMRgawMHmWHNjYvjo",
  authDomain: "eventnavi-c4b4e.firebaseapp.com",
  projectId: "eventnavi-c4b4e",
  storageBucket: "eventnavi-c4b4e.firebasestorage.app",
  messagingSenderId: "640639639010",
  appId: "1:640639639010:web:ed6cfa5cd451aa07ffedbb",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
