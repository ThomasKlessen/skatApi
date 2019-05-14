const mockRouter = {
    use: jest.fn()
}
const mockExpress = {
    Router: () => mockRouter
}
const authRouter = {}
const userRouter = {}
jest.mock('../auth/authRoutes', () => authRouter)
jest.mock('../user/userRoutes', () => userRouter)
jest.mock('express', () => mockExpress)

const router = require('../apiRouter')

describe('Router', () => {
    it('should export router', () => {
        expect(router).toBeDefined()
    })
    it('should use authRouter', () => {
        expect(mockRouter.use).toHaveBeenCalledWith('/auth', authRouter)
    })
    it('should use usersRouter', () => {
        expect(mockRouter.use).toHaveBeenCalledTimes(2)
    })
})