// Require the express library
const router = require('express').Router();
// Require the user controller functions
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend
} = require('../../controllers/userController');
// Route for getting all users
router.route('/')
  .get(getAllUsers)
  .post(createUser);
// Route for getting a user by ID
router.route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);
// Route for adding a friend to a user
router.route('/:userId/friends/:friendId')
  .post(addFriend)
  .delete(removeFriend);
// Export the router
module.exports = router;
