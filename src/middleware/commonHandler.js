const defaultHandler = function (req, res, next) {
    const sendJson = data => res.json({
        success: true,
        data
    })
    const sendError = err => res.json({
        success: false,
        err: err.message,
        type: err.type
    })

    res.sendJson = sendJson
    res.sendError = sendError
    next();
}

const handle404 = function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
}

const defaultError = function(err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.sendError(res.locals)
}

module.exports = {
    defaultHandler,
    defaultError,
    handle404
}