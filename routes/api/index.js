const router = require("express").Router();
const movieRoutes = require("./movies");
const userRoutes = require("./users");

router.use("/", movieRoutes);
router.use("/user", userRoutes);

module.exports = router;
