const express = require("express");
const router = express.Router();
const connection = require("../config/dbConfig");

router.post("/", (req, res) => {
  connection.connect();
  let info = req.body;
  const sql =
    "SELECT * FROM HomeRental.Home WHERE Address LIKE '" +
    info.search +
    "%' OR City LIKE '" +
    info.search +
    "%'  OR County LIKE '" +
    info.search +
    "%' ";

  connection.query(sql, (err, rows, fields) => {
    if (err) throw err;

    res.send(rows);
  });
});

module.exports = router;
