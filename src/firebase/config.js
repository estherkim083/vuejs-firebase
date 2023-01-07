import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA7s0YipldAx7MAf1iECahYtAhjF6p2qCc",
  authDomain: "vue-project-695ec.firebaseapp.com",
  projectId: "vue-project-695ec",
  storageBucket: "vue-project-695ec.appspot.com",
  messagingSenderId: "785274108118",
  appId: "1:785274108118:web:63f8e74df50b863cf23177",
};

//파이어베이스 초기화
firebase.initializeApp(firebaseConfig);
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectAuth, timestamp };
