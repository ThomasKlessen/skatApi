const crypto = require('crypto');
console.log('real crypto called')

const cryptoWrapper = {
    getHash(password, salt) {
        console.log('real getHash called')
        return crypto.pbkdf2Sync(password, salt, 10000, 512, 'sha512').toString('hex');
    },
    generateSalt() {
        console.log('real generateSalt called')
        return crypto.randomBytes(16).toString('hex');
    }
}

module.exports = cryptoWrapper