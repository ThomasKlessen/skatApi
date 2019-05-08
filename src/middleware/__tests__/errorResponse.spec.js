it('should add sendError to response', () => {
    const testData = {}
    defaultHandler(req, res, next)
    expect(next).toBeCalled()
    expect(res.sendError).toBeDefined()
    res.sendError(testData)
    expect(res.json).toBeCalled()
})