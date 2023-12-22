const express = require("express");
const flightController = require("../../controllers/flight-controller.js");
const airportController = require("../../controllers/airportController.js");
const { flightMiddlewares } = require("../../middlewares/index.js");

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

router.post("/airports", airportController.createAirport);
router.get("/airports", airportController.getAirport);
router.get("/airport/all", airportController.getAllAirport);

router.post(
  "/flights",
  flightMiddlewares.validateCreateFlight,
  flightController.create
);

router.get("/flights", flightController.getAll);
router.get("/flights/:id", flightController.get);
router.patch("/flights/:id", flightController.update);
module.exports = router;
