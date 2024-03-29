const mockJwtStrategy = jest.fn()
const mockPassport = {
    initialize: jest.fn(() => () =>{}),
    use: jest.fn()
}
jest.mock('passport/lib', () => mockPassport)
jest.mock('./../passportStrategies/jwtStrategy', () => mockJwtStrategy)
const authentication = require('../authentication')

describe('authentication', () => {
    it('should be defined', () => {
        expect(authentication).toBeDefined()
    })
    it('should call jwtStrategy with passport', () => {
        authentication()
        expect(mockPassport.use).toBeCalledWith('jwt', mockJwtStrategy)
    })
})