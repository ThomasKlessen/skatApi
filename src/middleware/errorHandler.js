const errorHandler = function(err, req, res) {
    const message = err.message;
    const error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.sendError({error, message})
}

module.exports = errorHandler