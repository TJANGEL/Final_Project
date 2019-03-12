const router = require("express").Router();
const titleRoutes = require("./titles");
const userRoutes = require("./users");

// Book routes
router.use("/titles", titleRoutes);
router.use("/user", userRoutes);

module.exports = router;
