const express = require('express');
const HandleErrors = require('./utils/error-handler');

const app = express();

app.use('/', (req, res, next) => {
    try {
        throw new Error('testing the winston');
    } catch (e) {
        next(e);
    }
});

// error handling
app.use(HandleErrors);

module.exports = app;
