const postgresOptions = require('./postgresOptions')
const config = require('../../config')
const pgp = require('pg-promise')(postgresOptions)
const postgres = pgp(config.postgres)
const dbError = require('../../errors/dbErrors')

const handleDbError = err => {
    return Promise.reject(new dbError())
}

module.exports = {
    any () {
        return postgres
            .any(...arguments)
            .catch(handleDbError)
    },
    one () {
        return postgres
            .one(...arguments)
            .catch(handleDbError)
    },
    none () {
        return postgres
            .none(...arguments)
            .catch(handleDbError)
    }
}