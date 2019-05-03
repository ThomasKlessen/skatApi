const postgresOptions = require('./postgresOptions')
const config = require('../../config')
const pgp = require('pg-promise')(postgresOptions)
const postgres = pgp(config.postgres)
module.exports = postgres