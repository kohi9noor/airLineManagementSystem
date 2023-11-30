const express = require("express");
const bodyParser = require("body-parser");
const db = require("./models/index");
const ApiRoutes = require("./routes/index.js");
const sequelize = require("sequelize");
const PORT = 8000;
const { City, Airport } = require("./models/index");
const airport = require("./models/airport");
const setupAndStartServer = async () => {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/api", ApiRoutes);

  app.listen(PORT, async () => {
    console.log(`Server has been started at ${PORT}`);
  });
  if (process.env.SYNC_DB) {
    db.sequelize.sync({ alter: true });
  }
};

setupAndStartServer();
