const crypto = require('../src/wrapper/crypto')

describe('crypto wrapper', () => {
    it('should have getHash function', () => {
        expect(crypto.getHash('password', 'salt')).toBe('72629a41b076e588fba8c71ca37fadc9acdc8e7321b9cb4ea55fd0bf9fe8ed72def92b4c7dff5242a0254945b945394ce4d6008e947bdc7593085cd1e2f6a375e3efe32510e0f982abcc57991cb705243a3a42086e6a9e56c7b063c72636793b7622587882a872b19bb15e8fc8a865a8e83264bf802d0e52f825f18cc46a2147f733c36bb1377a9fbcc2e19b521c0ec860fb0c70106f02b68627231d13b7f9012b7dc88f20ef5c040002dda09db5437c41f7f8451732bf8bbbf9bc70ccd38f330137a7504167508be36f056d766c0405724460f09c5653860ea38607f71b517f4e8c6f2d0df5596c6189da018452cda0a8638ab236ea124bb067b6cf3ea8d99b1c53027c8b3a4b20d17d773821743ddc2429b856c8a59570f5901129106c0169f14f382859d4af99f984998ebedbf7f6f81f7de0c49633ae60fed5e7ecf8ec21d2d6b0e20bfe5fae6cc58da88a96ee4151f62b7e2704b92bc41f887d8b496b48aa71880e81ac0aa9d880793bf4d1aaf421ecbf1e6baecfd012eecddb166c3968b7ea73dcf7c2fdc7f44ef747f085067190af58ed91990da77f27045d806e80bfe5f3fc41d3049acd7fabd5241ac3b3fb2ca311a6a903f2332f4cbe8a61ab360a4f44496184b158243e780b1c807a7b8e7e4117677950357727eccf75b82fed6b1e6602e837de6f7677c49bd78fb0b21815cddca7a66ca70df8464f3937ec0b44')
    })
    it('should have generateSalt function', () => {
        expect(crypto.generateSalt()).toBeTruthy()
    })
})