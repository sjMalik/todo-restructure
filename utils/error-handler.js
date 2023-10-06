/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
/* eslint-disable class-methods-use-this */
const { createLogger, transports } = require('winston');
const debug = require('debug')('todos:logger');
const { AppError } = require('./app-error');

const LogErrors = createLogger({
    transports: [
        new transports.Console(),
        new transports.File({ filename: 'app_error.log' }),
    ],
});

class ErrorLogger {
    async logError(err) {
        debug('=========================== Start Error Logger ==================');
        LogErrors.log({
            private: true,
            level: 'error',
            message: `${new Date()}-${JSON.stringify(err)}`,
        });
        debug('========================= End Error Logger =======================');
        return false;
    }

    isTrustError(error) {
        if (error instanceof AppError) {
            return error.isOperational;
        }
        return false;
    }
}

const ErrorHandler = async (err, req, res, next) => {
    const errorLogger = new ErrorLogger();

    process.on('uncaughtException', (reason, promise) => {
        debug(reason, 'UNHANDLED');
        throw reason;
    });

    process.on('uncaughtException', (error) => {
        errorLogger.logError(error);
        if (errorLogger.isTrustError(err)) {
            // process exist, need restart
        }
    });

    if (err) {
        await errorLogger.logError(err);
        if (errorLogger.isTrustError(err)) {
            if (err.errorStack) {
                const errorDescription = err.errorStack;
                return res.status(err.statusCode).json({ message: errorDescription });
            }
            return res.status(err.statusCode).json({ message: err.message });
        }
        // process exit // terriablly wrong with flow need restart

        return res.status(err.statusCode).json({ message: err.message });
    }
    next();
};

module.exports = ErrorHandler;
