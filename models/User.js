const { Schema, model } = require('mongoose');


// Define your schema as normal.
var userSchema = new Schema({
    username: { 
      type: String, 
      required: true, 
      unique: true
    },
    email: { 
      type: String,
      unique: true,
      match: [/.+@.+\..+/, 'Please enter a valid e-mail address']
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought'
      }
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    ],
},
{
  toJSON: {
    virtuals: true,
    getters: true
  },
  id: false
});


// get total count of comments and replies on retrieval
userSchema.virtual('friendCount').get(function() {
  return this.friends.length;
});

  // create the user model using the UserSchema
const User = model('User', UserSchema);

// export the Pizza model
module.exports = Pizza;