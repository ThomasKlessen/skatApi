const req = {}
const res = {
    json: jest.fn()
}
const next = jest.fn()

const errorResponse = require('../failResponse')

it('should add sendJson to response', () => {
    const testData = {}
    errorResponse(req, res, next)
    expect(next).toBeCalled()
    expect(res.sendError).toBeDefined()
    res.sendError(testData)
    expect(res.json).toBeCalled()
})