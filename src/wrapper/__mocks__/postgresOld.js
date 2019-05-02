console.log('mocked postgres called')

const mockPostgres = function() {
    const db = {}

    const any = () => Promise.resolve('test')
    return {
        any
    }
}

module.exports = mockPostgres()