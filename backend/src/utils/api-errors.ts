/* eslint-disable max-classes-per-file */
class APIError extends Error {
    status: number;
    message: string;
    data: any

    constructor(status: number, message: string, data: any = undefined) {
        super();
        this.status = status;
        this.message = message;
        this.data = data;
    }
}

class BadRequestError extends APIError {
    constructor(message = 'Bad Request', data: any = undefined) {
        super(400, message, data);
    }
}

class AccessDeniedError extends APIError {
    constructor(message = 'Access denied') {
        super(401, message);
    }
}

class UnauthorizedError extends APIError {
    constructor(message = 'Unauthorized') {
        super(403, message);
    }
}

class ForbiddenError extends APIError {
    constructor(message = 'Forbidden') {
        super(403, message);
    }
}

class NotFoundError extends APIError {
    constructor(message = 'Not Found') {
        super(404, message);
    }
}

class MethodNotAllowedError extends APIError {
    constructor(message = 'Method Not Allowed') {
        super(405, message);
    }
}

class ConflictError extends APIError {
    constructor(message = 'Conflict') {
        super(409, message);
    }
}

class UnSupportedMediaTypeError extends APIError {
    constructor(message = 'Unsupported Media Type') {
        super(415, message);
    }
}

class UnProcessableEntityError extends APIError {
    constructor(message = 'Unprocessable Entity') {
        super(422, message);
    }
}

class InternalServerError extends APIError {
    constructor(message = 'Internal Server Error') {
        super(500, message);
    }
}

export {
    APIError,
    ConflictError,
    ForbiddenError,
    NotFoundError,
    BadRequestError,
    UnauthorizedError,
    AccessDeniedError,
    InternalServerError,
    MethodNotAllowedError,
    UnProcessableEntityError,
    UnSupportedMediaTypeError
};