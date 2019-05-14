'use strict';
import db from '../middleware/postgres/postgres'
import jwt from 'jsonwebtoken'
import config from '../config'
import crypto from '../middleware/crypto/crypto'
import userQuery from './userQuery'

class userModel {
    static getAll () {
        return db.any(userQuery.getAllUsers)
    }

    // @ts-ignore
    static login ({username, password}) {
        return db
            .one(userQuery.getUserByName, [username])
            .then(user => {
                const hash = crypto.getHash(password, user.salt)
                if (hash === user.hash) {
                    const token = jwt.sign(user, config.jwtSecret);
                    return Promise.resolve({token, user})
                } else {
                    return Promise.reject(new Error('Login not valid'))
                }
            })
    }

    static register (payload: any) {
        const { username, password } = payload
        const salt = crypto.generateSalt()
        const hash = crypto.getHash(password, salt)
        return db.none(userQuery.register, [username, hash, salt])
    }
}

export default userModel