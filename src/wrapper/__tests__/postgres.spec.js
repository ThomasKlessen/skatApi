const config = require('../../config')
const postgresOptions = require('../postgresOptions')
const postgresInstance = {}
const mockPGPromiseInstance = jest.fn(() => postgresInstance)
const mockPGPromiseFactory = jest.fn(() => mockPGPromiseInstance)
jest.mock('pg-promise', () => mockPGPromiseFactory)
const postgres = require('../postgres')

describe('postgres', () => {
    it('should call pgPromise factory with postgresOptions', () => {
        expect(mockPGPromiseFactory).toBeCalledTimes(1)
        expect(mockPGPromiseFactory).toBeCalledWith(postgresOptions)
    })

    it('should call pgPromise instance with initOptions', () => {
        expect(mockPGPromiseInstance).toBeCalledTimes(1)
        expect(mockPGPromiseInstance).toBeCalledWith(config.postgres)
    })

    it('returns the pgPromise instance', () => {
        expect(postgres).toBe(postgresInstance)
    })
})