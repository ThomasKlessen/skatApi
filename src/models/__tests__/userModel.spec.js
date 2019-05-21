const mockDb = {
    any: jest.fn(),
    one: jest.fn(),
    none: jest.fn(() => {
        return Promise.resolve(true)
    })
}
jest.mock('../../middleware/crypto/crypto')
jest.mock('../../middleware/postgres/postgres',() => mockDb)
const userModel = require('../userModel')
const userQuery = require('../userQuery')
const ApiError = require('../../errors/apiError')

describe('userModel', () => {
    it('should get all users', done => {
        const dbResponse = [{username: 'Admin'}]
        mockDb.any.mockReturnValueOnce(Promise.resolve(dbResponse))
        userModel
            .getAll()
            .then(value => {
                expect(mockDb.any).toHaveBeenCalledTimes(1)
                expect(value).toBe(dbResponse)
                done()
            })
    })

    describe('login function', () => {
        it('should return token and dbUser if valid', done => {
            const username = 'user'
            const dbResponse = {}
            mockDb.one.mockReturnValueOnce(Promise.resolve(dbResponse))
            userModel
                .getUserByName(username)
                .then(user => {
                    expect(mockDb.one).toBeCalledWith(userQuery.getUserByName, [username])
                    expect(user).toBe(dbResponse)
                    done()
                })
        })

        it('should throw ApiError if user not found', done => {
            const username = 'user'
            mockDb.one.mockReturnValueOnce(Promise.reject(false))
            userModel
                .getUserByName(username)
                .catch(err => {
                    expect(err).toBeInstanceOf(ApiError)
                    done()
                })
        })
    })

    describe('createUser', () => {
        it('should createUser', done => {
            const loginInformation = {
                username: 'user',
                hash: 'password',
                salt: 'salt'
            }
            userModel
                .createUser(loginInformation)
                .then(() => {
                    expect(mockDb.none).toBeCalledWith(userQuery.createUser, [loginInformation.username, loginInformation.hash, loginInformation.salt])
                    done()
                })
        })

        it('should throw ApiError if user not created', done => {
            const username = 'user'
            mockDb.none.mockReturnValueOnce(Promise.reject(false))
            const loginInformation = {
                username: 'user',
                hash: 'password',
                salt: 'salt'
            }
            userModel
                .createUser(loginInformation)
                .catch(() => {
                    expect(mockDb.none).toBeCalledWith(userQuery.createUser, [loginInformation.username, loginInformation.hash, loginInformation.salt])
                    done()
                })
        })
    })
})