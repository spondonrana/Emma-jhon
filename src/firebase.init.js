// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByM_gVSt4mupVLcjK0YdCWmVd8ozbHbhI",
  authDomain: "ema-john-simple-80878.firebaseapp.com",
  projectId: "ema-john-simple-80878",
  storageBucket: "ema-john-simple-80878.appspot.com",
  messagingSenderId: "907160435091",
  appId: "1:907160435091:web:fa68849a5dbf40005cd066",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
