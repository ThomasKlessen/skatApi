const handle404 = function(req:any, res:any, next:any) {
    const err = {
        message: 'Route nicht gefunden',
        status: 404
    };
    next(err);
}

export default handle404