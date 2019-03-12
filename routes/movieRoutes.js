const router = require("express").Router();
const moviesController = require("../controllers/moviesController");

// // Matches with "/api/titles"
// router
//   .route("/")
//   .get(moviesController.findAll)
//   .post(moviesController.create);

// router.route("/loadMovies").get(moviesController.loadAllMovies);
router.route("/loadAllMovies").get(moviesController.loadAllMovies);
router.route("/findAllMovies").get(moviesController.findAll);
router.route("/loadLatest").get(moviesController.loadLatest);
router.route("/:genre").get(moviesController.findByGenre);

// Matches with "/api/titles/:id"
// router
//   .route("/:id")
//   .get(moviesController.findById)
//   .put(moviesController.update)
//   .delete(moviesController.remove);

module.exports = router;
