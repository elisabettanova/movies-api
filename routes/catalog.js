const express = require("express");
const router = express.Router();

const catalogController = require("../controllers/catalog");

router.get("/", catalogController.getAllMovies);
router.get("/id/:id", catalogController.getMovieById);
router.get("/categories/:category", catalogController.getByCategory);
router.get("/titles/search", catalogController.searchByTitle);

module.exports = router;
