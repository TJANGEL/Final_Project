const router = require("express").Router();
const moviesController = require("../controllers/moviesController");

router.route("/loadAllMovies").get(moviesController.loadAllMovies);
router.route("/findAllMovies").get(moviesController.findAll);
router.route("/loadLatest").get(moviesController.loadLatest);
router.route("/:genre").get(moviesController.findByGenre);

module.exports = router;
