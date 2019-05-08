const mockUserModel = {
    register: jest.fn(),
    login: jest.fn()
}
jest.mock('../../models/userModel', () => mockUserModel)
const authCtrl = require('../authCtrl')
const user = {}

describe('authController', () => {
    it('register should call userModel.register with same user', () => {
        authCtrl.register(user)
        expect(mockUserModel.register).toBeCalledWith(user)
    })

    it('login should call userModel.login with same user', () => {
        authCtrl.login(user)
        expect(mockUserModel.login).toBeCalledWith(user)
    })
})