const mockAuthController = {
    register: jest.fn()
}
jest.mock('../../../controller/authCtrl', () => mockAuthController)

const req = {
    body: {
        user: {}
    }
}

const res = {
    sendJson: jest.fn(),
    sendError: jest.fn()
}

const postRegister = require('../postRegister')

describe('postRegister', () => {
    it('should call AuthController.register with req.body.user', (done) => {
        mockAuthController.register.mockReturnValueOnce(Promise.resolve(true))
        postRegister(req, res)
        expect(mockAuthController.register).toHaveBeenCalledWith(req.body.user)
        done()

    })
    it('should call sendJson if success', (done) => {
        mockAuthController.register.mockReturnValueOnce(Promise.resolve(true))
        postRegister(req, res)
            .then(() => {
                expect(res.sendJson).toHaveBeenCalledWith(true)
                done()
            })
    })
    it('should call sendError if error', (done) => {
        mockAuthController.register.mockReturnValueOnce(Promise.reject(false))
        postRegister(req, res)
            .then(() => {
                expect(res.sendError).toHaveBeenCalledWith(false)
                done()
            })
    })
})