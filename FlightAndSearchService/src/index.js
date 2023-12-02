const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./config/db.js");
const ApiRoutes = require("./routes/index.js");
const setupServer = async () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use("/api", ApiRoutes);
  app.listen(PORT, () => {
    console.log(`Server has started at ${PORT}`);
  });
};

setupServer();
