const successResponse = function (req:any, res:any, next:any) {
    const sendJson = (data:any) => res.json({
        success: true,
        data
    })

    res.sendJson = sendJson
    next();
}

export default successResponse