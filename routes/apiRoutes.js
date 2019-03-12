const path = require("path");
const router = require("express").Router();
// const apiRoutes = require("./api");
// const movies = require("./api/movies");

// API Routes
// router.use("/api", apiRoutes);

// router.use("/", apiRoutes);
router.use("/", (req, resp) => {
  console.log("Hello")
  resp.json("Hello from Controller 2");
})



module.exports = router;

