const express = require('express');
const HandleErrors = require('./utils/error-handler');

const app = express();

// error handling
app.use(HandleErrors);

module.exports = app;
