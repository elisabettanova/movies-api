const Movie = require("../models/movie");
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
exports.getByCategory = (req, res, next) => {
  Movie.find({ category: { $regex: req.params.category, $options: "i" } })
    .then((movies) =>
      res.status(200).json({
        success: true,
        movies,
      })
    )
    .catch((error) => next(error));
};

//@access public
exports.searchByTitle = (req, res, next) => {
  Movie.find({ title: { $regex: req.body.title, $options: "i" } })
    .then((movies) =>
      res.status(200).json({
        success: true,
        movies,
      })
    )
    .catch((error) => next(error));
};

//@access public
exports.getMovieById = (req, res, next) => {
  Movie.find({ _id: req.params.id })
    .then((movies) =>
      res.status(200).json({
        success: true,
        movies,
      })
    )
    .catch((error) => next(error));
};
