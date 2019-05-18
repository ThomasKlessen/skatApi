const errorResponse = function (req, res, next) {
    const sendError = (err, message) => res.json({
        success: false,
        err: err,
        type: err.type || 'GENERIC',
        msg: message
    })

    res.sendError = sendError
    next();
}

module.exports = errorResponse