const express = require("express");
require("dotenv");
const bodyParser = require("body-parser");
const { City } = require("./src/models/index.js");

const app = express();

const PORT = 8000;

const setUpServer = async () => {
  app.listen(PORT, async () => {
    console.log("Server started at", PORT);
  });

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
};

setUpServer();
