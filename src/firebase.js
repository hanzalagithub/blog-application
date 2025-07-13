import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyClMSVluajjG1yXXdapeL_fA0gQmvJdbWY",
  authDomain: "react-blogs-app-50f67.firebaseapp.com",
  projectId: "react-blogs-app-50f67",
  storageBucket: "react-blogs-app-50f67.firebasestorage.app",
  messagingSenderId: "474631191748",
  appId: "1:474631191748:web:650fc1655a229829c09d91"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
