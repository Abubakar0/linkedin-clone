import firebase from "firebase";
import "firebase/firestore";

import { initializeApp } from "firebase/app";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7qAb3RdVvIFk1wCOOt-eJHLIqzoYxKro",
  authDomain: "linkedin-7dad8.firebaseapp.com",
  projectId: "linkedin-7dad8",
  storageBucket: "linkedin-7dad8.appspot.com",
  messagingSenderId: "243752125229",
  appId: "1:243752125229:web:f50d7427b937129f9ec9a4",
  measurementId: "G-87FC04QNRZ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
