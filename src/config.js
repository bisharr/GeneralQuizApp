// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCiJhQPdSDtgoN5FiQcus9oxHp8A6qfg9c",
  authDomain: "general-quiz-36f10.firebaseapp.com",
  projectId: "general-quiz-36f10",
  storageBucket: "general-quiz-36f10.firebasestorage.app",
  messagingSenderId: "777827072229",
  appId: "1:777827072229:web:18d0f77ac73c6192ebbc0c",
  measurementId: "G-TYBXCG3MCB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { app, auth, googleProvider };
