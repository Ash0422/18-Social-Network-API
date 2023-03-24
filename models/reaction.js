// Require the Schema object from Mongoose
const { Schema } = require('mongoose');
// Define the Reaction schema
const ReactionSchema = new Schema(
    {
      reactionBody: {
        type: String,
        required: true,
        maxlength: 280
      },
      username: {
        type: String,
        required: true
      },
      createdAt: {
        type: Date,
        default: Date.now,
         // The getter function returns the date in a local string format
        get: (timestamp) => new Date(timestamp).toLocaleString()
      }
    },
    {
        // Convert the schema to JSON using the getters
      toJSON: {
        getters: true
      },
      id: false
    }
);
  
// Export the Reaction schema
module.exports = ReactionSchema;
