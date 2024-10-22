// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCC38bFso9ciI9fWZMvCsZ1spfW0MNuaIQ",
  authDomain: "bss-hema.firebaseapp.com",
  projectId: "bss-hema",
  storageBucket: "bss-hema.appspot.com",
  messagingSenderId: "921168533897",
  appId: "1:921168533897:web:d6d8740fcabac33ab52958"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);