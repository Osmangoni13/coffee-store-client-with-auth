// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC0JFU7zjUp5dvXovdA2i9SbjMUipSy_M8",
    authDomain: "coffee-store-9f86a.firebaseapp.com",
    projectId: "coffee-store-9f86a",
    storageBucket: "coffee-store-9f86a.firebasestorage.app",
    messagingSenderId: "510682445322",
    appId: "1:510682445322:web:3a7db70661be8d933811f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);