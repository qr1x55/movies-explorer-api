const router = require('express').Router();
const { addMovie, getMovies, deleteMovie } = require('../controllers/movies');
const { addMovieValid, movieIdValid } = require('../middlewares/routesValidators');

router.get('/', getMovies);

router.post('/', addMovieValid, addMovie);

router.delete('/:movieId', movieIdValid, deleteMovie);

module.exports = router;
