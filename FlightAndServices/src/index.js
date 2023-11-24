import express from "express";
import "dotenv/config";
import bodyParser from "body-parser";
const app = express();
const PORT = process.env.PORT || 3000;

const setupServer = async () => {
  // create a http server

  app.listen(PORT, () => console.log(`Server is started on ${PORT}`));

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
};

setupServer();
