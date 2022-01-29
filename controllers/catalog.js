const Movie = require("../models/Movie");
const ErrorResponse = require("../utils/errorResponse");

//@acces public
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

//@acces public
exports.getByCategory = (req, res, next) => {};

//@acces public
exports.searchByTitle = (req, res, next) => {};

//@acces public
exports.getMovieById = (req, res, next) => {};
