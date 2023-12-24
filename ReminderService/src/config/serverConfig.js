const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  PORT: process.env.PORT,
  EMAIL_ID: process.env.EMAILID,
  EMAIL_PASS: process.env.EMAILPASS,
  EXCHANGE_NAME: process.env.EXCHANGE_NAME,
  REMINDER_BINDING_KEY: process.env.REMINDER_BINDING_KEY,
  MESSSAGE_BROKER_URL: process.env.MESSSAGE_BROKER_URL,
};
