const mockAuthController = {
    login: jest.fn()
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

const postLogin = require('../postLogin')

describe('postLogin', () => {
    it('should call AuthController.login with req.body.user', (done) => {
        mockAuthController.login.mockReturnValueOnce(Promise.resolve(true))
        postLogin(req, res)
        expect(mockAuthController.login).toHaveBeenCalledWith(req.body.user)
        done()

    })
    it('should call sendJson if success', (done) => {
        mockAuthController.login.mockReturnValueOnce(Promise.resolve(true))
        postLogin(req, res)
            .then(() => {
                expect(res.sendJson).toHaveBeenCalledWith(true)
                done()
            })
    })
    it('should call sendError if error', (done) => {
        mockAuthController.login.mockReturnValueOnce(Promise.reject(false))
        postLogin(req, res)
            .then(() => {
                expect(res.sendError).toHaveBeenCalledWith(false)
                done()
            })
    })
})