const errorCodes = [
    'DB_ERROR',
    'CREDENTIALS_NOT_VALID',
]

module.exports = errorCodes.reduce((errorObject, errorCode) => {
    errorObject[errorCode] = errorCode
    return errorObject
}, {})