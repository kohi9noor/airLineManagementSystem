const express = require("express");
const UserController = require("../../controllers/userController");
const { AuthReqVali } = require("../../middlewares/index");
const router = express.Router();

router.post("/signup", AuthReqVali.validateUserAuth, UserController.create);
router.post("/signin", AuthReqVali.validateUserAuth, UserController.signIn);
router.get("/isAuthenticated", UserController.isAuthenticated);
router.get("dummy", (req, res) => {
  return res.status(200).json({
    message: "OK",
  });
});
module.exports = router;
