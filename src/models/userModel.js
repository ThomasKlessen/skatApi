'use strict';
const db = require('../wrapper/postgres')
const jwt      = require('jsonwebtoken');
const config = require('../../config')
const crypto = require('../wrapper/crypto')

class userModel {
    static getAll () {
        return db.any('SELECT * FROM users;')
    }

    static login ({username, password}) {
        return db.one("SELECT * FROM users WHERE username = $1", [username])
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
        return db.none('INSERT INTO users(username, hash, salt) VALUES($1, $2, $3)', [username, hash, salt])
    }
}

module.exports = userModel