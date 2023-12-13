const express = require("express");
const flightController = require("../../controllers/flight-controller.js");
const airportController = require("../../controllers/airportController.js");
const {
  create,
  update,
  destroy,
  get,
  getAll,
} = require("../../controllers/city-controller.js");

const router = express.Router();

router.post("/city", create);
router.get("/city/:id", get);
router.delete("/city/:id", destroy);
router.patch("/city/:id", update);
router.get("/city", getAll);
router.post("/flights", flightController.create);
router.get("/flights", flightController.getAll);
router.post("/airports", airportController.createAirport);
module.exports = router;
