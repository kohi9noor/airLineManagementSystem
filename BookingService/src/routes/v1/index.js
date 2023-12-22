const express = require("express");

const { BookingController } = require("../../controllers/index");

const router = express.Router();

router.post("/bookings", BookingController.create);
router.delete("/bookings/:id", BookingController.destroy);
module.exports = router;
