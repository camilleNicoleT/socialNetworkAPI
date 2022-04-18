const router = require('express').Router();
const {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriends,
  removeFriend
} = require('../../controller/user-controller');

// /api/Users
router
  .route('/')
  .get(getAllUser)
  .post(createUser);

// /api/Users/:id
router
  .route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

router.route('/:userId/friends/:friendId')
.post(addFriends)
.delete(removeFriend);

module.exports = router;
