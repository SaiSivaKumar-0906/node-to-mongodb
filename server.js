const express = require("express");
const path = require("path");
const app = express();
const mongoose = require('mongoose');
const schema = require('./mongoose/send')

console.log(schema)

mongoose.connect('mongodb://localhost/to-do-list')

app.use(express.json())

app.use("/front", express.static(path.resolve(__dirname, "front")));


app.post("/api/create", async (req, res) => {
  const record = req.body;
  console.log(record);

  console.log(response);

  res.json({ status: "ok" });
});

app.listen(9669, () => {
  console.log("http://localhost:"+9669);
});