const crypto = require('crypto');

const cryptoWrapper = {
    getHash(password:string, salt:string) {
        return crypto
            .pbkdf2Sync(password, salt, 10000, 512, 'sha512')
            .toString('hex');
    },
    generateSalt() {
        return crypto
            .randomBytes(16)
            .toString('hex');
    }
}

export default cryptoWrapper