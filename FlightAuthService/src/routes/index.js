const express = require("express");

const v2ApiRoutes = require("./v1/index");
const router = express.Router();

router.use("/v1", v2ApiRoutes);

module.exports = router;
