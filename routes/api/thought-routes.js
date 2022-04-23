const router = require('express').Router();
const {
  addThought,
  removeThought,
  addReaction,
  removeReaction,
  getAllThoughts,
  getThoughtsById,
  updateThought
  
} = require('../../controller/thought-controller');

// /api/Thoughts/<UserId>
router.route('/')
.get(getAllThoughts)
.post(addThought);

// /api/Thoughts/<Id>
router
  .route('/:thoughtId')
  .get(getThoughtsById)
  .put(updateThought)
  .delete(removeThought);

router.route(('/:thoughtId/reactions'))
.post(addReaction)

// /api/Thoughts/<UserId>/<ThoughtId>/<replyId>
router.route('/:thoughtId/:reactionId')
.delete(removeReaction);

module.exports = router;
