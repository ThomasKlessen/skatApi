import postgresOptions from './postgresOptions'
import config from '../../config'
import pgpFactory from 'pg-promise'
import dbError from '../../errors/dbErrors'
const pgp = pgpFactory(postgresOptions)
const postgres = pgp(config.postgres)

const handleDbError = (err:Error) => {
    return Promise.reject(new dbError())
}

export default {
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