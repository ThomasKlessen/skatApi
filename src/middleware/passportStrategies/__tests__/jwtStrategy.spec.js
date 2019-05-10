const jwtStrategy = require('../jwtStrategy')
const mockPassport = {
    use: jest.fn()
}

describe('jwtStrategy', () => {
    it('should be defined', () => {
        expect(jwtStrategy).toBeDefined()
    })
})