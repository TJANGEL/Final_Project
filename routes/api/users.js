const router = require("express").Router();
const userController = require("../../controllers/userController");

router
.route("/login")
.post(userController.read);

router
.route("/register")
.post(userController.create);

module.exports = router;