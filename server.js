const express = require("express");
const app = express();
const mongoose = require('mongoose');
const models = require('./mongoose/models')

mongoose.connect('mongodb://localhost:27017/testing-my-skills')


app.use(express.json())

app.post("/api/create", async (req, res) => {
  const record = req.body;
  console.log(record);
  const one = await models.create(record)
  console.log(one)
});

app.listen(9669, () => {
  console.log("http://localhost:"+9669+'/api/create');
}); 
