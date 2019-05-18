const req = {}
const res = {
    json: jest.fn()
}
const next = jest.fn()

const successResponse = require('../successResponse')

it('should add sendJson to response', () => {
    const testData = {}
    successResponse(req, res, next)
    expect(next).toBeCalled()
    expect(res.sendJson).toBeDefined()
    res.sendJson(testData)
    expect(res.json).toBeCalled()
})