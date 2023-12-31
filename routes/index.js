const router = require('express').Router();
const usersRoutes = require('./users');
const moviesRoutes = require('./movies');
const signup = require('./signup');
const login = require('./signin');
const auth = require('../middlewares/auth');
const NotFoundError = require('../errors/NotFoundError');

router.use('/signup', signup);
router.use('/signin', login);
router.use(auth);
router.use('/users', usersRoutes);
router.use('/movies', moviesRoutes);

router.use('*', (req, res, next) => {
  next(new NotFoundError('Страница не найдена'));
});

module.exports = router;
