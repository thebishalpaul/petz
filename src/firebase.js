import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyC5_3f4s_3CB7BCxnUUIYXvpGP852yT6q0",
  authDomain: "petz-bcdbf.firebaseapp.com",
  projectId: "petz-bcdbf",
  storageBucket: "petz-bcdbf.appspot.com",
  messagingSenderId: "176601430456",
  appId: "1:176601430456:web:accac3300d8014b4d5b74d"
};

// Initialize Firebase

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const storage = getStorage(firebaseApp);
export {db,storage};