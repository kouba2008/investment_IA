// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// إعدادات مشروع Firebase الخاص بك
const firebaseConfig = {
  apiKey: "AIzaSyAkv4KnejlVxlJaKujAKqw2-Zg6b-5x5rs",
  authDomain: "investment-website-66d8d.firebaseapp.com",
  projectId: "investment-website-66d8d",
  storageBucket: "investment-website-66d8d.appspot.com",
  messagingSenderId: "598565916831",
  appId: "1:598565916831:web:9f9f2e2f87639638f5d2aa"
};

// تهيئة التطبيق
const app = initializeApp(firebaseConfig);

// المصادقة
const auth = getAuth(app);

// قاعدة بيانات Firestore
const db = getFirestore(app);

export { auth, db };