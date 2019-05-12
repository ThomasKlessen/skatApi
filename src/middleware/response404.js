const handle404 = function(req, res, next) {
    const err = {
        message: 'Route nicht gefunden'
    };
    err.status = 404;
    next(err);
}

module.exports = handle404