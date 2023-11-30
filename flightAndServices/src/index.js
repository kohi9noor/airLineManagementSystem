const express = require("express");
const bodyParser = require("body-parser");

const ApiRoutes = require("./routes/index.js");
const PORT = 8000;

const setupAndStartServer = async () => {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/api", ApiRoutes);

  app.listen(PORT, async () => {
    console.log(`Server has been started at ${PORT}`);
  });
};

setupAndStartServer();
