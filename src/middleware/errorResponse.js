const errorResponse = function (req, res, next) {
    const sendError = err => res.json({
        success: false,
        err: err.message,
        type: err.type
    })

    res.sendError = sendError
    next();
}

module.exports = errorResponse