const express = require("express");

const {
  create,
  destroy,
  get,
  uppate,
  getAll,
} = require("../../controllers/city-controller.js");

const router = express.Router();

router.post("/city", create);
router.delete("/city/:id", destroy);
router.get("/city/:id", get);
router.get("/city", getAll);
router.patch("/city/:id", uppate);

module.exports = router;
