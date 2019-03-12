const router = require("express").Router();
const userController = require("../../controllers/userController");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");

// Validate input?
// router.method('/favorites', passport.authenticate('jwt', {session: false}), (req,res) => ... );
router
.route("/login")
.post(userController.read);

router
.route("/register")
.post(userController.create);

module.exports = router;