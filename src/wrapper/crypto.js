const crypto = require('crypto');

const cryptoWrapper = {
    getHash(password, salt) {
        return crypto.pbkdf2Sync(password, salt, 10000, 512, 'sha512').toString('hex');
    },
    generateSalt() {
        return crypto.randomBytes(16).toString('hex');
    }
}

module.exports = cryptoWrapper