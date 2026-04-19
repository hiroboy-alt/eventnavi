import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// イベントナビ独自のFirestore（イベントデータ用）
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

// yagiyama-net（共有：認証 + ユーザー情報 + カレンダー連携）
const sharedConfig = {
  apiKey: "AIzaSyBUMYSL31nao-X60sgj1SaDT3uVdoklGo8",
  authDomain: "yagiyama-net.firebaseapp.com",
  projectId: "yagiyama-net",
  storageBucket: "yagiyama-net.firebasestorage.app",
  messagingSenderId: "521005930868",
  appId: "1:521005930868:web:ec8d8afb837114ad833421",
};
const sharedApp = initializeApp(sharedConfig, "shared");
export const sharedDb = getFirestore(sharedApp);
export const sharedAuth = getAuth(sharedApp);
