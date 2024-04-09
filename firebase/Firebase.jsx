// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBc3t-8WCVgE6YaXtWExASAXsirlDAlOuc",
  authDomain: "zomato-clone-dd89c.firebaseapp.com",
  projectId: "zomato-clone-dd89c",
  storageBucket: "zomato-clone-dd89c.appspot.com",
  messagingSenderId: "277278160455",
  appId: "1:277278160455:web:41d461d9a7c0151a99a362",
  measurementId: "G-60SLXFMGM0"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(firebaseApp);
// const analytics = getAnalytics(app);
export {firebaseApp, db, auth};