//import express and initialize an instance of the express server
const express = require("express");
const app = express();
const colorsController = require("./controllers/colorsController");

//import cors
const cors = require("cors");

//middlewear/middleman
app.use(cors());
app.use(express.json());
app.use("/colors", colorsController);

//send a msg
app.get("/", (req, res) => {
  res.send("welcome to colors app");
});

module.exports = app;
