// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCe_gt78ziwC_Q3wjIU0eVOcZBNX49q1Zc",
  authDomain: "houserentalimages.firebaseapp.com",
  projectId: "houserentalimages",
  storageBucket: "houserentalimages.appspot.com",
  messagingSenderId: "872853039263",
  appId: "1:872853039263:web:acc0bc3eed092d069a1aaa",
  measurementId: "G-QXTW4JWRNV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
