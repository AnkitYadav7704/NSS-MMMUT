// firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBtuCoo1abLyuhT8puZ-AKeO-UN7jA2eI4",
  authDomain: "nss-mmmut.firebaseapp.com",
  projectId: "nss-mmmut",
  storageBucket: "nss-mmmut.firebasestorage.app",
  messagingSenderId: "254301569697",
  appId: "1:254301569697:web:13c9273e92fdd0bcb0a6e0",
  measurementId: "G-FMYLBN5ERC"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
