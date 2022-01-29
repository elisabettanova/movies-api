const Movie = require('../models/Movie');
const ErrorResponse = require('../utils/errorResponse');

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

exports.getByCategory = (req, res, next) => {}
exports.searchByTitle = (req, res, next) => {}
exports.getMovieById = (req, res, next) => {}