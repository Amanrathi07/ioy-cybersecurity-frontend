// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyCvpNXuU2bqLI2roWHY1h19oDRYWK0Ji7o",

    authDomain: "myapp-75b6e.firebaseapp.com",
  
    projectId: "myapp-75b6e",
  
    storageBucket: "myapp-75b6e.firebasestorage.app",
  
    messagingSenderId: "649965967041",
  
    appId: "1:649965967041:web:381997af6a81d6ee962640"
  
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;
