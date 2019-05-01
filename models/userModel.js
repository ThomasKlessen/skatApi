'use strict';
const {db} = require('../middleware/postgres')
const jwt      = require('jsonwebtoken');
const config = require('../config')
const crypto = require('../wrapper/crypto')

class userModel {
    constructor (user) {
        this.user = user;
    }

    static getAll () {
        return db.any('SELECT * FROM users;')
    }

    static hash () {
        return crypto.getHash('password', 'salt')
    }

    static login ({username, password}) {
        return db
            .one("SELECT * FROM users WHERE username = $1", [username])
            .then(user => {
                const token = jwt.sign(user, config.jwtSecret);
                const hash = crypto.getHash(password, user.salt)
                if (hash === user.hash) {
                    return Promise.resolve({token, user})
                } else {
                    return Promise.reject({msg: 'wrong'})
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