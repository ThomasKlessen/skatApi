const mockPgMonitor = {
    error: jest.fn(),
    attach: jest.fn()
}
jest.mock('pg-monitor', () => mockPgMonitor)

const postgresOptions = require('../postgresOptions')

describe('postgresOptions', () => {
    it('should have capSQL property set to true', () => {
        expect(postgresOptions.capSQL).toBe(true)
    })
    it('should call monitor.attach', () => {
        expect(mockPgMonitor.attach).toHaveBeenCalledTimes(1)
    })
    it('should call monitor.error', () => {
        const err = {}
        const e = {}
        postgresOptions.error(err, e)
        expect(mockPgMonitor.error).toBeCalledWith(err, e)
    })
})