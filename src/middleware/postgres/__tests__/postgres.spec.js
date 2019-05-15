import config from '../../../config'
import postgresOptions from '../postgresOptions'
const postgresInstance = {
    any: jest.fn(),
    one: jest.fn(),
    none: jest.fn()
}
const mockPGPromiseInstance = jest.fn(() => postgresInstance)
const mockPGPromiseFactory = jest.fn(() => mockPGPromiseInstance)

jest.mock('pg-promise', () => mockPGPromiseFactory)
import postgres from '../postgres'

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
        expect(postgres.any).toBeDefined()
        expect(postgres.one).toBeDefined()
        expect(postgres.none).toBeDefined()
    })

    it('should call pgp.any with all arguments', (done) => {
        postgresInstance.any.mockReturnValueOnce(Promise.resolve())
        postgres
            .any(true, true)
            .then(() => {
                expect(postgresInstance.any).toHaveBeenCalledWith(true, true)
                done()
            })

    })

    it('should call pgp.one with all arguments', (done) => {
        postgresInstance.one.mockReturnValueOnce(Promise.resolve())
        postgres
            .one(true, true)
            .then(() => {
                expect(postgresInstance.one).toHaveBeenCalledWith(true, true)
                done()
            })

    })

    it('should call pgp.none with all arguments', (done) => {
        postgresInstance.none.mockReturnValueOnce(Promise.resolve())
        postgres
            .none(true, true)
            .then(() => {
                expect(postgresInstance.none).toHaveBeenCalledWith(true, true)
                done()
            })

    })

    it('should return dbError on reject', (done) => {
        postgresInstance.none.mockReturnValueOnce(Promise.reject('Fehler'))
        postgres
            .none(false)
            .catch(err => {
                expect(err).toBeDefined()
                done()
            })
    })
})