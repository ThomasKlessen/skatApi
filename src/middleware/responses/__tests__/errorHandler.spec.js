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

const errorHandler = require('../unhandledErrorResponse')

describe('defaultError', () => {
    it('should return error in development', () => {
        req.app.get.mockReturnValueOnce('development')
        errorHandler(mockDefaultError, req, res)
        expect(req.app.get).toBeCalledWith('env')
        expect(res.sendError).toBeCalled()

    })
    it('should return no error in development', () => {
        req.app.get.mockReturnValueOnce('production')
        errorHandler({}, req, res)
        expect(req.app.get).toBeCalledWith('env')
        expect(res.sendError).toBeCalled()

    })
})