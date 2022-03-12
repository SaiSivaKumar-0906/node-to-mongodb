const express = require("express");
const app = express();
const mongoose = require('mongoose');
const models = require('./mongoose/models')


mongoose.connect('mongodb://localhost/to-do-list')

app.use(express.json())

app.post("/api/create", async (req, res) => {
  const record = req.body;
  console.log(record);
  let two = models.create(record)
  console.log(two)
});

app.listen(9669, () => {
  console.log("http://localhost:"+9669);
}); 
