// const express = require('express');
const debug = require('debug')('todos:server');
const app = require('./app');
const { PORT } = require('./config');
const { databaseConnection } = require('./database');

// const app = express();

const StartServer = async () => {
    await databaseConnection();

    app.listen(PORT, () => {
        debug(`Listening on port ${PORT}`);
    }).on('error', (err) => {
        debug(err);
        process.exit();
    });
};

StartServer();
