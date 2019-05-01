jest.mock('../src/wrapper/crypto')
const postgres = jest.mock('../src/wrapper/postgres')
const userModel = require('../src/models/userModel')

describe('MyTest', () => {
    it('should work', ()=> {
        expect(userModel.hash()).toBe('hash')
    })

    it('should get all users', done => {
        userModel
            .getAll()
            .then(value => {
                expect(value).toBe('SELECT * FROM users;')
                done()
            })
    })
})