const mockUserModel = {
    createUser: jest.fn(),
    getUserByName: jest.fn()
}
jest.mock('../../models/userModel', () => mockUserModel)
const mockCrypto = jest.mock('../../middleware/crypto/crypto')
const authCtrl = require('../authCtrl')
const user = {
    username: 'admin',
    hash: 'hash'
}

describe('authController', () => {
    it('register should call userModel.register with same user', () => {
        authCtrl.register(user)
        expect(mockUserModel.createUser).toBeCalledTimes(1)
    })

    it('login should call userModel.getUserByName with same user', () => {
        mockUserModel.getUserByName.mockReturnValueOnce(Promise.resolve({
            hash: 'hash'
        }))
        authCtrl.login(user)
        expect(mockUserModel.getUserByName).toBeCalled()
    })

    it('login should return ApiError if hash not valid', () => {
        mockUserModel.getUserByName.mockReturnValueOnce(Promise.resolve({
            hash: 'hash1'
        }))
        authCtrl.login(user)
        expect(mockUserModel.getUserByName).toBeCalled()
    })
})