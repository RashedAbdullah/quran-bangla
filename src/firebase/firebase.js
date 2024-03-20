import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_AUTH_KEY,
  authDomain: import.meta.env.VITE_REACT_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_REACT_PROJECT_ID,
  storageBucket: import.meta.env.VITE_REACT_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_REACT_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_REACT_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const google = new GoogleAuthProvider();

// Sign up:
const signupWithEmailAndPassword = async (email, password) => {
  try {
    const response = createUserWithEmailAndPassword(auth, email, password);
    return response;
  } catch (err) {
    console.log(err.message);
  }
};

// Sign in:
const signInWithEmail = async (email, password) => {
  try {
    const res = signInWithEmailAndPassword(auth, email, password);
    return res;
  } catch (err) {
    console.log(err);
  }
};

// Reset password:
const resetPassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (err) {
    console.log(err);
  }
};

// Sign in with google:
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, google);
    return res.user;
  } catch (err) {
    console.log(err);
  }
};

export {
  auth,
  signupWithEmailAndPassword,
  signInWithEmail,
  resetPassword,
  signInWithGoogle,
};
