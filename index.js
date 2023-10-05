const express = require('express');
const debug = require('debug')('todos:server');
const { PORT } = require('./config');

const app = express();

app.listen(PORT, () => {
    debug(`Listening on port ${PORT}`);
}).on('error', (err) => {
    debug(err);
    process.exit();
});
