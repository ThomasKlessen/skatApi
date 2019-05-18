const mockUserModel = {
    createUser: jest.fn(),
    getUserByName: jest.fn()
}
jest.mock('../../models/userModel', () => mockUserModel)
const mockCrypto = jest.mock('../../middleware/crypto/crypto')
const authCtrl = require('../authCtrl')
const user = {
    username: 'admin'
}

describe('authController', () => {
    it('register should call userModel.register with same user', () => {
        authCtrl.register(user)
        expect(mockUserModel.createUser).toBeCalledTimes(1)
    })

    it('login should call userModel.getUserByName with same user', () => {

        authCtrl.login(user)
        expect(mockUserModel.login).toBeCalledWith(user)
    })
})