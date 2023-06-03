// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBziPZDp_mXnKwtFB9N1-Q6-5tFtBXvI_w",
  authDomain: "real-clone-ec441.firebaseapp.com",
  projectId: "real-clone-ec441",
  storageBucket: "real-clone-ec441.appspot.com",
  messagingSenderId: "40301499935",
  appId: "1:40301499935:web:7adb0eaea0919bd56fe72a"
};

// Initialize Firebase
 initializeApp(firebaseConfig);
 export const db = getFirestore();