const express = require('express');
const app = express();

// Import routes
const routes = require('./routes/index.JS');

// Use routes
app.use('/api', routes);

module.exports = app;
