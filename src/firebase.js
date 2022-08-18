import firebase from "firebase/compat/app";

///////////////////////////////////////
export const firebaseapp = firebase.initializeApp({
  apiKey: "AIzaSyAcnBwKLnDI2whevGILskGFrjHrtD9ABGI",
  authDomain: "chat-app-react-f2ad0.firebaseapp.com",
  projectId: "chat-app-react-f2ad0",
  storageBucket: "chat-app-react-f2ad0.appspot.com",
  messagingSenderId: "705496223698",
  appId: "1:705496223698:web:020b7a08d9ba0376ed020b",
  measurementId: "G-WWTTNDRKQN",
});
const db = firebaseapp.firestore();

const auth = firebase.auth();
export { db, auth };
