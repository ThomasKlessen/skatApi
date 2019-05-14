const errorResponse = function(err:any, req:any, res:any) {
    const message = err.message;
    const error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.sendError({error, message})
}

export default errorResponse