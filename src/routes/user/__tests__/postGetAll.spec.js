const mockUserController = {
    getAll: jest.fn()
}
jest.mock('../../../controller/userCtrl', () => mockUserController)

const req = {}

const res = {
    sendJson: jest.fn(),
    sendError: jest.fn()
}

const postGetAll = require('../postGetAll')

describe('postGetAll', () => {
    it('should call UserController.getAll', (done) => {
        mockUserController.getAll.mockReturnValueOnce(Promise.resolve(true))
        postGetAll(req, res)
        expect(mockUserController.getAll).toHaveBeenCalledTimes(1)
        done()

    })
    it('should call sendJson if success', (done) => {
        mockUserController.getAll.mockReturnValueOnce(Promise.resolve(true))
        postGetAll(req, res)
            .then(() => {
                expect(res.sendJson).toHaveBeenCalledWith(true)
                done()
            })
    })
    it('should call sendError if error', (done) => {
        mockUserController.getAll.mockReturnValueOnce(Promise.reject(false))
        postGetAll(req, res)
            .then(() => {
                expect(res.sendError).toHaveBeenCalledWith(false)
                done()
            })
    })
})