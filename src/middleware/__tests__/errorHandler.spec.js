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
describe('defaultError', () => {
    it('should return error in development', () => {
        defaultHandler(req, res, next)
        defaultError(mockDefaultError, req, res)
        req.app.get.mockReturnValueOnce('development')
        expect(req.app.get).toBeCalledWith('env')
        expect(res.sendError).toBeCalled()

    })
})