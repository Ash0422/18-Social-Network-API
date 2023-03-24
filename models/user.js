// Require the Schema and model objects from Mongoose
const { Schema, model } = require('mongoose');
// Define the User schema
const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      // The email field must match the pattern of a valid email address
      match: [/.+@.+\..+/, 'Must be a valid email address']
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
    ]
  },
  {// Convert the schema to JSON using virtuals
    toJSON: {
      virtuals: true
    },
    id: false
  }
);
// Define a virtual for the friendCount field
UserSchema.virtual('friendCount').get(function () {
    // Return the length of the friends array
  return this.friends.length;
});
// Create a User model using the User schema
const User = model('User', UserSchema);
// Export the User model
module.exports = User;
