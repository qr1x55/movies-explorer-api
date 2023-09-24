const router = require('express').Router();
const {
  getUserValid,
  userInfoValid,
} = require('../middlewares/routesValidators');

const {
  getUsers, getUserById, editUserInfo, getMe,
} = require('../controllers/users');

router.get('/', getUsers);

router.get('/me', getMe);

router.get('/:userId', getUserValid, getUserById);

router.patch('/me', userInfoValid, editUserInfo);

module.exports = router;
