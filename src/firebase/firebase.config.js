// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: import.meta.env.VITE_API_KEY,
//     authDomain: import.meta.env.VITE_AUTH_DOMAIN,
//     projectId: import.meta.env.VITE_PROJECT_ID,
//     storageBucket: import.meta.env.VITE_STOAGE_BUCKET,
//     messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
//     appId: import.meta.env.VITE_APP_ID
// };

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZ9rsCw-O7GaJyhb8nyk3kSMGIuTSAUk4",
  authDomain: "cars-doctor-f23de.firebaseapp.com",
  projectId: "cars-doctor-f23de",
  storageBucket: "cars-doctor-f23de.appspot.com",
  messagingSenderId: "73520225468",
  appId: "1:73520225468:web:75f39b46a97017556984b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
