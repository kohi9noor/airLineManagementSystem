const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./config/db.js");
const ApiRoutes = require("./routes/index.js");
const { Airport, City } = require("./models/index.js");
const setupServer = async () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use("/api", ApiRoutes);
  app.listen(PORT, async () => {
    console.log(`Server is started now ${PORT}`);
  });
};

setupServer();
