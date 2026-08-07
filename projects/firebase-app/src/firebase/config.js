// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0ZLTmSql2KUBz3g0OrvJ9wmPJ6KBDyn8",
  authDomain: "portfolio-app-132be.firebaseapp.com",
  projectId: "portfolio-app-132be",
  storageBucket: "portfolio-app-132be.firebasestorage.app",
  messagingSenderId: "685452574109",
  appId: "1:685452574109:web:cbe6ab046a7bce447f4374",
  measurementId: "G-1K5X5RKK0H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig