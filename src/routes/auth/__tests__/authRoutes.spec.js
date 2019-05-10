const mockRouter = {
    post: jest.fn()
}
const mockExpress = {
    Router: () => mockRouter
}
const mockAuthController = {
    login: jest.fn(),
    register: jest.fn()
}
jest.mock('../../../controller/authCtrl', () => mockAuthController)
jest.mock('express', () => mockExpress)

require('../authRoutes')
const postLogin = require('../postLogin')
const postRegister = require('../postRegister')

describe('authRoutes', () => {
    it('should register postLogin', () => {
        expect(mockRouter.post).toHaveBeenCalledWith('/login', postLogin)
    })
    it('should register postRegister', () => {
        expect(mockRouter.post).toHaveBeenCalledWith('/register', postRegister)
    })
})