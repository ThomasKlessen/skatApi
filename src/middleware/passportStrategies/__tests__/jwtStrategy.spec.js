const registerJwtStrategy = require('../jwtStrategy')
const mockPassport = {
    use: jest.fn()
}

describe('jwtStrategy', () => {
    it('should be defined', () => {
        expect(registerJwtStrategy).toBeDefined()
    })
    it('should call passport use', () => {
        registerJwtStrategy(mockPassport)
        expect(mockPassport.use).toHaveBeenCalledTimes(1)
    })
})