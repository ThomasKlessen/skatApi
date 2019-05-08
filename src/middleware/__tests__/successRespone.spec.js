
const req = {
    app: {
        get: jest.fn()
    }
}
const mockDefaultError = {
    status: 501
}
const res = {
    json: jest.fn(),
    locals: {
        error: {}
    },
    status: jest.fn()
}
const next = jest.fn()

it('should add sendJson to response', () => {
    const testData = {}
    defaultHandler(req, res, next)
    expect(next).toBeCalled()
    expect(res.sendJson).toBeDefined()
    res.sendJson(testData)
    expect(res.json).toBeCalled()
})