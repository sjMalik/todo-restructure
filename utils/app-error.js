/* eslint-disable default-param-last */
/* eslint-disable max-classes-per-file */
const STATUS_CODE = {
    OK: 200,
    BAD_REQUEST: 400,
    UN_AUTHORIZED: 403,
    NOT_FOUND: 404,
    INTERNAL_ERROR: 500,
};

class AppError extends Error {
    constructor(
        name,
        statusCode,
        description,
        isOperational,
        errorStack,
        loginErrorResponse,
    ) {
        super(description);
        Object.setPrototypeOf(this, new.target.prototype);
        this.name = name;
        this.statusCode = statusCode;
        this.description = description;
        this.isOperational = isOperational;
        this.errorStack = errorStack;
        this.loginErrorResponse = loginErrorResponse;
    }
}

// api specific errors
class APIError extends AppError {
    constructor(
        name,
        statusCode = STATUS_CODE.INTERNAL_ERROR,
        description = 'Internal Server Error',
        isOperational = true,
    ) {
        super(name, statusCode, description, isOperational);
    }
}

// 400
class BadRequestError extends AppError {
    constructor(description = 'Bad Request', loginErrorResponse) {
        super(
            'NOT FOUND',
            STATUS_CODE.BAD_REQUEST,
            description,
            true,
            false,
            loginErrorResponse,
        );
    }
}

// 400
class ValidationError extends Error {
    constructor(description = 'Validation Error', errorStack) {
        super(
            'BAD REQUEST',
            STATUS_CODE.BAD_REQUEST,
            description,
            true,
            errorStack,
        );
    }
}

module.exports = {
    AppError,
    APIError,
    BadRequestError,
    ValidationError,
    STATUS_CODE,
};
