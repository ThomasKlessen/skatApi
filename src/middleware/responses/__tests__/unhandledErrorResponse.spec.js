const req = {
    app: {
        get: jest.fn()
    }
}
const mockDefaultError = {
    status: 501
}
const res = {
    status: jest.fn(),
    json: jest.fn()
}

const errorHandler = require('../unhandledErrorResponse')

describe('defaultError', () => {
    it('should return error in development', () => {
        req.app.get.mockReturnValueOnce('development')
        errorHandler(mockDefaultError, req, res)
        expect(req.app.get).toBeCalledWith('env')
        expect(res.json).toBeCalled()

    })
    it('should return no error in development', () => {
        req.app.get.mockReturnValueOnce('production')
        errorHandler({}, req, res)
        expect(req.app.get).toBeCalledWith('env')
        expect(res.json).toBeCalled()

    })
})