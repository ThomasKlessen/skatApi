const next = jest.fn()
const handle404 = require('../notFoundResponse')
const mockRes = {
    sendError: jest.fn()
}

describe('404Response', () => {
    it('should call next with 404 status error', () => {
        handle404(null, mockRes, next)
        expect(mockRes.sendError).toBeCalled()
    })
})