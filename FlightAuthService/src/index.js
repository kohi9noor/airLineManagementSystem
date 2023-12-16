const express = require("express");
const { PORT, JWT_KEY } = require("./config/serverConfig");
const bodyParser = require("body-parser");
const app = express();
const apiRoutes = require("./routes/index");
const userService = require("./services/userServices");

const prepareAndStartServer = () => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use("/api", apiRoutes);

  app.listen(PORT, async () => {
    console.log("Server has started", PORT);
  });
};

prepareAndStartServer();
