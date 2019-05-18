class ApiError extends Error {
    constructor(msg) {
        super()
        Error.captureStackTrace(this, this.constructor)
        this.type = 'ApiError'
        this.code = msg
        this.stackTrace = this.stack
    }
}

module.exports = ApiError