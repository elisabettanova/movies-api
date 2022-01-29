const Movie = require("../models/Movie");
const ErrorResponse = require("../utils/errorResponse");

//@access public
exports.getAllMovies = (req, res, next) => {
  Movie.find()
    .then((movies) =>
      res.status(200).json({
        success: true,
        movies,
      })
    )
    .catch((error) => next(error));
};

//@access public
exports.getByCategory = (req, res, next) => {};

//@access public
exports.searchByTitle = (req, res, next) => {};

//@access public
exports.getMovieById = (req, res, next) => {};
