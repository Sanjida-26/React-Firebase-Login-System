import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAp_p68qTcVoF0-HI5HLCEp1nDP0CRGwCI",
  authDomain: "react-firebase-login-system.firebaseapp.com",
  projectId: "react-firebase-login-system",
  storageBucket: "react-firebase-login-system.firebasestorage.app",
  messagingSenderId: "385807534264",
  appId: "1:385807534264:web:f1777c6da3ef607f118c4d",
  measurementId: "G-TSYNXNNLL2"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);