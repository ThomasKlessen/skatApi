const defaultHandler = function (req, res, next) {
    const sendJson = data => res.json(data)
    const sendError = err => res.status(500).json(err)

    res.sendJson = sendJson
    res.sendError = sendError
    next();
}

module.exports = defaultHandler