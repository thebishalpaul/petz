import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { getStorage } from "firebase/storage";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
// firestore.settings({ ignoreUndefinedProperties: true });
const storage = getStorage(firebaseApp);
// const auth=firebase.auth();
export {db,storage};