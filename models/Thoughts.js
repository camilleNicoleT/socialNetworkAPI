const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ReactionSchema = new Schema(
  {
     // set custom id to avoid confusion with parent thought _id
     reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
    },
    reactionBody: {
      type: String,
      required: true,
      trim: true,
      validate: [({ length }) => length <= 280, 'Text cannot go over 280 characters.']
    },
    username: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: createdAtVal => dateFormat(createdAtVal)
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
);

const ThoughtSchema = new Schema({
  
  thoughtText: {
    type: String,
    required: true,
      trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: createdAtVal => dateFormat(createdAtVal)
  },
  username: {
    type: String,
    required: true
  },
  reactions: [ReactionSchema]
},
  {
    toJSON: {
      virtuals: true,
      getters: true
    }
});
// get total count of thoughts and replies on retrieval
ThoughtSchema.virtual('reactionCount').get(function() {
  return this.reaction.length;
});
const Thought = model('thought', ThoughtSchema);

module.exports = hought;