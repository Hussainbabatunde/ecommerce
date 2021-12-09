import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig= {
  apiKey: "AIzaSyA8J_787BnXeDfFp-czwWbPKi_lZ5sVL1Y",
  authDomain: "ecommerce-website-90d14.firebaseapp.com",
  projectId: "ecommerce-website-90d14",
  storageBucket: "ecommerce-website-90d14.appspot.com",
  messagingSenderId: "670595316755",
  appId: "1:670595316755:web:81a0d9ef354455e6fcd3e6",
  measurementId: "${config.measurementId}"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const analytics = getAnalytics(app);
export  { auth };
