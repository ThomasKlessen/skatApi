const jwtCallback = require('../jwtCallback')

describe('jwtCallback', () => {
    it('should be defined', () => {
        expect(jwtCallback).toBeDefined()
    })
    it('should call callback with null, jwt', () => {
        const jwt = {}
        const done = jest.fn()
        jwtCallback(jwt, done)
        expect(done).toBeCalledWith(null, jwt)
    })
})