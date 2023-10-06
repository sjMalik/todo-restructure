// eslint-disable-next-line import/no-extraneous-dependencies
const mongoose = require('mongoose');
const debug = require('debug')('todos:dbconnection');
const { DB_URL } = require('../config');

module.exports = async () => {
    try {
        await mongoose.connect(DB_URL, {
            useNewUrlParser: true,
        });
        debug('MongoDB connected');
    } catch (e) {
        debug(e);
        process.exit(1);
    }
};
