console.log('mocked crypto called')

module.exports = {
    any(query) {
        return Promise.resolve(query)
    }
}