const express = require("express");
const router = express.Router();
const connection = require("../config/dbConfig");

router.post("/", (req, res) => {
  connection.connect();

  let info = req.body;
  console.log(info);

  const sql = "DELETE FROM Home WHERE Home.idHome= '" + info.id + "'";
  console.log(sql);

  connection.query(sql, (err, rows, fields) => {
    if (err) throw err;
    console.log(rows);
    console.log("SUCCESS");
    res.send('"SUCCESS"');
  });
});

module.exports = router;
