// Require the express library
const router = require('express').Router();
// Require the API routes
const apiRoutes = require('./api');
// Use the API routes with a prefix of /api
router.use('/api', apiRoutes);
// Export the router
module.exports = router;

