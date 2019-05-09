const req = {
    app: {
        get: jest.fn()
    }
}
const mockDefaultError = {
    status: 501
}
const res = {
    sendError: jest.fn(),
    status: jest.fn()
}

const errorHandler = require('../errorHandler')

describe('defaultError', () => {
    it('should return error in development', () => {
        req.app.get.mockReturnValueOnce('development')
        errorHandler(mockDefaultError, req, res)
        expect(req.app.get).toBeCalledWith('env')
        expect(res.sendError).toBeCalled()

    })
})