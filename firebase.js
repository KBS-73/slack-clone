import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//CONNECTS BACKEND TO FRONTEND
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDuhm7zbGRG_M2t6fdvX2Eub6LAYgAsbDc",
  authDomain: "slack-clone-f18c9.firebaseapp.com",
  projectId: "slack-clone-f18c9",
  storageBucket: "slack-clone-f18c9.appspot.com",
  messagingSenderId: "791739557675",
  appId: "1:791739557675:web:f76a4a21d6eceedd7ac76e",
  measurementId: "G-QDRBT601GE",
});

//TO GET ACCESS TO DATABASE
const db = firebaseApp.firestore();

//FOR LOGIN PAGE
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
