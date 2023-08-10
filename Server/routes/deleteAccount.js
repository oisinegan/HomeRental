const express = require("express");
const router = express.Router();
const connection = require("../config/dbConfig");

router.post("/", (req, res) => {
  connection.connect();

  let info = req.body;
  console.log(info);

  const sql1 = "DELETE FROM Home WHERE idLandlord = " + info.id + "; ";
  const sql2 = "DELETE FROM Landlord WHERE idLandlord = " + info.id + "; ";
  const sql3 =
    "DELETE FROM Urls WHERE idHome IN (SELECT idHome FROM Home WHERE idLandlord = " +
    info.id +
    ");";
  console.log(sql1);
  console.log(sql2);
  console.log(sql3);

  connection.query(sql1, (err, rows, fields) => {
    if (err) throw err;

    connection.query(sql2, (err, rows, fields) => {
      if (err) throw err;

      connection.query(sql3, (err, rows, fields) => {
        if (err) throw err;
        console.log("SUCCESS");
        res.send('"SUCCESS"');
      });
    });
  });
});

module.exports = router;
