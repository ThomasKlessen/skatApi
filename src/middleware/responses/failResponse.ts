const failResponse = function (req:any, res: any, next: any) {
    const sendError = (err: Error) => res.json({
        success: false,
        err: err.message
    })

    res.sendError = sendError
    next();
}

export default failResponse