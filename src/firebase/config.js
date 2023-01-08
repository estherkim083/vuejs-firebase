import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA7s0YipldAx7MAf1iECahYtAhjF6p2qCc",
  authDomain: "vue-project-695ec.firebaseapp.com",
  projectId: "vue-project-695ec",
  storageBucket: "vue-project-695ec.appspot.com",
  messagingSenderId: "785274108118",
  appId: "1:785274108118:web:63f8e74df50b863cf23177",
};

initializeApp(firebaseConfig);

// init services
const db = getFirestore();
const auth = getAuth();

export { db, auth };
