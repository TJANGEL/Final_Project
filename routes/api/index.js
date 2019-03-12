const router = require("express").Router();
const movieRoutes = require("./movies");

// Movie routes
// router.use("/movies", movieRoutes);
router.use("/", movieRoutes);

module.exports = router;
