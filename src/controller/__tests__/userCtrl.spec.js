const mockUserModel = {
    getAll: jest.fn()
}
jest.mock('../../models/userModel', () => mockUserModel)
const userCtrl = require('../userCtrl')

describe('userController', () => {
    it('getAll should call userModel.getAll', () => {
        mockUserModel.getAll.mockReturnValueOnce(Promise.resolve(true))
        userCtrl.getAll()
        expect(mockUserModel.getAll).toHaveBeenCalledTimes(1)
    })

    it('getAll should throw error', (done) => {
        mockUserModel.getAll.mockReturnValueOnce(Promise.reject(false))
        userCtrl
            .getAll()
            .catch(err => {
                expect(err).toBeDefined()
                done()
            })
    })

    it('getAll should pipe dbErrors', (done) => {
        const testDbError = {}
        mockUserModel.getAll.mockReturnValueOnce(Promise.reject(testDbError))
        userCtrl
            .getAll()
            .catch(err => {
                expect(err).toBe(testDbError)
                done()
            })
    })
})