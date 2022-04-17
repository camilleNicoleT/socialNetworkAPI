const router = require('express').Router();
const {
  addThought,
  removeThought,
  addReaction,
  removeReaction
} = require('../../controllers/Thought-controller');

// /api/Thoughts/<UserId>
router.route('/:UserId').post(addThought);

// /api/Thoughts/<UserId>/<ThoughtId>
router
  .route('/:UserId/:ThoughtId')
  .put(addReaction)
  .delete(removeThought);

// /api/Thoughts/<UserId>/<ThoughtId>/<replyId>
router.route('/:UserId/:ThoughtId/:ReactionId').delete(removeReaction);

module.exports = router;
