// Require the express library
const router = require('express').Router();
// Require the user routes and thought routes
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');
// Use the user routes with a prefix of /users
router.use('/users', userRoutes);
// Use the thought routes with a prefix of /thoughts
router.use('/thoughts', thoughtRoutes);
// Export the router
module.exports = router;
