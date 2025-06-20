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

// Function to handle Google Sign-In
const handleLoginGoogle = async (setError) => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    console.log("User signed in with Google:", result.user);
    console.log("Welcome ,", result.user.displayName);
    // You can handle the user data here, e.g., save to state or database
    setError("");
  } catch (error) {
    console.error("Error signing in with Google:", error);
    if (error.code === "auth/popup-closed-by-user") {
      setError("Popup closed by user before completing sign-in.");
    } else {
      setError("Failed to sign in with Google. Please try again.");
    }
  }
};

// handle Login using email and password
const handlesubmit = async (e) => {
  e.preventDefault();
  const email = e.target.email.value;
  const password = e.target.password.value;

  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log("User signed in:", userCredential.user);
    // Handle successful login
    setError("");
  } catch (error) {
    console.error("Error signing in:", error);
    // Handle errors here
    setError("Failed to sign in. Please check your credentials and try again.");
  }
  e.target.reset(); // Reset the form after submission
};

export { app, auth, GoogleAuthProvider, handleLoginGoogle, handlesubmit };
