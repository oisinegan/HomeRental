const express = require("express");
const router = express.Router();
const connection = require("../config/dbConfig");

router.get("/", (req, res) => {
  connection.connect();

  connection.query(
    "SELECT home.*, Landlord.name FROM Home,Landlord where Landlord.idLandlord = Home.idLandlord;",
    (err, rows, fields) => {
      if (err) throw err;

      res.send(rows);
    }
  );
});

module.exports = router;
