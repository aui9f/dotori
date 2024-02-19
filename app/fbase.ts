// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {
  getFirestore,
  doc,
  collection,
  getDocs,
  query,
} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdJKNRUzxu5bdl1CBZ1bzQsj9tTo-jCkE",
  authDomain: "dotori-d0b92.firebaseapp.com",
  databaseURL: "https://dotori-d0b92.firebaseio.com",
  projectId: "dotori-d0b92",
  storageBucket: "dotori-d0b92.appspot.com",
  messagingSenderId: "1061670329634",
  appId: "1:1061670329634:web:68c1eee8202351b066197b",
  measurementId: "G-8RR6GY38SW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
export { app, db, doc, collection, getDocs, query };
