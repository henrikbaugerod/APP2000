// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, Timestamp } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQUU7gfa_cvpZFxEM9cMyPje6IVn8qvMQ",
  authDomain: "catch-billiard.firebaseapp.com",
  projectId: "catch-billiard",
  storageBucket: "catch-billiard.appspot.com",
  messagingSenderId: "427916515820",
  appId: "1:427916515820:web:4473b6e2ab54ec490848c9"
};
// Initialize Firebase

const app = initializeApp(firebaseConfig);
// Export firestore database
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app);