console.log('mocked crypto called')

module.exports = {
    getHash(password, salt) {
        console.log('mocked getHash called')
        return 'hash'
    },
    generateSalt() {
        console.log('mocked generateSalt called')
        return 'salt'
    }
}