const express = require("express");
const { PORT } = require("./config/configDB");
const bodyParser = require("body-parser");
const app = express();
const db = require("./models/index");
const apiRoutes = require("./routes/index");
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", apiRoutes);
const setServer = async () => {
  app.listen(PORT, () => {
    console.log("Server has started", PORT);
  });
  if (process.env.DB_SYNC) {
    db.sequelize.sync({ alert: true });
  }
};

setServer();
