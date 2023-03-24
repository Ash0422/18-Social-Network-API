// Require the Schema and model objects from Mongoose
const { Schema, model } = require('mongoose');
// Require the Reaction schema
const ReactionSchema = require('./Reaction');
// Define the Thought schema
const ThoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => new Date(timestamp).toLocaleString()
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
    },
    id: false
  }
);
// Define a virtual for the reactionCount field
ThoughtSchema.virtual('reactionCount').get(function () {
    // Return the length of the reactions array
  return this.reactions.length;
});
// Create a Thought model using the Thought schema
const Thought = model('Thought', ThoughtSchema);
// Export the Thought model
module.exports = Thought;
