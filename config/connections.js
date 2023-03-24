const mongoose = require('mongoose');
require('dotenv').config();
// Enable strict mode for query operations
mongoose.set('strictQuery', true);
// Connect to MongoDB database
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/SocialMediaDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
// Log a message to the console when the connection to MongoDB is successful
mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});
// Log an error message to the console if there is an error connecting to MongoDB
mongoose.connection.on('error', (err) => {
  console.error(`Error connecting to MongoDB: ${err}`);
});
// Export the Mongoose library as a module
module.exports = mongoose;


