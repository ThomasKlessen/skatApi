const errorResponse = function (req, res, next) {
    const sendError = err => res.json({
        success: false,
        err: err,
        type: err.type || 'GENERIC'
    })

    res.sendError = sendError
    next();
}

module.exports = errorResponse