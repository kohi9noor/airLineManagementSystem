const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  PORT: process.env.PORT,
  SYNC_DB: process.env.SYNC_DB,
  FLIGHT_SERVICE_PATH: process.env.FLIGHT_SERVICE_PATH,
};
