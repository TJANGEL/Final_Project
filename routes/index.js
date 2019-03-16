const path = require("path");
const router = require("express").Router();
const userRoutes = require("./api");
const movieRoutes = require("./movieRoutes");

// API Routes
router.use("/user", userRoutes);
router.use("/movies", movieRoutes);

// If no API routes are hit, send the React app
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;

