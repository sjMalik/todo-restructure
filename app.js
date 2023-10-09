const express = require('express');
const HandleErrors = require('./utils/error-handler');
const { todos } = require('./routes');

const app = express();

app.use('/', (req, res, next) => {
    try {
        throw new Error('testing the winston');
    } catch (e) {
        next(e);
    }
});

// APIs
todos(app);

// error handling
app.use(HandleErrors);

module.exports = app;
