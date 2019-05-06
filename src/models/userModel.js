'use strict';
const db = require('../wrapper/postgres')
const jwt      = require('jsonwebtoken');
const config = require('../../config')
const crypto = require('../wrapper/crypto')
const userQuery = require('./userQuery')

class userModel {
    static getAll () {
        return db.any(userQuery.getAllUsers)
    }

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

    static register (payload) {
        const { username, password } = payload
        const salt = crypto.generateSalt()
        const hash = crypto.getHash(password, salt)
        return db.none(userQuery.register, [username, hash, salt])
    }
}

module.exports = userModel