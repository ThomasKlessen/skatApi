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

const authRoutes = require('../authRoutes')

describe('authRoutes', () => {
    it('should register login', () => {
        expect(mockRouter.post).toHaveBeenCalledWith('/login')
    })
})