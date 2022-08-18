import firebase from "firebase/compat/app";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";

import "firebase/compat/auth";
export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyAcnBwKLnDI2whevGILskGFrjHrtD9ABGI",
    authDomain: "chat-app-react-f2ad0.firebaseapp.com",
    projectId: "chat-app-react-f2ad0",
    storageBucket: "chat-app-react-f2ad0.appspot.com",
    messagingSenderId: "705496223698",
    appId: "1:705496223698:web:020b7a08d9ba0376ed020b",
    measurementId: "G-WWTTNDRKQN",
  })
  .auth();

async function loginWithGoogle() {
  try {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    const { user } = await signInWithPopup(auth, provider);

    return { uid: user.uid, displayName: user.displayName };
  } catch (error) {
    if (error.code !== "auth/cancelled-popup-request") {
      console.error(error);
    }

    return null;
  }
}

export { loginWithGoogle };
