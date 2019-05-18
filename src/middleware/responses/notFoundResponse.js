const notFoundResponse = function(req, res) {
    const err = {
        message: 'Route nicht gefunden',
        status: 404
    };
    res.sendError(err)
}

module.exports = notFoundResponse