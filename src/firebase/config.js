import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA7s0YipldAx7MAf1iECahYtAhjF6p2qCc",
  authDomain: "vue-project-695ec.firebaseapp.com",
  projectId: "vue-project-695ec",
  storageBucket: "vue-project-695ec.appspot.com",
  messagingSenderId: "785274108118",
  appId: "1:785274108118:web:01dff3d84ce497f1f23177",
};

//파이어베이스 초기화
firebase.initializeApp(firebaseConfig);

//파이어스토어 초기화
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, timestamp };
