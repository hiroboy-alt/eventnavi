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

// yagiyama-net（グループウェア）のFirestoreに副接続（承認済みイベント連携用）
const sharedConfig = {
  apiKey: "AIzaSyBUMYSL31nao-X60sgj1SaDT3uVdoklGo8",
  authDomain: "yagiyama-net.firebaseapp.com",
  projectId: "yagiyama-net",
};
const sharedApp = initializeApp(sharedConfig, "shared");
export const sharedDb = getFirestore(sharedApp);
