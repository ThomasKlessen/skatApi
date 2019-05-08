const postgresOptions = require('../postgresOptions')

describe('postgresOptions', () => {
    it('should have capSQL property set to true', () => {
        expect(postgresOptions.capSQL).toBe(true)
    })
})