module.exports = {
    capSQL: true,
    connect () {
        console.log('DB connected')
    },
    disconnect () {
        console.log('DB disconnected')
    }
};