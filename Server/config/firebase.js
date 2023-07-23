// Import the functions you need from the SDKs you need

const { initializeApp } = require("firebase-admin/app");
// const getStorage = require("../node_modules/firebase/storage");
const { getStorage } = require("firebase-admin/storage");

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
const storage = getStorage(app);

module.exports = storage;
