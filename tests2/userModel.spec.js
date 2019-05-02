const mockDb = {
    any: jest.fn()
}
jest.mock('../src/wrapper/crypto')
jest.mock('../src/wrapper/postgres',() => mockDb)
const userModel = require('../src/models/userModel')

describe('MyTest', () => {
    it('should work', ()=> {
        expect(userModel.hash()).toBe('hash')
    })

    it('should get all users', done => {
        const dbResponse = [{username: 'Admin'}]
        mockDb.any.mockReturnValueOnce(Promise.resolve(dbResponse))
        userModel
            .getAll()
            .then(value => {
                expect(value).toBe(dbResponse)
                done()
            })
    })
})