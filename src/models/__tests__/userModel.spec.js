const mockDb = {
    any: jest.fn(),
    one: jest.fn(),
    none: jest.fn(() => {
        return Promise.resolve(true)
    })
}
jest.mock('../../wrapper/crypto')
jest.mock('../../wrapper/postgres',() => mockDb)
const userModel = require('../userModel')

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
            const loginInformation = {
                username: 'user',
                password: 'password'
            }
            const dbResponse = {
                username: 'Admin',
                hash: 'hash'
            }
            mockDb.one.mockReturnValueOnce(Promise.resolve(dbResponse))
            userModel
                .login(loginInformation)
                .then(({token, user}) => {
                    expect(token).toBeDefined()
                    expect(user).toBe(dbResponse)
                    done()
                })
        })

        it('should throw if password not valid', done => {
            const loginInformation = {
                username: 'user',
                password: 'password'
            }
            const dbResponse = {
                username: 'Admin',
                hash: 'invalidHash'
            }
            mockDb.one.mockReturnValueOnce(Promise.resolve(dbResponse))
            userModel
                .login(loginInformation)
                .catch(err => {
                    expect(err.message).toBe('Login not valid')
                    done()
                })
        })
    })

    describe('register', () => {
        it('should register', done => {
            const loginInformation = {
                username: 'user',
                password: 'password'
            }
            const dbResponse = {
                username: 'Admin',
                hash: 'invalidHash'
            }
            userModel
                .register(loginInformation)
                .then(() => {
                    expect(mockDb.none).toBeCalledWith('INSERT INTO users(username, hash, salt) VALUES($1, $2, $3)', ["user", "hash", "salt"])
                    done()
                })
        })
    })
})