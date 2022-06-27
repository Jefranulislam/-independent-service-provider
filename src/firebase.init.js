// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAY7vyELcv3tXy25UAoIYvAFD9gZJD5wA4",
    authDomain: "home-made-food-a41b4.firebaseapp.com",
    projectId: "home-made-food-a41b4",
    storageBucket: "home-made-food-a41b4.appspot.com",
    messagingSenderId: "723126928324",
    appId: "1:723126928324:web:cb9f946ef4b82eab525a91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;