const postgresOptions = require('../postgresOptions')

describe('postgresOptions', () => {
    it('should have connect function', () => {
        postgresOptions.connect()
        expect(postgresOptions.connect).toBeDefined()
    })
    it('should have disconnect function', () => {
        postgresOptions.disconnect()
        expect(postgresOptions.disconnect).toBeDefined()
    })
    it('should have capSQL property set to true', () => {
        expect(postgresOptions.capSQL).toBe(true)
    })
})