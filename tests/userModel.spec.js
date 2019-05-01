jest.mock('../wrapper/crypto')
const userModel = require('../models/userModel')

describe('MyTest', () => {
    it('should work', ()=> {
        expect(userModel.hash()).toBe('hash')
    })
})