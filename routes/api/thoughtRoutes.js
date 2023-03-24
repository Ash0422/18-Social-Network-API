// Require the express library
const router = require('express').Router();
// Require the thought controller functions
const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction
} = require('../../controllers/thoughtController');
// Route for getting all thoughts
router.route('/')
  .get(getAllThoughts)
  .post(createThought);
// Route for getting a thought by ID
router.route('/:id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);
// Route for creating a reaction
router.route('/:thoughtId/reactions')
  .post(createReaction);
// Route for deleting a reaction
router.route('/:thoughtId/reactions/:reactionId')
  .delete(deleteReaction);
// Export the router
module.exports = router;
