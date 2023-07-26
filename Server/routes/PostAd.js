const express = require("express");
const router = express.Router();
const connection = require("../config/dbConfig");

router.post("/", (req, res) => {
  connection.connect();

  let info = req.body;

  const sql =
    "INSERT INTO `HomeRental`.`Home` (`Type`, `Address`, `City`, `County`, `Price`, `Bedrooms`, `Bathrooms`, `url`, `idLandlord`, `DatePosted`,`Folder`) VALUES ('" +
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
    info.url +
    "', '" +
    info.idLandlord +
    "', '" +
    info.DatePosted +
    "', '" +
    info.Folder +
    "');";

  connection.query(sql, (err, rows, fields) => {
    if (err) throw err;
    res.send('"RECIEVED"');
  });
});

module.exports = router;
