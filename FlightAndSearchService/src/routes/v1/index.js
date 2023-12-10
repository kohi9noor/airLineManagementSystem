const express = require("express");
const FlightController = require("../../controllers/flight-controller.js");

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
router.post("/flights", FlightController);
module.exports = router;
