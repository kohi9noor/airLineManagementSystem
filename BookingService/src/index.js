const express = require("express");
const { PORT } = require("./config/configDB");
const bodyParser = require("body-parser");
const app = express();
const db = require("./models/index");
const axios = require("axios");
const apiRoutes = require("./routes/index");
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/bookingservice/api/v1/home", (req, res) => {
  return res.json({ message: "OK" });
});

// app.use("/bookings/api", apiRoutes);

app.use("/bookingservice/api", apiRoutes);

const setServer = async () => {
  app.listen(PORT, () => {
    console.log("Server has started", PORT);
  });
};

setServer();
