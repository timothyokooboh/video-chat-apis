const router = require("express").Router();

const authController = require("../controllers/AuthController");

router
.route("/")
.post(authController.findUser, authController.createUser);

module.exports = router;