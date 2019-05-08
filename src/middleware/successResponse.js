const successResponse = function (req, res, next) {
    const sendJson = data => res.json({
        success: true,
        data
    })

    res.sendJson = sendJson
    next();
}

module.exports = successResponse