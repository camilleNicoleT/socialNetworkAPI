const { Schema, model } = require('mongoose');


// Define your schema as normal.
const UserSchema = new Schema({

    username: { 
      type: String, 
      unique: true,
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
    virtuals: true
  },
  id: false
});


// get total count of friends on retrieval
UserSchema.virtual('friendCount').get(function() {
  return this.friends.length;
});

  // create the user model using the UserSchema
const User = model('User', UserSchema);

// export the User model
module.exports = User;