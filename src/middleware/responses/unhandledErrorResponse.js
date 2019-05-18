const unhandledErrorResponse = function(err, req, res) {
    console.log('unhandled Error called')
    const message = err.message;
    const error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.json({error, message})
}

module.exports = unhandledErrorResponse