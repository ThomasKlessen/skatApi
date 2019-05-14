import postgresOptions from './postgresOptions'
import config from '../../config'
import pgpFactory, {TQuery} from 'pg-promise'
import DbError from '../../errors/dbErrors'
const pgp = pgpFactory(postgresOptions)
const postgres = pgp(config.postgres)

const handleDbError = (err:Error) => {
    return Promise.reject(new DbError(err.message))
}

export default {
    any (query:TQuery, values?:any) {
        return postgres
            .any(query, values)
            .catch(handleDbError)
    },
    one (query:TQuery, values?:any) {
        return postgres
            .one(query, values)
            .catch(handleDbError)
    },
    none (query: TQuery, values?:any) {
        return postgres
            .none(query, values)
            .catch(handleDbError)
    }
}