const express = require("express");
const path = require("path");
const app = express();
const mongoose = require('mongoose');
const bodyParser = require("body-parser");

mongoose.connect('mongodb://localhost/to-do-list')

app.use("/front", express.static(path.resolve(__dirname, "front")));


app.use(bodyParser.json());

app.post("/api/create", async (req, res) => {
  const record = req.body;
  console.log(record);

  console.log(response);

  res.json({ status: "ok" });
});

app.listen(1900, () => {
  console.log("Server up");
});