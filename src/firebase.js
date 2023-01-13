// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXikMAwfsdPf5KwhnCTVLdeydR2bX8-pM",
  authDomain: "react-todo-list-af8b2.firebaseapp.com",
  projectId: "react-todo-list-af8b2",
  storageBucket: "react-todo-list-af8b2.appspot.com",
  messagingSenderId: "412295773083",
  appId: "1:412295773083:web:f831f7f69e05b839c9bf3e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)