const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  PORT: process.env.PORT,
  EMAIL_ID: process.env.EMAILID,
  EMAIL_PASS: process.env.EMAILPASS,
};
