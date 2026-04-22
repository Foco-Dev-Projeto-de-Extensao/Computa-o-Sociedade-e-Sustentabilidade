// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDVyZ5ZkAPyWFBMS-tNQRktwu53yomKoBI",
  authDomain: "lar-bem.firebaseapp.com",
  projectId: "lar-bem",
  storageBucket: "lar-bem.firebasestorage.app",
  messagingSenderId: "284441631105",
  appId: "1:284441631105:web:ee94fab9a82a832f077080"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

console.log("Firebase conectado! ✅");