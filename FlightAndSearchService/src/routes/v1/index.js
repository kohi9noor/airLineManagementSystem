const expres = require("express");

const {
  create,
  update,
  destroy,
  get,
} = require("../../controllers/city-controller.js");

const router = expres.Router();

router.post("/city", create);
router.get("/city/:id", get);
router.delete("/city/:id", destroy);
router.patch("/city/:id", update);

module.exports = router;
