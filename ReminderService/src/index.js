const express = require("express");

const { PORT } = require("./config/serverConfig");
const TicketController = require("./controllers/ticketCotroller");
const bodyParser = require("body-parser");
const emailService = require("./service/emailService");
const { createChannel } = require("./utils/messageQueue");

const setupJobs = require("./utils/job");

const setUpServer = async () => {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  const channel = await createChannel();
  app.post("/api/v1/tickets", TicketController.createController);

  app.listen(PORT, async () => {
    console.log(`Server has started ${PORT}`);
    setupJobs();
  });
};
setUpServer();
