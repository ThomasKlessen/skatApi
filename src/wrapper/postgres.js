const initOptions = {
    capSQL: true,
    connect () {
        console.log('DB connected')
    },
    disconnect () {
        console.log('DB disconnected')
    }
};
const pgp = require('pg-promise')(initOptions);
const config = require('../../config')

const postgres = pgp(config.postgres);

module.exports = postgres