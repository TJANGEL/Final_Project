const router = require("express").Router();
const titlesController = require("../../controllers/titlesController");

// Matches with "/api/titles"
router
  .route("/")
  .get(titlesController.findAll)
  .post(titlesController.create);

// Matches with "/api/titles/:id"
router
  .route("/:id")
  .get(titlesController.findById)
  .put(titlesController.update)
  .delete(titlesController.remove);

module.exports = router;
