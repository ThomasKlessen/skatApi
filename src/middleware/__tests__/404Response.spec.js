const next = jest.fn()
const handle404 = require('../response404')

describe('404Response', () => {
    it('should call next with 404 status error', () => {
        handle404(null, null, next)
        expect(next).toBeCalled()
    })
})