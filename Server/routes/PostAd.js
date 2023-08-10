const express = require("express");
const router = express.Router();
const connection = require("../config/dbConfig");

router.post("/", (req, res) => {
  connection.connect();

  let info = req.body;
  console.log(info);
  // res.send('"RECEIVED"');

  for (var i = 0; i < info.urls.length; i++) {
    console.log(info.urls[i]);
  }

  const sql =
    "INSERT INTO `HomeRental`.`Home` (`Type`, `Address`, `City`, `County`, `Price`, `Bedrooms`, `Bathrooms`, `idLandlord`, `DatePosted`,`Folder`,`Description`) VALUES ('" +
    info.Type +
    "', '" +
    info.Address +
    "', '" +
    info.City +
    "', '" +
    info.County +
    "', '" +
    info.Price +
    "', '" +
    info.Bedrooms +
    "', '" +
    info.Bathrooms +
    "', '" +
    info.idLandlord +
    "', '" +
    info.DatePosted +
    "', '" +
    info.Folder +
    "', '" +
    info.Description +
    "')";
  connection.query(sql, (err, rows, fields) => {
    if (err) throw err;
    console.log(rows);
    for (var i = 0; i < info.urls.length; i++) {
      connection.query(
        "INSERT INTO `HomeRental`.`Urls` (`idHome`,`Url`) VALUES ('" +
          rows.insertId +
          "','" +
          info.urls[i] +
          "')",
        (err1, rows1, fields1) => {
          if (err1) throw err1;
        }
      );
    }

    res.send('"RECIEVED"');
  });
});

module.exports = router;
