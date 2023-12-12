//This file configures and sets up your Express server, including middleware, routing, and error handling
//Import app.use from required files
const bodyParser = require('body-parser');
const router = require('./routes/Api');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Allow cross-origin requests
app.use(cors());

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

app.use(router)
const port = process.env.PORT || 3001;

// Connect to the local MongoDB database
mongoose.connect('mongodb://localhost:27017/library_management', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Check for a successful database connection
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to the local MongoDB database');
});

// Other middleware and routes go here
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

