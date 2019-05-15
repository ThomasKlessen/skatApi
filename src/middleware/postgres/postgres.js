const postgresOptions = require('./postgresOptions')
const config = require('../../config')
const pgp = require('pg-promise')(postgresOptions)
const postgres = pgp(config.postgres)

module.exports = {
    any () {
        return postgres
            .any(...arguments)
    },
    one () {
        return postgres
            .one(...arguments)
    },
    none () {
        return postgres
            .none(...arguments)
    }
}