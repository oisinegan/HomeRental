const express = require("express");
const router = express.Router();
const connection = require("../config/dbConfig");
//const { getStorage } = require("firebase-admin/storage");
const { uploadBytes } = require("firebase/storage");
const { ref } = require("firebase/storage");
const { initializeApp } = require("firebase-admin/app");
// const getStorage = require("../node_modules/firebase/storage");
const { getStorage } = require("firebase-admin/storage");

// const firebaseConfig = {
//   apiKey: "AIzaSyCe_gt78ziwC_Q3wjIU0eVOcZBNX49q1Zc",
//   authDomain: "houserentalimages.firebaseapp.com",
//   projectId: "houserentalimages",
//   storageBucket: "houserentalimages.appspot.com",
//   messagingSenderId: "872853039263",
//   appId: "1:872853039263:web:acc0bc3eed092d069a1aaa",
//   measurementId: "G-QXTW4JWRNV",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const storage = getStorage(app);

//--------------------------------------------------------------------------------------------
const admin = require("firebase-admin");
const serviceAccount = require("../houserentalimages-firebase-adminsdk-jyge2-eaaf09321a.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "houserentalimages.appspot.com",
});

const bucket = admin.storage().bucket();

//--------------------------------------------------------------------------------------------
async function uploadFile(filePath, destinationPath) {
  try {
    await bucket.upload(filePath, {
      destination: destinationPath,
    });
    console.log("File uploaded successfully.");
  } catch (error) {
    console.error("Error uploading file:", error);
  }
}

router.post("/", (req, res) => {
  connection.connect();

  let info = req.body;

  console.log(info);

  let date_ob = new Date();
  let date = ("0" + date_ob.getDate()).slice(-2);
  let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
  let year = date_ob.getFullYear();
  let hours = date_ob.getHours();
  let minutes = date_ob.getMinutes();
  let seconds = date_ob.getSeconds();
  let milli = date_ob.getMilliseconds();

  let fullDate =
    hours +
    ":" +
    minutes +
    ":" +
    seconds +
    ":" +
    milli +
    "/" +
    date +
    "-" +
    month +
    "-" +
    year;
  console.log(fullDate);



  // const imageRef = ref(storage, folder);
  // uploadBytes(imageRef, info.file).then(() => {
  //   console.log("IMAGE UPLOADED");
  // });

  // const imageRef = ref(storage, fullDate);

  //IMage the folder is user id + full date

  //USERID. - Ad1/Ad2/Ad3

  // if (info.file === "") {
  //   res.send('"ERROR RECIEVING IMAGE"');
  // }else{
  //   const imageRef = ref(storage,)
  // }

  // const sql =
  //   "SELECT * FROM HomeRental.Home WHERE Price BETWEEN " +
  //   info.MinPrice +
  //   " AND " +
  //   info.MaxPrice +
  //   " AND Bedrooms BETWEEN " +
  //   info.MinBedrooms +
  //   " AND " +
  //   info.MaxBedrooms +
  //   " AND Bathrooms BETWEEN " +
  //   info.MinBathrooms +
  //   " AND " +
  //   info.MaxBathrooms +
  //   " AND City LIKE '" +
  //   info.City +
  //   "%'" +
  //   " AND County LIKE '" +
  //   info.County +
  //   "%'" +
  //   " AND Type LIKE '" +
  //   info.Type +
  //   "%'";
  // connection.query(sql, (err, rows, fields) => {
  //   if (err) throw err;

  //   res.send(rows);
  //  });
});

module.exports = router;
