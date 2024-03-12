// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUjQqrZZKuX8wXE-Lkg6j-aqJfk-NSjKI",
  authDomain: "fir-connection-zhmurko.firebaseapp.com",
  projectId: "fir-connection-zhmurko",
  storageBucket: "fir-connection-zhmurko.appspot.com",
  messagingSenderId: "1073094280646",
  appId: "1:1073094280646:web:1961eb9e1ed264cf33dec7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db=getFirestore(app);

export default db;