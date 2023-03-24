const { Thought, User } = require('../models');

const thoughtController = {
  getAllThoughts: async (req, res) => {
    try {
      const thoughts = await Thought.find({});
      res.json(thoughts);
    } catch (err) {
      res.status(400).json(err);
    }
  },
  getThoughtById: async (req, res) => {
    try {
        const thought = await Thought.findById(req.params.id);
        if (!thought) {
          return res.status(404).json({ message: 'No thought found with this id!' });
        }
        res.json(thought);
      } catch (err) {
        res.status(400).json(err);
      }
    },
    createThought: async (req, res) => {
      try {
        const newThought = await Thought.create(req.body);
        await User.findByIdAndUpdate(
          req.body.userId,
          { $addToSet: { thoughts: newThought._id } },
          { new: true, runValidators: true }
        );
        res.json(newThought);
      } catch (err) {
        res.status(400).json(err);
      }
    },
    updateThought: async (req, res) => {
      try {
        const updatedThought = await Thought.findByIdAndUpdate(req.params.id, req.body, {
          new: true,
          runValidators: true
        });
        if (!updatedThought) {
          return res.status(404).json({ message: 'No thought found with this id!' });
        }
        res.json(updatedThought);
      } catch (err) {
        res.status(400).json(err);
      }
    },
    deleteThought: async (req, res) => {
      try {
        const thought = await Thought.findByIdAndDelete(req.params.id);
        if (!thought) {
          return res.status(404).json({ message: 'No thought found with this id!' });
        }
        await User.findByIdAndUpdate(
          thought.userId,
          { $pull: { thoughts: thought._id } },
          { new: true }
        );
        res.json({ message: 'Thought deleted!' });
      } catch (err) {
        res.status(400).json(err);
      }
    },
    createReaction: async (req, res) => {
        try {
          // Create a reaction object
          const reaction = {
            reactionBody: req.body.reactionBody,
            username: req.body.username,
            createdAt: new Date()
          };
    
          const thought = await Thought.findByIdAndUpdate(
            req.params.thoughtId,
            { $addToSet: { reactions: reaction } },
            { new: true, runValidators: true }
          );
          if (!thought) {
            return res.status(404).json({ message: 'No thought found with this id!' });
          }
          res.json(thought);
        } catch (err) {
          res.status(400).json(err);
        }
      },
      deleteReaction: async (req, res) => {
        try {
          const { thoughtId, reactionId } = req.params;
          const thought = await Thought.findByIdAndUpdate(
            thoughtId,
            { $pull: { reactions: { reactionId } } },
            { new: true }
          );
          if (!thought) {
            return res.status(404).json({ message: 'No thought found with this id!' });
          }
          res.json(thought);
        } catch (err) {
          console.log(err);
          res.status(400).json(err);
        }
      },
    };
  
module.exports = thoughtController;
  
