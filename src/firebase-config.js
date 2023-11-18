// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuMyRG5XBf1qWz6de2LKYR_Y3HUpZBbG0",
  authDomain: "codepath-final-project-e49ee.firebaseapp.com",
  projectId: "codepath-final-project-e49ee",
  storageBucket: "codepath-final-project-e49ee.appspot.com",
  messagingSenderId: "588025977388",
  appId: "1:588025977388:web:926f7aadec89d9756b8f89",
  measurementId: "G-ME0S18RV2Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);