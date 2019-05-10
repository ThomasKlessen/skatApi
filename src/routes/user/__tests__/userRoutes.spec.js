const mockRouter = {
    post: jest.fn()
}
const mockExpress = {
    Router: () => mockRouter
}
jest.mock('express', () => mockExpress)

require('../userRoutes')
const postGetAll = require('../postGetAll')

describe('authRoutes', () => {
    it('should register postGetAll', () => {
        expect(mockRouter.post).toHaveBeenCalledWith('/getAll', postGetAll)
    })
})