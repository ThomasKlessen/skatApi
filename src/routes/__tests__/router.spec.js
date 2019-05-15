const mockRouter = {
    use: jest.fn()
}
const mockExpress = {
    Router: () => mockRouter
}
const mockAuthRouter = {}
const mockUserRouter = {}
jest.mock('../auth/authRoutes', () => mockAuthRouter)
jest.mock('../user/userRoutes', () => mockUserRouter)
jest.mock('express', () => mockExpress)

const router = require('../router')

describe('Router', () => {
    it('should export router', () => {
        expect(router).toBeDefined()
    })
    it('should use authRouter', () => {
        expect(mockRouter.use).toHaveBeenCalledWith('/auth', mockAuthRouter)
    })
    it('should use usersRouter', () => {
        expect(mockRouter.use).toHaveBeenCalledTimes(2)
    })
})