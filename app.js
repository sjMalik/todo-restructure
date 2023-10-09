const express = require('express');
const HandleErrors = require('./utils/error-handler');
const { todos } = require('./routes');

const app = express();

// APIs
todos(app);

// error handling
app.use(HandleErrors);

module.exports = app;
